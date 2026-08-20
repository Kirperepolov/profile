import React from "react";

import './skills.scss';
import {skills} from "../../data/skills";

export function Skills() {
    return (
        <section
            id="skills"
            aria-labelledby="skills-heading"
            className="bg-background px-28 py-20 text-primary max-sm:px-6"
        >
            <div className="mx-auto max-w-3xl">
                <h2 id="skills-heading" className="text-3xl font-bold">Skills</h2>
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    {skills.map(group => (
                        <div key={group.category}>
                            <h3 className="text-base font-semibold text-primary">{group.category}</h3>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {group.items.map(item => (
                                    <li
                                        key={item}
                                        className="skill-chip rounded-full px-3 py-1 text-sm text-primary"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
