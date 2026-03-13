import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import PageHeader from '../../components/PageHeader';
import DynamicTitle from '../../components/DynamicTitle';

const PolicyPage = ({ title, content, description }) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        lenis.on('scroll', ScrollTrigger.update);
        function update(time) {
            lenis.raf(time * 1000);
        }
        gsap.ticker.add(update);
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <div className="w-full bg-white dark:bg-[#0B1120] transition-colors duration-300 min-h-screen">
            <DynamicTitle
                title={title}
                description={description || `${title} for NV Consultations.`}
            />

            <PageHeader
                title={title}
                breadcrumb="Policy"
            />

            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <div className="bg-white dark:bg-[#1E293B] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 text-secondary dark:text-gray-400 leading-relaxed whitespace-pre-line">
                            {content}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PolicyPage;
