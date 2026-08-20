import React from 'react';
import {BrowserRouter,} from "react-router-dom";
import {Nav} from "./components/nav/nav.tsx";
import {Hero} from "./components/hero/hero.tsx";
import {Experience} from "./components/experience/experience.tsx";
import {Projects} from "./components/projects/projects.tsx";
import {Skills} from "./components/skills/skills.tsx";
import {Contact} from "./components/contact/contact.tsx";
import {Footer} from "./components/footer/footer.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <a
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-primary focus:outline focus:outline-2 focus:outline-accent"
                href="#main-content"
            >
                Skip to content
            </a>
            <Nav/>
            <main id="main-content">
                <Hero/>
                <Experience/>
                <Projects/>
                <Skills/>
                <Contact/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}
