import React from "react";
import "./Ukraine.scss";

export const Ukraine = () => {
    return (
        <section className="ukraine" id="ukraine">
            <main className="ukraine__content">
                <div className="ukraine__content_links">
                    <p className="content__links_desc">
                        This part of the website is not about me anymore. It’s
                        about war, genocide, blood and tears of Ukrainian
                        people. <br />
                        This is a list of trusted websites, that support
                        Ukrainian people, army and refugees. Please, donate,
                        every penny saves lives.{" "} < br/>
                        <span className="slava__blue">Slava</span>{" "}
                        <span className="ukraine__yellow">Ukraini</span>!{" "}
                    </p>
                    <ul className="help__links">
                        <li>
                            <a
                                href="https://u24.gov.ua/uk"
                                target="_blank"
                                rel="noreferrer"
                            >
                                UNITED 24
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.razomforukraine.org/about-us/our-story/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                RAZOM
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://prytulafoundation.org/en"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Charity foundation of Serhiy Prytula
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://internationalmedicalcorps.org/who-we-are/our-history/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                International Medical Corps
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.savethechildren.org/us/about-us/why-save-the-children/history"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Save the children
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://savelife.in.ua/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Povernis Zhivim
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </section>
    );
};
