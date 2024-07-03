"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const AboutImage: React.FC = () => {


    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: -215 }}
            className="absolute -z-10"
        >
            <Image src="/profilePhoto.png" alt="Parallax Image" width={300} height={350} style={{ filter: 'grayscale(100%)' }} />
        </motion.div>
    );
};

export default AboutImage;