import {readFileSync, writeFileSync, readdirSync, statSync} from 'node:fs';
import {join, relative} from 'node:path';
import {gzipSync} from 'node:zlib';
import {randomBytes, scryptSync, createCipheriv} from 'node:crypto';

const ROOT = process.cwd();
const TARGET_DIRS = ['src/data', 'public/cv'];

function collectFiles(dir, acc = []) {
    const fullDir = join(ROOT, dir);
    let entries;
    try {
        entries = readdirSync(fullDir);
    } catch {
        return acc;
    }
    for (const entry of entries) {
        const entryPath = join(fullDir, entry);
        const relPath = relative(ROOT, entryPath).split('\\').join('/');
        if (statSync(entryPath).isDirectory()) {
            collectFiles(relPath, acc);
        } else {
            acc.push(relPath);
        }
    }
    return acc;
}

const key = process.env.CONTENT_KEY;
if (!key) {
    console.error('CONTENT_KEY environment variable is not set.');
    process.exit(1);
}

const files = TARGET_DIRS.flatMap(dir => collectFiles(dir));
if (files.length === 0) {
    console.error('No files found under src/data or public/cv — nothing to pack.');
    process.exit(1);
}

const manifest = {};
for (const relPath of files) {
    manifest[relPath] = readFileSync(join(ROOT, relPath)).toString('base64');
}

const payload = gzipSync(Buffer.from(JSON.stringify(manifest)));

const salt = randomBytes(16);
const iv = randomBytes(12);
const derivedKey = scryptSync(key, salt, 32);
const cipher = createCipheriv('aes-256-gcm', derivedKey, iv);
const ciphertext = Buffer.concat([cipher.update(payload), cipher.final()]);
const authTag = cipher.getAuthTag();

const output = Buffer.concat([salt, iv, authTag, ciphertext]);
writeFileSync(join(ROOT, 'content.enc'), output);

console.log(`Packed ${files.length} file(s) into content.enc (${output.length} bytes).`);
