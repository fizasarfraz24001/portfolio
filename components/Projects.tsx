'use client'

export default function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description:
                'A modern e-commerce website with shopping cart, user authentication, and payment integration.',
            tech: ['React', 'Next.js', 'Tailwind CSS', 'Stripe'],
            link: '#',
            github: '#',
        },
        {
            title: 'Task Management App',
            description:
                'A collaborative task management application with real-time updates and drag-and-drop functionality.',
            tech: ['React', 'TypeScript', 'Firebase', 'Material UI'],
            link: '#',
            github: '#',
        },
        {
            title: 'Weather Dashboard',
            description:
                'A beautiful weather dashboard with location-based forecasts and interactive charts.',
            tech: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
            link: '#',
            github: '#',
        },
        {
            title: 'Portfolio Website',
            description:
                'A responsive portfolio website showcasing projects and skills with smooth animations.',
            tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
            link: '#',
            github: '#',
        },
    ]

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="text-gradient">Featured Projects</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 group"
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-cyan-400 group-hover:text-purple-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm text-gray-300 border border-cyan-500/30"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 glass-effect rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

