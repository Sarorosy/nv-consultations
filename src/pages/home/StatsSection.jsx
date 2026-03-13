import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "10K+", label: "Happy Patients" },
    { value: "15+", label: "Years Experience" },
    { value: "7+", label: "Medical Services" },
    { value: "100%", label: "Patient Satisfaction" }
];

const StatsSection = () => {
    return (
        <section className="py-8 bg-white dark:bg-[#0B1120] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl font-extrabold text-primary-dark dark:text-white mb-2 tracking-tight">
                                {stat.value}
                            </h3>
                            <p className="text-secondary dark:text-gray-400 font-medium uppercase tracking-wider text-sm">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
