"use client"

import { motion } from 'framer-motion';

interface SkillSectionProps {
    title: string;
    skills: { name: string; icon: JSX.Element }[];
}

const SkillSection: React.FC<SkillSectionProps> = ({ title, skills }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center  p-4 border border-gray-700 rounded-lg"
        >
            <h3 className="font-jost text-3xl font-bold text-center text-Alabaster mb-6">{title}</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div className="text-6xl text-Saffron">{skill.icon}</div>
                        <p className="font-roboto text-lg text-Alabaster mt-2">{skill.name}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SkillSection;