import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { testimonials, GOOGLE_REVIEWS_LINK } from '../../data/testimonials';

const TestimonialCard = ({ testimonial }) => (
    <div className="px-4 py-4 h-full">
        <div className="bg-white dark:bg-white/5 p-8 rounded-3xl shadow-xl shadow-primary/5 border border-primary/10 flex flex-col h-full group transition-all duration-300 hover:y-[-10px]">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl uppercase shrink-0">
                    {testimonial.avatar}
                </div>
                <div className="overflow-hidden">
                    <h4 className="font-bold text-primary-dark dark:text-white group-hover:text-primary transition-colors truncate">
                        {testimonial.name}
                    </h4>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-secondary dark:text-blue-200/60 font-medium whitespace-nowrap">{testimonial.role}</span>
                        <span className="w-1 h-1 rounded-full bg-secondary/30"></span>
                        <span className="text-xs text-secondary/70 dark:text-blue-200/40 whitespace-nowrap">{testimonial.date}</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            <div className="relative flex-grow">
                <Quote className="absolute -top-2 -left-2 text-primary/5 w-10 h-10 -z-0" />
                <p className="text-secondary dark:text-blue-100 relative z-10 leading-relaxed italic line-clamp-4">
                    "{testimonial.content}"
                </p>
            </div>

            <div className="mt-6 pt-6 border-t border-primary/5 flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" className="h-4 brightness-95 contrast-125 dark:brightness-110" />
                Verified Review
            </div>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const containerRef = useRef(null);

    // Update visible count based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleCount + 1));
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + (testimonials.length - visibleCount + 1)) % (testimonials.length - visibleCount + 1));
    };

    // Auto play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => {
                const nextIndex = prev + 1;
                if (nextIndex > testimonials.length - visibleCount) {
                    return 0;
                }
                return nextIndex;
            });
        }, 5000);
        return () => clearInterval(timer);
    }, [visibleCount]);

    return (
        <section className="py-24 bg-bg-soft dark:bg-[#0B1120] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-dark/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <SectionHeading
                    subtitle="Hear from our patients who have experienced exceptional care and life-changing results under the guidance of Dr. Navin."
                >
                    Patient Success Stories
                </SectionHeading>

                <div className="relative group max-w-6xl mx-auto">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={containerRef}>
                        <motion.div
                            className="flex"
                            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    style={{ width: `${100 / visibleCount}%` }}
                                    className="shrink-0"
                                >
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white dark:bg-white/10 shadow-lg border border-primary/10 flex items-center justify-center text-primary-dark dark:text-white hover:bg-primary hover:text-white transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 hidden md:flex"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white dark:bg-white/10 shadow-lg border border-primary/10 flex items-center justify-center text-primary-dark dark:text-white hover:bg-primary hover:text-white transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 hidden md:flex"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {[...Array(testimonials.length - visibleCount + 1)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-8 bg-primary' : 'w-2 bg-primary/20 hover:bg-primary/40'
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href={GOOGLE_REVIEWS_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white dark:bg-white/10 hover:bg-primary hover:text-white dark:hover:bg-primary px-8 py-4 rounded-full text-primary-dark dark:text-white font-bold shadow-lg transition-all duration-300 group ring-1 ring-primary/20 hover:ring-primary"
                    >
                        <span>Read More Reviews on Google</span>
                        <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>

                    <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-primary-dark dark:text-white">4.9/5</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block h-4 w-px bg-secondary/20"></div>
                        <span className="text-secondary dark:text-blue-100/60 font-medium whitespace-nowrap">Based on 100+ Google Reviews</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
