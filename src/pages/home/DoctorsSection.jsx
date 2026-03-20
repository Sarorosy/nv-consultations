import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import drNavinImg from '../../assets/navin.png';
import drVarshaImg from '../../assets/varsha.png';

const DoctorsSection = () => {
    const navigate = useNavigate();
    const doctors = [
        {
            name: "Dr. R. Navin",
            role: "Diabetologist",
            img: drNavinImg,
            rating: 5
        },
        {
            name: "Dr. Varsha E.",
            role: "Physician",
            img: drVarshaImg,
            rating: 5
        }
    ];

    return (
        <section className="py-16 bg-[#E8F1FF]/30 dark:bg-[#0B1120] transition-colors duration-300" id="doctors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3"
                    >
                        <div className="section-pill dark:bg-[#2AA7FF]/20 dark:text-[#2AA7FF]">Our Team</div>
                        <h2 className="text-4xl font-bold text-primary-dark dark:text-white mb-4 leading-tight">
                            Connect with our expert consultants
                        </h2>
                        <div className="flex -space-x-4 mb-4">
                            {doctors.map((doc, idx) => (
                                <div key={idx} className="w-16 h-16 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-lg">
                                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-secondary dark:text-gray-400 mb-4">
                            Our team of highly qualified doctors is dedicated to providing personalized care for all your health needs.
                        </p>
                        <div className="h-px w-full bg-primary/10 dark:bg-gray-800 mb-4" />
                        <button onClick={() => navigate('/about#team')} className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                            View All Doctors <ArrowRight size={20} />
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {doctors.map((doc, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white dark:bg-[#1E293B] p-8 rounded-[3rem] shadow-xl relative overflow-hidden group border border-transparent dark:border-gray-700/50"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full transition-all group-hover:scale-110" />

                                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-primary-light dark:border-gray-800 relative z-10 shadow-md">
                                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                                </div>

                                <div className="flex gap-1 mb-2">
                                    {[...Array(doc.rating)].map((_, i) => (
                                        <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-primary-dark dark:text-white mb-1">{doc.name}</h3>
                                <p className="text-primary font-medium mb-6 uppercase text-xs tracking-widest">{doc.role}</p>

                                <button onClick={() => navigate('/appointment', { state: { doctor: doc.name } })} className="w-full py-4 rounded-2xl bg-bg-soft dark:bg-gray-800 text-primary-dark dark:text-white font-bold hover:bg-primary hover:text-white transition-all">
                                    Book Appointment
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;

