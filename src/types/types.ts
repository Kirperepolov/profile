export interface TimelineEntry {
    role: string;
    company: string;
    location: string;
    period: string;
    bullets: string[];
}

export interface EducationEntry {
    degree: string;
    institution: string;
    period: string;
}

export interface ProjectEntry {
    name: string;
    period: string;
    description: string;
    stack: string[];
    liveUrl?: string;
    highlight?: string;
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface ContactLink {
    label: string;
    href: string;
    icon?: 'github-icon' | 'linkedin-icon';
    download?: string;
}
