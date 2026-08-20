import React from "react";

import type {TimelineEntry} from "../../data/types";

interface TimelineItemProps {
    entry: TimelineEntry;
}

export function TimelineItem({entry}: TimelineItemProps) {
    return (
        <li className="timeline-item">
            <div className="timeline-item__marker" aria-hidden="true"/>
            <div className="timeline-item__content">
                <h3 className="text-lg font-semibold text-primary">
                    {entry.role} <span className="font-normal text-primary/70">· {entry.company}</span>
                </h3>
                <p className="text-sm text-primary/70">{entry.location} — {entry.period}</p>
                <ul className="mt-3 space-y-1.5 text-primary/90">
                    {entry.bullets.map(bullet => (
                        <li key={bullet} className="pl-4 -indent-4">
                            <span aria-hidden="true">— </span>{bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </li>
    );
}
