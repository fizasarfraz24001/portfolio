'use client'

export default function Projects() {
    const projects = [
        {
            title: 'Sportiva Soluions',
            description:
                'A modern leather products website showcasing quality craftsmanship and elegant designs.',
            tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
            link: '#',
            github: 'https://github.com/fizasarfraz24001/leather_proj',
        },
        {
            title: 'LMS',
            description:' A responsive Learning Management System (LMS) with a dedicated parent view, allowing parents to monitor student progress, attendance, and performance in real time.',
            tech: ['React', 'Html', 'CSS', 'bootstrap','my sql'],
            link: 'https://lms-eight-self.vercel.app/',
            github: 'https://github.com/fizasarfraz24001/LMS',
        },
        {
            title: 'Netflix Clone',
            description:
                'Frontend Netflix clone showcasing responsive design, interactive layouts, and modern UI styling that replicates the experience of Netflix.',
            tech: ['React', 'JavaScript', 'Html', 'CSS'],
            link: 'https://netflix-clone-seven-eight.vercel.app/',
            github: 'https://github.com/fizasarfraz24001/NETFLIX-CLONE',
        },
        {
            title: 'Blog with fakeAPI',
            description:
                'A frontend blog application powered by a fake REST API via JSONPlaceholder. Created to showcase API integration and dynamic content rendering in a development environment.',
            tech: [ 'Next.js', 'Fake API', 'Tailwind CSS'],
            link: 'https://blog-with-fakeapi.vercel.app/',
            github: 'https://github.com/fizasarfraz24001/blog_with_fakeAPI',
        },
    ]

    return (
        <section
            id="projects"
            className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black"
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
                            <h3 className="text-2xl font-semibold mb-4 text-purple-500 group-hover:text-purple-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-200 mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full text-sm text-gray-200 border border-purple-500/30"
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
                                    className="px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
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

