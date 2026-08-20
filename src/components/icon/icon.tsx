import React from "react";

export type IconName = "github-icon" | "linkedin-icon";

interface IconProps {
    name: IconName;
    className?: string;
}

export function Icon({name, className}: IconProps) {
    return (
        <svg className={className} aria-hidden="true" focusable="false">
            <use href={`/icons.svg#${name}`}/>
        </svg>
    );
}
