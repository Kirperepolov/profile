import React from "react";

import type {ProjectEntry} from "../../types/types.ts";

interface ProjectCardProps {
    project: ProjectEntry;
}

export function ProjectCard({project}: ProjectCardProps) {
    return (
        <li className="project-card">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
                <span className="text-sm text-primary/70">{project.period}</span>
            </div>
            <p className="mt-3 text-primary/90">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map(item => (
                    <li key={item} className="rounded-full bg-warning/20 px-3 py-1 text-xs font-medium text-primary">
                        {item}
                    </li>
                ))}
            </ul>
            {project.highlight && (
                <p className="mt-4 border-l-2 border-accent pl-4 text-sm italic text-primary/80">
                    {project.highlight}
                </p>
            )}
            {project.liveUrl && (
                <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 font-medium text-primary underline decoration-accent decoration-2 underline-offset-4 hover:decoration-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                >
                    Visit live site ↗
                </a>
            )}
        </li>
    );
}
