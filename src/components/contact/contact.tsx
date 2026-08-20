import React from "react";

import './contact.scss';
import {contactLinks} from "../../data/contact";
import {Icon} from "../icon/icon.tsx";

export function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="bg-background px-28 py-20 text-primary max-sm:px-6"
        >
            <div className="mx-auto max-w-3xl">
                <h2 id="contact-heading" className="text-3xl font-bold">Contact</h2>
                <p className="mt-4 text-primary/90">
                    Open to full-stack and product engineering roles — reach out through any of the channels below.
                </p>
                <ul className="mt-8 flex flex-wrap gap-4">
                    {contactLinks.map(link => {
                        const linkAttrs = link.download
                            ? {download: link.download}
                            : link.href.startsWith('mailto:')
                                ? {}
                                : {target: '_blank', rel: 'noreferrer'};
                        return (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    {...linkAttrs}
                                    className="contact-link inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                                >
                                    {link.icon && <Icon name={link.icon} className="h-4 w-4 fill-current"/>}
                                    {link.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
