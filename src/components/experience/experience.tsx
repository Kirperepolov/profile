import React from "react";

import './experience.scss';
import {experience} from "../../data/experience";
import {education} from "../../data/education";
import {TimelineItem} from "./timeline-item.tsx";

export function Experience() {
    return (
        <section
            id="experience"
            aria-labelledby="experience-heading"
            className="bg-background px-28 py-20 text-primary max-sm:px-6"
        >
            <div className="mx-auto max-w-3xl">
                <h2 id="experience-heading" className="text-3xl font-bold">Experience</h2>
                <ol className="timeline mt-10">
                    {experience.map(entry => (
                        <TimelineItem key={`${entry.company}-${entry.period}`} entry={entry}/>
                    ))}
                </ol>

                <h3 className="mt-16 text-xl font-semibold">Education</h3>
                <ul className="mt-4 space-y-2">
                    {education.map(entry => (
                        <li key={entry.degree} className="text-primary/90">
                            <span className="font-medium text-primary">{entry.degree}</span>
                            {' — '}{entry.institution} ({entry.period})
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
