import React from 'react';

export default function Projects() {
    return (
        <section id="projects" className="p-20 h-screen">

            <h2 className="text-4xl font-bold text-center">My Projects</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white bg-opacity-15 backdrop-blur-sm p-5 rounded-lg">
                    <h3 className="text-2xl font-bold">Project Title</h3>
                    <p className="mt-2">Brief description of the project.</p>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </section>
    );
}
