import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import project1Image from './assets/project1.png';
import project2Image from './assets/project2.png';
import project3Image from './assets/project3.png';

export default function Projects() {
    return (
        <section id="projects" className="h-screen">
            <h2 className="text-4xl font-bold text-center">My Projects</h2>
            <section className="p-10 bg-gray-950 text-white space-y-10">
                {/* Project 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <img src={project1Image} alt="Project 1 Screenshot" className="w-full md:w-1/2 h-64 object-contain rounded-lg shadow-lg" />
                    <div className="flex-1 p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold mb-2">Profilare</h3>
                        <p className="text-gray-300 mb-4">A portfolio management system using Laravel Framework.</p>
                        <a href="https://github.com/scripty-script/profilare-docs.git" className="text-gray-400 hover:text-white flex items-center">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            View on GitHub
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <img src={project2Image} alt="Project 2 Screenshot" className="w-full md:w-1/2 h-64 object-contain rounded-lg shadow-lg" />
                    <div className="flex-1 p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold mb-2">RHD POS</h3>
                        <p className="text-gray-300 mb-4">A POS System developed using VB.net Framework.</p>
                        <a href="https://github.com/rntjfr/IT12.git" className="text-gray-400 hover:text-white flex items-center">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            View on GitHub
                        </a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                    <img src={project3Image} alt="Project 3 Screenshot" className="w-full md:w-1/2 h-64 object-contain rounded-lg shadow-lg" />
                    <div className="flex-1 p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold mb-2">Music Player</h3>
                        <p className="text-gray-300 mb-4">A Music Player developed using Flutter Framework</p>
                        <a href="https://github.com/rntjfr/IT14.git" className="text-gray-400 hover:text-white flex items-center">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            View on GitHub
                        </a>
                    </div>
                </div>

            </section>

        </section>
    );
}
