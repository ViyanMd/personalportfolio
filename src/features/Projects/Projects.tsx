import React from "react";
import data from "@/api/data/githubData.json";
import { ProjectEcxerpt } from "./ProjectEcxerpt";
import "./Projects.scss";

export const Projects = () => {
    let content = data.projects.map((project) => (
        <ProjectEcxerpt key={project.id} project={project} />
    ));

    return (
        <section id="projects" className="projects">
            <header className="projects__header">Projects</header>
            <div className="projects__list">{content}</div>
            <div className="projects__github">
                If you'd like to see all of my projects with source code, check
                out my{" "}
                <a
                    href="https://github.com/ViyanMd"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                !
            </div>
        </section>
    );
};
