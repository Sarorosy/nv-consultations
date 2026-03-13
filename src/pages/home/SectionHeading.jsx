import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, subtitle, dark = false }) => (
    <div className="text-center mb-16">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-primary-dark'}`}
        >
            {children}
        </motion.h2>
        {subtitle && (
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`max-w-2xl mx-auto text-lg ${dark ? 'text-blue-100' : 'text-secondary'}`}
            >
                {subtitle}
            </motion.p>
        )}
        <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`h-1 w-20 mx-auto mt-6 rounded-full ${dark ? 'bg-white' : 'bg-primary'}`}
        />
    </div>
);

export default SectionHeading;
