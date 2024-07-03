"use client";
import { motion } from "framer-motion";
interface SectionHeaderProps {
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-center  bg-transparent z-20 my-20  " // Ajustes para hacer sticky
        >
            <h2 className="font-jost text-6xl font-bold text-Alabaster">{title}</h2>
        </motion.div>
    );
};

export default SectionHeader;