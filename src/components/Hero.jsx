import React from 'react';

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center">
            <br />
            <br />

            <h1 className="text-5xl font-bold">Hello, I'm [Your Name]</h1>
            <p className="mt-4 text-2xl">A [Your Profession]</p>
            <a href="#about" className="mt-8 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full">
                Learn More
            </a>
        </section>
    );
}
