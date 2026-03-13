import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send, User, Mail, MessageSquare, ChevronDown, Calendar } from 'lucide-react';
import { toast } from 'react-hot-toast';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const services = [
        "Diabetes Management",
        "Hypertension Care",
        "Thyroid Disorders",
        "Preventive Check-up",
        "Diabetic Foot Care",
        "Diet & Lifestyle Counselling",
        "General Consultation"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        toast.success(`Thank you, ${formData.name}! Your inquiry for ${formData.service} has been received.`);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        e.target.reset();
    };

    return (
        <section className="py-20 bg-white dark:bg-grayscale-black transition-colors duration-300" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-pill">Contact Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-dark dark:text-white mt-4 leading-tight">
                            Let's Talk About <span className="text-gradient">Your Health</span>
                        </h2>
                        <p className="text-secondary dark:text-secondary-muted mt-4 max-w-2xl mx-auto italic text-base leading-relaxed">
                            Expert diabetes care and personalized preventive healthcare in Kolathur, Chennai.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Contact Info */}
                    <div className="lg:col-span-4 space-y-4">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >

                            <a
                                href="https://maps.app.goo.gl/9ZpYx8s9G5z7P2y8A"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="stats-card group flex items-start gap-5 p-6 border border-primary-light/30 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 block"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary-dark dark:text-white group-hover:text-primary transition-colors">Our Location</h4>
                                    <p className="text-secondary dark:text-secondary-muted text-sm leading-relaxed">
                                        NV Consultations – Dr. Navin’s Diabetes Care, Kolathur, Chennai
                                    </p>
                                </div>
                            </a>

                            <a
                                href="tel:+918124498803"
                                className="stats-card group flex items-start gap-5 p-6 border border-primary-light/30 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 block"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary-dark dark:text-white group-hover:text-primary transition-colors">Phone / WhatsApp</h4>
                                    <p className="text-secondary dark:text-secondary-muted text-base">+91 81244 98803</p>
                                </div>
                            </a>

                            <div className="stats-card flex items-start gap-5 p-6 border border-primary-light/30 dark:border-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary-dark dark:text-white group-hover:text-primary transition-colors">Clinic Hours</h4>
                                    <p className="text-secondary dark:text-secondary-muted text-base">Mon - Sat: 9:00 AM - 9:00 PM</p>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-[2rem] overflow-hidden border-4 border-bg-soft dark:border-white/5 shadow-2xl h-72 mt-6 group relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15541.972379521344!2d80.2037785!3d13.125191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52646d6a5d7d3d%3A0xe7a505b22b10a22!2sKolathur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    title="Google Maps Location"
                                    className=" transition-all duration-500"
                                ></iframe>
                            </div>

                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-8">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden border border-primary-light/30 dark:border-white/10"
                        >

                            <form onSubmit={handleSubmit} className="relative z-10 space-y-4">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div>
                                        <label className="text-sm font-bold text-primary-dark dark:text-white mb-2 block">Full Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors w-5 h-5" />
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Enter your name"
                                                className="w-full pl-12 pr-4 py-4 bg-bg-soft dark:bg-white/10 dark:text-white rounded-2xl outline-none focus:ring-2 ring-primary/20 transition-all border border-transparent focus:border-primary/30"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-bold text-primary-dark dark:text-white mb-2 block">Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors w-5 h-5" />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="example@mail.com"
                                                className="w-full pl-12 pr-4 py-4 bg-bg-soft dark:bg-white/10 dark:text-white rounded-2xl outline-none focus:ring-2 ring-primary/20 transition-all border border-transparent focus:border-primary/30"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    <div>
                                        <label className="text-sm font-bold text-primary-dark dark:text-white mb-2 block">Phone</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors w-5 h-5" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="+91 00000 00000"
                                                className="w-full pl-12 pr-4 py-4 bg-bg-soft dark:bg-white/10 dark:text-white rounded-2xl outline-none focus:ring-2 ring-primary/20 transition-all border border-transparent focus:border-primary/30"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm font-bold text-primary-dark dark:text-white mb-2 block">Service</label>
                                        <div className="relative group">
                                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary group-focus-within:text-primary transition-colors w-5 h-5" />
                                            <select
                                                name="service"
                                                required
                                                defaultValue=""
                                                onChange={handleChange}
                                                className="w-full pl-12 pr-10 py-4 bg-bg-soft dark:bg-white/10 dark:text-white rounded-2xl outline-none focus:ring-2 ring-primary/20 transition-all border border-transparent focus:border-primary/30 appearance-none"
                                            >
                                                <option value="" disabled className="dark:bg-[#1A5FFF]">Choose service</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service} className="dark:bg-[#1A5FFF]">{service}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary w-5 h-5 pointer-events-none" />
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <label className="text-sm font-bold text-primary-dark dark:text-white mb-2 block">Message</label>
                                    <div className="relative group">
                                        <MessageSquare className="absolute left-4 top-5 text-secondary group-focus-within:text-primary transition-colors w-5 h-5" />
                                        <textarea
                                            name="message"
                                            required
                                            rows="4"
                                            placeholder="Write your message..."
                                            className="w-full pl-12 pr-4 py-4 bg-bg-soft dark:bg-white/10 dark:text-white rounded-2xl outline-none focus:ring-2 ring-primary/20 transition-all border border-transparent focus:border-primary/30 resize-none"
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
                                    <p className="text-sm text-secondary dark:text-secondary-muted italic max-w-xs text-center md:text-left leading-relaxed">
                                        We values your privacy and will respond within 24 hours.
                                    </p>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="primary-gradient-btn py-4 px-10 flex items-center justify-center gap-3 text-lg font-bold shadow-xl shadow-primary/20"
                                    >
                                        Send Message
                                        <Send className="w-5 h-5" />
                                    </motion.button>
                                </div>

                            </form>

                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;