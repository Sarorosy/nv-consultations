import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll position
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 50 }}
                    whileHover={{
                        scale: 1.15,
                        boxShadow: "0 20px 25px -5px rgba(42, 167, 255, 0.4), 0 10px 10px -5px rgba(42, 167, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[9999] w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white cursor-pointer shadow-xl border border-white/20 group overflow-hidden"
                    aria-label="Scroll to top"
                >
                    {/* Glass effect layer */}
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10 flex items-center justify-center">
                        <ChevronUp className="w-7 h-7 group-hover:-translate-y-1.5 transition-transform duration-300 ease-out" />
                    </div>

                    {/* Ripple/Pulse effect */}
                    <span className="absolute inset-0 rounded-2xl bg-primary/40 animate-ping -z-10 group-hover:bg-primary/60 scale-75" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
