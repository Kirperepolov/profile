import {readFileSync, writeFileSync, mkdirSync, existsSync} from 'node:fs';
import {join, dirname} from 'node:path';
import {gunzipSync} from 'node:zlib';
import {scryptSync, createDecipheriv} from 'node:crypto';

const ROOT = process.cwd();
const ENC_PATH = join(ROOT, 'content.enc');

if (!existsSync(ENC_PATH)) {
    console.warn('content.enc not found — skipping content unpack (nothing to restore yet).');
    process.exit(0);
}

const key = process.env.CONTENT_KEY;
if (!key) {
    console.error('CONTENT_KEY environment variable is not set — cannot unpack content.enc.');
    process.exit(1);
}

const raw = readFileSync(ENC_PATH);
const salt = raw.subarray(0, 16);
const iv = raw.subarray(16, 28);
const authTag = raw.subarray(28, 44);
const ciphertext = raw.subarray(44);

const derivedKey = scryptSync(key, salt, 32);
const decipher = createDecipheriv('aes-256-gcm', derivedKey, iv);
decipher.setAuthTag(authTag);

let payload;
try {
    payload = Buffer.concat([decipher.update(ciphertext), decipher.final()]);
} catch {
    console.error('Failed to decrypt content.enc — check that CONTENT_KEY is correct.');
    process.exit(1);
}

const manifest = JSON.parse(gunzipSync(payload).toString('utf8'));

let count = 0;
for (const [relPath, base64] of Object.entries(manifest)) {
    const fullPath = join(ROOT, relPath);
    mkdirSync(dirname(fullPath), {recursive: true});
    writeFileSync(fullPath, Buffer.from(base64, 'base64'));
    count++;
}

console.log(`Unpacked ${count} file(s) from content.enc.`);
