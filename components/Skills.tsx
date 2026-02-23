'use client'

export default function Skills() {
    const skills = [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'Git', level: 80 },
        { name: 'Vue.js', level: 70 },
        { name: 'Python', level: 75 },
    ]

    return (
        <section
            id="skills"
            className="py-20 px-4 sm:px-6 lg:px-8 relative bg-black"
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                    <span className="text-gradient">Skills & Technologies</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {skills.map((skill, index) => (
                        <div key={index} className="glass-effect rounded-lg p-3">
                            <div className="flex justify-between items-center mb-1.5">
                                <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                                <span className="text-purple-500 font-semibold text-sm">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-purple-500 to-purple-600 h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
