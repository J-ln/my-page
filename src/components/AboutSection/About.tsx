import SectionHeader from "@/components/SectionHeader";
import EducationItem from '@/components/AboutSection/EducationalItem';
import Bio from '@/components/AboutSection/Bio';
import AboutImage from "./AboutImage";
import SkillsSection from "./SkillsSection";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaFigma, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiSass, SiBootstrap, SiMongodb, SiPostgresql, SiAdobephotoshop, SiAdobexd } from 'react-icons/si';
import SkillSection from "./SkillsSection";


const About = () => {
    // Datos de la educación
    const educationDetails = [
        {
            degree: "Bachelor's Degree in Systems Engineering",
            institution: 'UTN FRCU',
            duration: '2016 - Present',
            details: [
                'In-depth coursework in Software Development, Data Structures, and Algorithms.',
                'Focus on problem-solving and system analysis.',
            ],
        },
        {
            degree: 'Front-End Development Course',
            institution: 'CoderHouse',
            duration: '2022',
            details: [
                'Comprehensive training in HTML, CSS, JavaScript, and modern front-end frameworks.',
                'Practical projects focused on responsive and interactive web design.',
            ],
        },
    ];

    // Datos de la biografía
    const bioParagraphs = [
        "Hi, I’m Julián, a passionate and creative designer and developer. I been studying Systems Engineering since a couple years, and I have been constantly updating my skills and knowledge with various courses and online resources. I have experience in developing and designing web and mobile applications using the latest technologies and trends.",
        "I love learning new things and challenging myself with different projects. I am always looking for opportunities to grow my career and collaborate with other professionals. I believe that technology can make a positive impact on the world, and I want to be part of that. If you are interested in working with me or knowing more about me, please feel free to contact me. I would love to hear from you.",
    ];

    const skills = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "React", icon: <FaReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
            ],
        },
        {
            title: "Styling",
            skills: [
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "Sass", icon: <SiSass /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Python", icon: <FaPython /> },
            ],
        },
        {
            title: "Databases",
            skills: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "SQL", icon: <FaDatabase /> },
            ],
        },
        {
            title: "Design",
            skills: [
                { name: "Figma", icon: <FaFigma /> },
                { name: "Adobe XD", icon: <SiAdobexd /> },
                { name: "Photoshop", icon: <SiAdobephotoshop /> },
            ],
        },
    ];

    return (
        <section className="flex min-h-screen w-screen flex-col md:flex-row justify-between my-20">
            <div className="relative w-full h-fit flex flex-col justify-center items-center">
                <SectionHeader title="About me" />
                <AboutImage />
                <div className='flex flex-col  md:flex-row h-full w-full px-5  pl-5 md:pl-24'>

                    <div className='w-full md:w-1/2 h-fit flex flex-col justify-center'>
                        <h5 className="font-jost font-bold text-3xl text-Saffron">Education</h5>
                        {educationDetails.map((item, index) => (
                            <EducationItem
                                key={index}
                                degree={item.degree}
                                institution={item.institution}
                                duration={item.duration}
                                details={item.details}
                            />
                        ))}
                    </div>

                    <div className='w-full md:w-1/2 h-fit flex flex-col items-center justify-center'>
                        <Bio paragraphs={bioParagraphs} />
                    </div>
                </div>
                <div className="w-full h-fit flex flex-col items-center py-20 ">


                </div>
                <h5 className="font-jost font-bold text-3xl text-Saffron">My Skills</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 w-full h-fit py-10 px-20">
                    {skills.map((category, index) => (
                        <SkillSection key={index} title={category.title} skills={category.skills} />
                    ))}
                </div>
            </div>
        </section>
    );
};



export default About