import React from "react";

import './nav.scss';

const links = [
    {href: '#hero', label: 'Home'},
    {href: '#experience', label: 'Experience'},
    {href: '#projects', label: 'Projects'},
    {href: '#skills', label: 'Skills'},
    {href: '#contact', label: 'Contact'},
];

export function Nav() {
    return (
        <nav aria-label="Section navigation">
            <a className="nav__brand" href="#hero">Kyrylo Perepolov</a>
            <ul className="nav__links">
                {links.map(link => (
                    <li key={link.href}>
                        <a href={link.href}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
