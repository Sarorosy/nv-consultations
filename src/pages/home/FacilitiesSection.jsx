import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { blogs } from '../../data/blogs';

const FacilitiesSection = () => {
    return (
        <section className="py-20 bg-[#f8faff] dark:bg-[#0B1120] transition-colors duration-300" id="facilities">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-6xl font-semibold text-slate-900 dark:text-white leading-[1.1] tracking-tight transition-colors">
                            Feel free to explore our <br />
                            content & join with us
                        </h2>
                    </div>
                    <div className="max-w-xs md:mt-4">
                        <p className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed transition-colors">
                            Feel to explore our content and join with our community and enjoy your life better experience.
                        </p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col lg:flex-row gap-8 items-end">
                    {blogs.map((blog, idx) => (
                        <div key={blog.id} className="flex flex-1 gap-6 items-end">
                            {/* Vertical Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="relative flex-[1.4] aspect-[3/4] rounded-[2.5rem] overflow-hidden group"
                            >
                                <img
                                    src={blog.mainImage}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Bottom Buttons */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
                                    <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                                        Learn More
                                    </button>
                                    <button className="w-11 h-11 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-900 dark:text-white shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Sub Card Container */}
                            <div className="flex-1 flex flex-col gap-4">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 dark:text-slate-500 uppercase transition-colors">
                                    {blog.tag}
                                </span>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 + 0.2 }}
                                    className="relative aspect-square rounded-[2.5rem] bg-[#eef5ff] dark:bg-[#1E293B] p-6 flex items-center justify-center group transition-colors"
                                >
                                    {/* Small Circular Arrow at Top Right */}
                                    <button className="absolute top-6 right-6 w-10 h-10 rounded-full border border-blue-200 dark:border-slate-700 flex items-center justify-center text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800 shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 z-10">
                                        <ArrowUpRight size={18} />
                                    </button>

                                    {/* Inner Image */}
                                    <div className="w-full h-full rounded-[2rem] overflow-hidden">
                                        <img
                                            src={blog.subImage}
                                            alt="Sub content"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Divider/Progress */}
                <div className="mt-20 w-full h-[1px] bg-slate-100 dark:bg-slate-800 relative transition-colors">
                    <div className="absolute top-0 left-0 w-1/2 h-[2px] bg-blue-600" />
                </div>
            </div>
        </section>
    );
};

export default FacilitiesSection;


