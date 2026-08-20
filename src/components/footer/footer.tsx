import React from "react";

import './footer.scss';

export function Footer() {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Kyrylo Perepolov</p>
        </footer>
    );
}