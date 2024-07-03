"use client"
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectCardProps {
    logo: string;
    preview: string;
    title: string;
    description: string;
    repoLink: string;
    liveLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ logo, preview, title, description, repoLink, liveLink }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center p-4 border  isolate aspect-video w-96 rounded-xl bg-white/5 shadow-lg ring-1 ring-black/5"
        >
            <Image src={logo} alt={`${title} logo`} width={64} height={64} className=" mb-4" />
            <Image src={preview} alt={`${title} preview`} width={300} height={200} className=" object-cover mb-4 rounded-md" />
            <h3 className="text-2xl font-bold text-Alabaster mb-2">{title}</h3>
            <p className="text-lg text-Lgray mb-4">{description}</p>
            <div className="flex gap-4">
                <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-2xl text-Saffron">
                    <FaGithub />
                </a>
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-2xl text-Saffron">
                    <FaExternalLinkAlt />
                </a>
            </div>
        </motion.div>
    );
};

export default ProjectCard;