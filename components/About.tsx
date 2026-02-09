'use client'

export default function About() {
    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="text-gradient">About Me</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                            Who I Am
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            I'm Fiza Sarfraz, a passionate front-end developer dedicated to
                            creating stunning and functional web experiences. I love turning
                            complex problems into simple, beautiful, and intuitive designs.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            When I'm not coding, you can find me exploring new technologies,
                            contributing to open-source projects, or sharing my knowledge with
                            the developer community.
                        </p>
                    </div>

                    <div className="glass-effect rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                            What I Do
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">▹</span>
                                <span>Build responsive and mobile-first web applications</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">▹</span>
                                <span>Create interactive user interfaces with modern frameworks</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">▹</span>
                                <span>Optimize performance and ensure cross-browser compatibility</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">▹</span>
                                <span>Write clean, maintainable, and scalable code</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-cyan-400 mr-3">▹</span>
                                <span>Collaborate with designers and backend developers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

