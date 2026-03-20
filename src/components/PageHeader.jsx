import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, breadcrumb }) => {
    return (
        <section className="relative pt-10 pb-10 bg-[#f8faff] dark:bg-[#0B1120] overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 dark:bg-primary/10 skew-x-12 transform origin-top-right -mr-20"></div>
            <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left"
                >
                    <nav className="flex justify-center lg:justify-start mb-4 text-sm font-medium text-primary tracking-wide uppercase">
                        <span>Home</span>
                        <span className="mx-2 text-gray-400">/</span>
                        <span className="text-secondary-light">{breadcrumb || title}</span>
                    </nav>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] dark:text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-secondary dark:text-gray-400 max-w-2xl leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
