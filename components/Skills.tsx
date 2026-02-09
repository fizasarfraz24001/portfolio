'use client'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Frontend Frameworks',
            skills: ['React', 'Next.js', 'Vue.js', 'Angular'],
            color: 'from-cyan-500 to-blue-500',
        },
        {
            title: 'Styling & Design',
            skills: ['Tailwind CSS', 'CSS3', 'SASS', 'Styled Components'],
            color: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Languages',
            skills: ['JavaScript', 'TypeScript', 'HTML5', 'Python'],
            color: 'from-pink-500 to-red-500',
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'Webpack', 'Vite', 'Figma'],
            color: 'from-yellow-500 to-orange-500',
        },
    ]

    return (
        <section
            id="skills"
            className="py-20 px-4 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="text-gradient">Skills & Technologies</span>
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-center">
                                {category.title}
                            </h3>
                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className={`bg-gradient-to-r ${category.color} rounded-lg px-4 py-2 text-center text-white font-medium shadow-lg`}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

