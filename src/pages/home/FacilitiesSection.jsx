import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { blogs } from '../../data/blogs';

const FacilitiesSection = () => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    // Lock body scroll when the bottom bar is open
    useEffect(() => {
        if (selectedBlog) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden'; // Important for mobile devices
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, [selectedBlog]);

    return (
        <>
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
                            <div 
                                key={blog.id} 
                                className="flex flex-1 gap-6 items-end cursor-pointer"
                                onClick={() => setSelectedBlog(blog)}
                            >
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

            {/* Bottom Bar overlay */}
            <AnimatePresence>
                {selectedBlog && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBlog(null)}
                            className="fixed inset-0 bg-slate-900/40 dark:bg-slate-900/60 backdrop-blur-sm z-40"
                        />
                        
                        {/* Bottom Drawer */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed bottom-0 left-0 right-0 h-[90vh] md:h-[85vh] bg-white dark:bg-[#0B1120] rounded-t-[2.5rem] z-50 shadow-2xl border-t border-slate-100 dark:border-slate-800 flex flex-col"
                        >
                            {/* Fixed Header / Action Bar */}
                            <div className="flex justify-end p-4 md:px-8 md:pt-6 bg-white dark:bg-[#0B1120] rounded-t-[2.5rem] shrink-0 z-20 relative">
                                <button
                                    onClick={() => setSelectedBlog(null)}
                                    className="w-10 h-10 md:w-12 md:h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
                                >
                                    <X size={20} className="md:w-6 md:h-6" />
                                </button>
                            </div>

                            {/* Scrollable Content inside the drawer */}
                            <div className="flex-1 overflow-y-auto overscroll-contain pb-12 md:pb-20">
                                <div className="max-w-[1200px] mx-auto px-6 md:px-8">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start mt-2 md:mt-0">
                                    <div className="w-full md:w-[400px] lg:w-[450px] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl shrink-0">
                                        <img 
                                            src={selectedBlog.mainImage} 
                                            alt={selectedBlog.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    
                                    <div className="flex-1 space-y-8 pt-4">
                                        <div className="space-y-4">
                                            <span className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
                                                {selectedBlog.tag}
                                            </span>
                                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                                                {selectedBlog.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700">
                                                    {selectedBlog.author.charAt(0)}
                                                </div>
                                                <span className="text-base text-slate-700 dark:text-slate-300">{selectedBlog.author}</span>
                                            </div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                                            <span className="text-base">{selectedBlog.date}</span>
                                        </div>

                                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 text-lg leading-relaxed pt-6 border-t border-slate-100 dark:border-slate-800">
                                            <p className="font-medium text-xl text-slate-800 dark:text-slate-200">
                                                {selectedBlog.description}
                                            </p>
                                            <p className="mt-6">
                                                The field of healthcare is evolving rapidly, driven by unprecedented technological advancements. As we look towards the future of medicine, innovations like this are reshaping how patient care is delivered, monitored, and enhanced. These cutting-edge techniques offer not just improved diagnostic accuracy but represent a fundamental shift towards more personalized, proactive healthcare strategies.
                                            </p>
                                            <p className="mt-6">
                                                Implementing these modern approaches requires careful consideration of both the technological requirements and the human element. Healthcare professionals must consistently adapt their skill sets to leverage these new tools effectively. The transition focuses heavily on seamlessly integrating these innovations into daily clinical workflows without disrupting established patient-doctor relationships.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default FacilitiesSection;


