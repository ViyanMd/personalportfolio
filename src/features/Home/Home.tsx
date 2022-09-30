import React from "react";
import "./Home.scss";

export const Home: React.FC = () => {
    return (
        <section className="home">
            <div className="home__content">
                <h1 className="content__header">
                    Hi, my name is Viyan Mokhammad.
                </h1>
                <p className="content__hero">
                    I am a frontend developer based in Norway. Check out my
                    personal website &#40;this one&#41; and let's{" "}
                    <a
                        className="content__hero_connect"
                        href="https://www.linkedin.com/in/viyanmd/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        connect
                    </a>
                    ! I am currently looking for a job.
                </p>
            </div>
        </section>
    );
};
