/**
 * Portfolio knowledge base — used by the chatbot.
 * Keep in sync with site content (Hero, About, Journey, Skills, Projects, Contact).
 */

export const portfolio = {
  name: 'Fiza Sarfraz',
  role: 'Front-End Developer',
  email: 'fizasarfraz24@gmail.com',
  linkedin: 'https://www.linkedin.com/in/fiza-sarfraz-374195307/',
  github: 'https://github.com/fizasarfraz24001',

  about: {
    who: "I'm Fiza Sarfraz, a passionate front-end developer dedicated to creating stunning and functional web experiences. I love turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.",
    whatIDo: [
      'Build responsive and mobile-first web applications',
      'Create interactive user interfaces with modern frameworks',
      'Optimize performance and ensure cross-browser compatibility',
      'Write clean, maintainable, and scalable code',
      'Collaborate with designers and backend developers',
    ],
  },

  journey: [
    { year: '2023', title: 'Master in Information technology', description: "Completed my Master's degree from University of Sialkot Pakistan, building a strong foundation in Artificial Intelligence, Data Structures, Algorithms, and Web Technologies." },
    { year: '2024', title: 'Joined PIAIC – Certified Cloud Applied Generative AI Engineer', description: 'In 2024, I joined PIAIC to enhance my skills in Next.js, TypeScript, Tailwind CSS, Python, and FastAPI — diving deep into Web Development and Generative AI.' },
    { year: '2026', title: 'Exploring the Future of AI & Web', description: 'Currently focusing on building intelligent, responsive, and AI-integrated web applications that connect creativity with innovation and real-world impact.' },
  ],

  skills: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'JavaScript', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 85 },
    { name: 'Python', level: 75 },
  ],

  projects: [
    { title: 'Sportiva Solutions', description: 'A modern leather products website showcasing quality craftsmanship and elegant designs.', tech: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { title: 'LMS', description: 'A responsive Learning Management System (LMS) with a dedicated parent view, allowing parents to monitor student progress, attendance, and performance in real time.', tech: ['React', 'Html', 'CSS', 'bootstrap', 'my sql'] },
    { title: 'Netflix Clone', description: 'Frontend Netflix clone showcasing responsive design, interactive layouts, and modern UI styling that replicates the experience of Netflix.', tech: ['React', 'JavaScript', 'Html', 'CSS'] },
    { title: 'Blog with fakeAPI', description: 'A frontend blog application powered by a fake REST API via JSONPlaceholder. Created to showcase API integration and dynamic content rendering in a development environment.', tech: ['Next.js', 'Fake API', 'Tailwind CSS'] },
  ],

  services: [
    'Website design and development (responsive, modern UI)',
    'Front-end development with React, Next.js, TypeScript',
    'UI/UX implementation with Tailwind CSS',
    'Web applications with AI integration focus',
  ],
}
