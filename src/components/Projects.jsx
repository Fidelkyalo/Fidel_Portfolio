import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Layout, Database } from 'lucide-react';

const projects = [
    {
        title: "Water For Children Africa",
        description: "A website for Water For Children Africa focusing on clean water initiatives. Features a modern layout and impactful storytelling.",
        tags: ["HTML", "CSS", "Tailwind"],
        links: { github: "#", live: "https://waterforchildrenafrica.pizzatechnologies.co.ke/" },
        icon: <Layout className="w-8 h-8 text-gold" />
    },
    {
        title: "Keith Baraka Portfolio",
        description: "A personalized developer portfolio for Keith Baraka showcasing their skills and projects.",
        tags: ["HTML", "CSS", "Tailwind"],
        links: { github: "#", live: "https://www.keith.pizzatechnologies.co.ke/" },
        icon: <Database className="w-8 h-8 text-gold" />
    },
    {
        title: "Reux Productions Website",
        description: "Photography and videography company website. High-quality visual showcase and professional service presentation.",
        tags: ["React", "Framer Motion", "Tailwind"],
        links: { github: "#", live: "https://reux-production.vercel.app/" },
        icon: <Code2 className="w-8 h-8 text-gold" />
    }
];

const ProjectCard = ({ project, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="glass-card p-6 rounded-xl relative group overflow-hidden"
    >
        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
            {project.icon}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gold transition-colors">
            {project.title}
        </h3>

        <p className="text-gray-400 mb-6 line-clamp-3">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/5 text-gold-light rounded-full border border-gold/10">
                    {tag}
                </span>
            ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
            <a href={project.links.github} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                <Github size={18} />
                <span>Source</span>
            </a>
            <a href={project.links.live} className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors">
                <ExternalLink size={18} />
                <span>Live Demo</span>
            </a>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 md:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my recent work building scalable web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
