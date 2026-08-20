import React from "react";

import './hero.scss';
import {cvDownload} from "../../data/contact";

const tags = ['Full-stack', 'Product-minded', 'Technical leadership'];

export function Hero() {
    return (
        <section
            id="hero"
            aria-labelledby="hero-heading"
            className="flex min-h-[calc(100vh-4rem)] items-center bg-background px-28 py-16 text-primary max-sm:px-6"
        >
            <div className="max-w-2xl">
                <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary/70">
                    Full-Stack Engineer · Kraków, Poland
                </p>
                <h1 id="hero-heading" className="text-4xl font-bold leading-tight sm:text-5xl">
                    Kyrylo Perepolov
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-primary/90">
                    10+ years building full-stack products end to end — from Angular and TypeScript
                    frontends to Node.js and .NET backends — with a track record of technical
                    leadership and shipping real platforms solo, in production.
                </p>
                <ul className="mt-8 flex flex-wrap gap-3">
                    {tags.map(tag => (
                        <li
                            key={tag}
                            className="rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-primary"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-4">
                    <a
                        href="#experience"
                        className="rounded-full bg-primary px-6 py-3 font-medium text-background transition-colors hover:bg-accent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                        View experience
                    </a>
                    <a
                        href="#contact"
                        className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                        Get in touch
                    </a>
                    <a
                        href={cvDownload.href}
                        download={cvDownload.download}
                        className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    >
                        {cvDownload.label}
                    </a>
                </div>
            </div>
        </section>
    );
}
