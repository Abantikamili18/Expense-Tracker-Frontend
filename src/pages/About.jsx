import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-100 to-white">
        <Header />
        <main className="flex-grow flex items-center justify-center">
            <section className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-4">
                <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">About React Weather</h2>
                <p className="text-gray-700 text-lg mb-2 text-center">
                    React Weather is a modern web application designed to provide accurate and up-to-date weather information for any location worldwide.
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                    <li>Search for current weather by city or location.</li>
                    <li>View temperature, humidity, wind speed, and more.</li>
                    <li>Responsive design for seamless experience on any device.</li>
                    <li>Powered by reliable weather APIs.</li>
                </ul>
                <p className="text-gray-500 text-sm mt-6 text-center">
                    Built with <span className="font-semibold text-blue-600">React</span> & <span className="font-semibold text-blue-600">Tailwind CSS</span>.
                </p>
            </section>
        </main>
        <Footer />
    </div>
);

export default About;