"use client";
import { motion } from "framer-motion";
interface EducationItemProps {
    degree: string;
    institution: string;
    duration: string;
    details: string[];
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, duration, details }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="my-10"
        >
            <h3 className="font-roboto font-bold italic text-2xl text-Alabaster">{degree}</h3>
            <p className="font-semibold italic text-xl text-Lgray">{institution}, {duration}</p>
            <ul className="flex flex-col w-3/4 mt-4 gap-1 font-roboto font-regular text-lg text-Alabaster list-disc list-inside">
                {details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                ))}
            </ul>
        </motion.div>
    );
};

export default EducationItem;