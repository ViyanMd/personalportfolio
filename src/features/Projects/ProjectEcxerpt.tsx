import React from "react";
import { Props } from "./types/projectTypes";
import coin from "@/assets/images/coin.png"

export const ProjectEcxerpt: React.FC<Props> = (props) => {
    const { project } = props;

    let stack = project.stack.join(',');

    return (
        <div className="project">
            <img className="decor__coin"src={coin} alt="coin" />
            <div className="project__desc">
                <a className ="project__desc_name" href={project.repo} target="_blank" rel="noreferrer">{project.name}</a>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">Live URL</a>
                <div className="project__stack">Stack: {stack}</div>
            </div>
        </div>
    );
};
