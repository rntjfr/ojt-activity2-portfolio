import React from 'react';

export default function Hero() {
    return (
        <section className="p-20 h-screen flex flex-col justify-center items-center">
            <br />
            <br />

            <h1 className="text-5xl font-bold">Hello, I'm Rexdan N. Tautho</h1>
            <p className="mt-4 text-2xl">A Junior Software Engineer</p>
            <a href="#about" className="mt-8 px-6 py-3 bg-white bg-opacity-15 backdrop-blur-sm p-5 rounded-lg text-white font-semibold rounded-full">
                Learn More
            </a>
        </section>
    );
}
