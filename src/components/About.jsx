import React from 'react';

export default function About() {
    return (
        <section id="about" className="h-screen">
            <h2 className="text-4xl font-bold text-center">About Me</h2>
            <section className="p-10 bg-gray-950 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Career Advancement</h3>
                        <p className="text-gray-300">My primary professional goal is to continue advancing in my career by taking on roles that offer more responsibility and leadership opportunities within my field. To achieve this, I plan to join bootcamps and attend seminars to enhance my skills and expertise. By doing so, I aim to position myself for higher-level positions and contribute meaningfully to the success of my organization.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Financial Stability</h3>
                        <p className="text-gray-300">I am determined to attain financial stability by managing my salary through budgeting, saving for the future, and investing in the stock market. This entails prioritizing the payment of my current debts and loans, planning to negotiate my salary upon graduation and regularization in the company, and starting my own business. My primary goal is to establish a solid financial foundation that provides both short-term comfort and long-term financial independence.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Health and Wellness</h3>
                        <p className="text-gray-300">In order to maintain optimal health and wellness, I am committed to eating regularly, exercising, and getting sufficient sleep. By incorporating mindfulness practices into my routine, such as practicing self-affirmation and sending positive vibes to my body every morning, I believe that I can contribute to my overall well-being. I strongly believe that a healthy lifestyle is fundamental to achieving sustained professional success.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Added Skills</h3>
                        <p className="text-gray-300">I intend to improve my skills in software development, database management, and data mining to expand my abilities. This will not only benefit my professional growth but also increase my flexibility in an ever-changing work environment. My plan is to enroll in a comprehensive course package and attend boot camps and seminars to gain expertise in this field.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                        <p className="text-gray-300">As part of my commitment to community engagement, I aspire to volunteer for community activities, participate in community projects, and mentor young children. Contributing to my community is not only a personal value but also aligns with my belief that a successful career should positively impact the broader community.</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Personal Satisfaction</h3>
                        <p className="text-gray-300">My ultimate objective is to attain personal satisfaction and fulfillment in my professional journey. This involves maintaining a healthy work-life balance and fostering a positive work environment. By prioritizing personal satisfaction, I aspire to build a career that is meaningful and purpose-driven.</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
