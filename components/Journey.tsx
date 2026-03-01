'use client'

const journeyEntries = [
  {
    year: '2023',
    title: 'Master in Information technology',
    description:
      "Completed my Master's degree from University of Sialkot Pakistan, building a strong foundation in Artificial Intelligence, Data Structures, Algorithms, and Web Technologies.",
    side: 'left',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    year: '2024',
    title: 'Joined PIAIC – Certified Cloud Applied Generative AI Engineer',
    description:
      'In 2024, I joined PIAIC to enhance my skills in Next.js, TypeScript, Tailwind CSS, Python, and FastAPI — diving deep into Web Development and Generative AI.',
    side: 'right',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    year: '2026',
    title: 'Exploring the Future of AI & Web',
    description:
      'Currently focusing on building intelligent, responsive, and AI-integrated web applications that connect creativity with innovation and real-world impact.',
    side: 'left',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-purple-500">MY </span>
          <span className="text-purple-500">JOURNEY</span>
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gray-500/50" />

          <div className="space-y-0">
            {journeyEntries.map((entry, index) => (
              <div
                key={index}
                className="relative flex items-center py-8 min-h-[180px]"
              >
                <div className={`flex-1 flex ${entry.side === 'left' ? 'justify-end pr-4 md:pr-12' : ''}`}>
                  {entry.side === 'left' && (
                    <div className="w-full max-w-md rounded-xl border border-purple-500/30 bg-slate-900/80 backdrop-blur p-6 text-left shadow-xl">
                      <span className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-4">
                        {entry.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">{entry.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {entry.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex shrink-0 items-center justify-center w-14 h-14 rounded-full border border-purple-500/30 bg-slate-900/80 backdrop-blur text-white shadow-xl z-10">
                  {entry.icon}
                </div>

                <div className={`flex-1 flex ${entry.side === 'right' ? 'justify-start pl-4 md:pl-12' : ''}`}>
                  {entry.side === 'right' && (
                    <div className="w-full max-w-md rounded-xl border border-purple-500/30 bg-slate-900/80 backdrop-blur p-6 text-left shadow-xl">
                      <span className="inline-block px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-4">
                        {entry.year}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-3">{entry.title}</h3>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {entry.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
