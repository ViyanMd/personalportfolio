import React, { useState } from "react";
import "./Connect.scss";

export const Connect: React.FC = () => {
    const [gmailStatus, setGmailStatus] = useState(true);

    
    const handleShowGmail = () => {
        setGmailStatus(!gmailStatus);
    }

    let content;

    if(gmailStatus) {
        content = "GMAIL";
    } else {
        content = "viyanomd@gmail.com"
    }

    return (
        <section className="connect" id="links">
            <header>
                Here's a couple of ways we can get in touch and some more links
            </header>
            <main className="connect__content">
                <ul className="content__links">
                    <li key="linkedin">
                        <a
                            href="https://www.linkedin.com/in/viyanmd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li key="telegram">
                        <a
                            href="https://t.me/viyanmd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Telegram
                        </a>
                    </li>
                    <li key="gmail" onClick={handleShowGmail}>{content}</li>
                    <li key="twitter">
                        <a
                            href="https://twitter.com/CyberPapa4"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Twitter{" (personal)"}
                        </a>
                    </li>
                    <li key="medium">
                        <p className="medium__intro">
                            I'am also writing my tech/lifestyle blog that
                            you can check out at{" "}
                            <a
                                className="medium__link"
                                href="https://medium.com/@viyanmokhammad"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Medium
                            </a>
                        </p>
                    </li>
                </ul>
            </main>
        </section>
    );
};
