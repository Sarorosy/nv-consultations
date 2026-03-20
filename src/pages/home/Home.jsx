import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import Hero from '../../components/Hero';
import StatsSection from './StatsSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ActivitiesSection from './ActivitiesSection';
import DoctorsSection from './DoctorsSection';
import FacilitiesSection from './FacilitiesSection';
import FAQSection from './FAQSection';
import ContactSection from './ContactSection';
import TestimonialsSection from './TestimonialsSection';
import DynamicTitle from '../../components/DynamicTitle';

/**
 * GSAP Scroll Helper
 * Returns the current scroll position or progress for a given element or window
 */
const getScrollPosition = (target = window) => {
  if (target === window) {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    return {
      y: scrollY,
      max: maxScroll,
      progress: maxScroll > 0 ? scrollY / maxScroll : 0,
      velocity: ScrollTrigger.getVelocity(),
      isScrolling: ScrollTrigger.isScrolling(),
    };
  }

  const st = ScrollTrigger.create({ trigger: target, start: "top top", end: "bottom bottom" });
  const data = {
    progress: st.progress,
    scroll: st.scroll(),
    velocity: st.getVelocity(),
  };
  st.kill();
  return data;
};

function Home() {
  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
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

    // Synchronize Lenis scrolling with GSAP ScrollTrigger
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
    <div className="w-full bg-white dark:bg-[#0B1120] transition-colors duration-300">
      <DynamicTitle
        title="Home"
        description="Welcome to NV Consultations. Dr. Navin & Dr. Varsha are dedicated CONSULTANT PHYSICIANS & DIABETOLOGISTS in Chennai, providing expert care for diabetes, thyroid, and metabolic health management."
      />
      <Hero />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ActivitiesSection />
      {/* <TrustSection /> */}
      <DoctorsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

export default Home;
