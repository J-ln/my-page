import ProjectCard from './ProjectCard';

const projects = [
    {
        logo: '',
        preview: '',
        title: 'Project One',
        description: 'This is a brief description of Project One.',
        repoLink: 'https://github.com/user/project-one',
        liveLink: 'https://project-one.live',
    },
    {
        logo: '',
        preview: '',
        title: 'Project Two',
        description: 'This is a brief description of Project Two.',
        repoLink: 'https://github.com/user/project-two',
        liveLink: 'https://project-two.live',
    },
    {
        logo: '',
        preview: '',
        title: 'Project Three',
        description: 'This is a brief description of Project Three.',
        repoLink: 'https://github.com/user/project-two',
        liveLink: 'https://project-two.live',
    }
    // Añade más proyectos según sea necesario
];

const Projects: React.FC = () => {
    return (
        <section className="py-16 flex flex-col items-center my-20">
            <h2 className="text-4xl font-bold text-center text-Alabaster mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-24">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        logo={project.logo}
                        preview={project.preview}
                        title={project.title}
                        description={project.description}
                        repoLink={project.repoLink}
                        liveLink={project.liveLink}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;