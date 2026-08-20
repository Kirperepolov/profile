import React from "react";

import './projects.scss';
import {projects} from "../../data/projects";
import {ProjectCard} from "./project-card.tsx";

export function Projects() {
    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="bg-background px-28 py-20 text-primary max-sm:px-6"
        >
            <div className="mx-auto max-w-3xl">
                <h2 id="projects-heading" className="text-3xl font-bold">Projects</h2>
                <ul className="mt-10 space-y-8">
                    {projects.map(project => (
                        <ProjectCard key={project.name} project={project}/>
                    ))}
                </ul>
            </div>
        </section>
    );
}
