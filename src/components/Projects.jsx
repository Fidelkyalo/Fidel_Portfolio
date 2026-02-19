import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Layout, Database } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured shopping platform built with Next.js and Stripe integration. Features secure payments, order tracking, and an admin dashboard.",
        tags: ["Next.js", "Stripe", "Tailwind", "PostgreSQL"],
        links: { github: "#", live: "#" },
        icon: <Layout className="w-8 h-8 text-gold" />
    },
    {
        title: "Task Management App",
        description: "Real-time collaborative task manager using Socket.io and React. Supports team workspaces, file attachments, and live status updates.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        links: { github: "#", live: "#" },
        icon: <Database className="w-8 h-8 text-gold" />
    },
    {
        title: "Crypto Dashboard",
        description: "Live cryptocurrency tracking dashboard with interactive charts. Provides real-time market data, portfolio tracking, and price alerts.",
        tags: ["React", "Chart.js", "CoinGecko API", "Framer Motion"],
        links: { github: "#", live: "#" },
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
