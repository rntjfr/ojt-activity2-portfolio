import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-950">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8 text-white">Contact Me</h2>
                <div className="flex justify-center space-x-6">
                    {/* Facebook */}
                    <a
                        href="https://www.facebook.com/mathpsych0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    {/* Email */}
                    <a
                        href="mailto:tauthorex@gmail.com"
                        className="text-white hover:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                    {/* GitHub */}
                    <a
                        href="https://github.com/rntjfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    {/* Upwork */}
                    {/* <a
                        href="https://www.upwork.com/freelancers/~yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Upwork_logo_2015.svg/1200px-Upwork_logo_2015.svg.png"
                            alt="Upwork"
                            className="w-8 h-8"
                        />
                    </a> */}
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/rtautho"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
