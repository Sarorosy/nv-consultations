import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    "Dropbox", "Creative Market", "Deliveroo", "Asana", "Amazon", "Spotify"
];

const TrustSection = () => {
    return (
        <section className="py-12 bg-white border-y border-primary-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, idx) => (
                        <span key={idx} className="text-xl font-bold text-primary-dark tracking-tighter">
                            {logo}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
