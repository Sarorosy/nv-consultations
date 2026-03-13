import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        { q: "What is NV Consultations?", a: "NV Consultations is a specialized clinic in Kolathur, Chennai, focusing on expert diabetes management, preventive healthcare, and lifestyle disease treatment led by Dr. R. Navin." },
        { q: "When should someone visit NV Consultations?", a: "You should visit for blood sugar management, hypertension screening, thyroid evaluation, or for regular preventive health check-ups if you have a family history of metabolic diseases." },
        { q: "Does NV Consultations provide preventive health check-ups?", a: "Yes, we offer comprehensive preventive health screening programs designed for early detection of diabetes, metabolic disorders, and other lifestyle conditions." },
        { q: "Can lifestyle changes help manage diabetes?", a: "Absolutely. We emphasize lifestyle modification, diet counseling, and exercise guidance as key pillars in managing chronic diseases effectively alongside medical treatment." }
    ];

    return (
        <section className="py-16 bg-[#E8F1FF]/20 dark:bg-[#0B1120] transition-colors duration-300" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <div className="section-pill dark:bg-[#2AA7FF]/20 dark:text-[#2AA7FF]">FAQ</div>
                    <h2 className="text-4xl font-bold text-primary-dark dark:text-white">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white dark:bg-[#1E293B] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md border border-transparent dark:border-gray-700/50 transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                                className="w-full p-8 flex items-center justify-between text-left transition-all"
                            >
                                <span className="font-bold text-primary-dark dark:text-white text-lg pr-8">{faq.q}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-primary text-white rotate-180' : 'bg-primary-light dark:bg-gray-800 text-primary'}`}>
                                    {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-secondary leading-relaxed border-t border-primary-light/30">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;

