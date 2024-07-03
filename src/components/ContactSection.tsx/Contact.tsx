"use client"
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaGithub, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section className=" w-full h-screen py-16 flex flex-col items-center justify-center my-20">
            <h2 className="text-4xl font-bold text-center text-Alabaster mb-8">Contact Me</h2>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-lg flex flex-col md:flex-row justify-around items-center"
            >
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <FaPhone className="text-4xl text-Saffron mb-2" />
                    <span className="text-lg text-Alabaster">+123 456 7890</span>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <FaEnvelope className="text-4xl text-Saffron mb-2" />
                    <span className="text-lg text-Alabaster">email@example.com</span>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <FaGithub className="text-4xl text-Saffron mb-2" />
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-lg text-Saffron hover:text-Alabaster transition duration-200">
                        github.com/yourusername
                    </a>
                </div>
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <FaMapMarkerAlt className="text-4xl text-Saffron mb-2" />
                    <span className="text-lg text-Alabaster">Your City, Your Country</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaWhatsapp className="text-4xl text-Saffron mb-2" />
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-full p-3 bg-Saffron text-Alabaster font-bold rounded-md hover:bg-Saffron/80 transition duration-200">
                        WhatsApp Me
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;