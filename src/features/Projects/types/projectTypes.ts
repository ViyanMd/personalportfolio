export type Props = {
    project: Project
}

interface Project {
    id: number,
    name: string,
    description: string,
    stack: String[],
    link: string,
    repo: string,
}