import { portfolio } from './portfolioKnowledge'

function getSkillsText(): string {
  return portfolio.skills.map((s) => `${s.name} (${s.level}%)`).join(', ')
}

function getProjectsText(): string {
  return portfolio.projects.map((p) => `• ${p.title}: ${p.description} Technologies: ${p.tech.join(', ')}`).join('\n')
}

function getJourneyText(): string {
  return portfolio.journey.map((j) => `• ${j.year} — ${j.title}: ${j.description}`).join('\n')
}

/**
 * Returns a response based on portfolio content only.
 * Uses keyword matching; if nothing matches, suggests contacting directly.
 */
export function getChatbotResponse(userMessage: string): string {
  const q = userMessage.toLowerCase().trim()
  const notAvailable =
    "That isn't mentioned on my portfolio. Please feel free to reach out directly at fizasarfraz24@gmail.com or use the Contact section — I'd be glad to help!"

  // Greetings
  if (/^(hi|hello|hey|hiya|howdy)\b|good (morning|afternoon|evening)/.test(q) || q === 'hey') {
    return `Hello! I'm ${portfolio.name}'s portfolio assistant. I can tell you about her expertise, skills, projects, and experience based on this site. What would you like to know?`
  }

  // Who / name / role
  if (/\b(who are you|who is (fiza|she)|what do you do|your role|your title|expertise)\b/.test(q) || /^(who|what) (is|does) (fiza|she)/.test(q)) {
    return `I'm ${portfolio.name}, a ${portfolio.role}. She’s passionate about creating stunning, functional web experiences and turning complex problems into simple, beautiful designs. Would you like to know about my skills or projects?`
  }

  // Skills / tech / tools
  if (/\b(skills?|technologies?|tech stack|tools?|languages?|what (can you|do you) (use|work with)|expertise in)\b/.test(q)) {
    const skillsList = getSkillsText()
    return `Based on my portfolio, my technical skills include: ${skillsList}. I focus on front-end development with React, Next.js, TypeScript, and Tailwind CSS, and I’m also building experience in AI-integrated web applications. Need more detail on any of these?`
  }

  // Projects
  if (/\b(projects?|portfolio|work|completed|what have you (built|done)|show (me )?projects)\b/.test(q)) {
    const projectsList = getProjectsText()
    return `Here are the featured projects on my portfolio:\n\n${projectsList}\n\nYou can see more on my GitHub: ${portfolio.github}. Feel free to ask about a specific project or reach out for collaboration!`
  }

  // Experience / background / journey
  if (/\b(experience|background|education|journey|career|qualification|degree|study|piaic|university)\b/.test(q)) {
    const journeyList = getJourneyText()
    return `My journey so far:\n\n${journeyList}\n\nI’m currently focused on AI and web. For more, check the Journey section or contact me.`
  }

  // Services
  if (/\b(services?|what do you offer|website (design|development)|(build|create) (website|app)|hire|collaborat)\b/.test(q)) {
    const servicesList = portfolio.services.map((s) => `• ${s}`).join('\n')
    return `Based on my portfolio, I offer:\n\n${servicesList}\n\nI’d love to discuss your project. Use the Contact section or email me at ${portfolio.email}.`
  }

  // Website design services
  if (/\b(website design|web design|ui|ux|design services)\b/.test(q)) {
    return `I offer website design and development with a focus on responsive, modern UI. I work with React, Next.js, TypeScript, and Tailwind CSS to create clean and scalable front-ends. For a custom quote or project discussion, please reach out via the Contact section or at ${portfolio.email}.`
  }

  // Chatbot development (not explicitly on site — use notAvailable or a soft answer)
  if (/\b(chatbot|bot development)\b/.test(q)) {
    return `Chatbot development isn’t listed as a specific service on my portfolio. I’d still be happy to discuss it — please contact me at ${portfolio.email} or through the Contact section.`
  }

  // Contact / email / hire
  if (/\b(contact|email|hire|reach out|get in touch|collaborat|work together)\b/.test(q)) {
    return `You can reach me at ${portfolio.email}, connect on LinkedIn (${portfolio.linkedin}), or use the Contact form on this site. I’m open to collaboration and new projects — feel free to say hello!`
  }

  // GitHub
  if (/\b(github|repositories|repos|code)\b/.test(q)) {
    return `You can see more of my work and code on GitHub: ${portfolio.github}. I’d be happy to discuss any project or collaboration — use the Contact section to get in touch.`
  }

  // Default: not on portfolio
  return notAvailable
}
