"use client";
import { motion } from "framer-motion";
interface BioProps {
    paragraphs: string[];
}

const Bio: React.FC<BioProps> = ({ paragraphs }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center justify-center"
        >
            <h5 className="font-jost font-bold text-3xl text-Saffron">Who am I?</h5>
            <div className="my-10 w-3/5 flex flex-col gap-8 items-center justify-center font-regular text-md  text-Alabaster">
                {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </motion.div>
    );
};

export default Bio;