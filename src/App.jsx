import {
  ArrowRight,
  AtSign,
  BadgeCheck,
  BookOpen,
  Boxes,
  Briefcase,
  Cloud,
  Code2,
  Database,
  FolderGit2,
  Layers3,
  Mail,
  MonitorSmartphone,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const stackGroups = [
  {
    title: 'Backend',
    icon: Code2,
    items: ['.NET', 'C#'],
  },
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    items: ['React', 'Angular', 'JavaScript'],
  },
  {
    title: 'Cloud',
    icon: Cloud,
    items: ['AWS', 'Azure'],
  },
  {
    title: 'Database',
    icon: Database,
    items: ['SQL Server', 'MongoDB', 'MySQL'],
  },
  {
    title: 'Tools',
    icon: TerminalSquare,
    items: ['Git', 'Docker'],
  },
]

const projects = [
  {
    title: 'Developer Analytics SaaS',
    description:
      'A full-stack SaaS platform that integrates with GitHub to provide developer productivity insights, commit analytics, and activity tracking.',
    highlights: [
      'GitHub OAuth integration',
      'Real-time analytics dashboard',
      'Weekly productivity insights engine',
    ],
    tech: ['React', '.NET', 'AWS', 'SQL Server'],
    demo: '#',
    github: 'https://github.com/techcrafter-ai/dev-analytics',
  },
  {
    title: 'Microservices E-commerce Platform',
    description:
      'A scalable e-commerce system built using microservices architecture with separate services for product, order, and authentication.',
    highlights: [
      'API Gateway + service isolation',
      'Dockerized services',
      'Cloud-ready architecture',
    ],
    tech: ['.NET', 'Docker', 'AWS', 'React'],
    demo: '#',
    github: 'https://github.com/techcrafter-ai/ecommerce-microservices',
  },
  {
    title: 'Admin Analytics Dashboard',
    description:
      'A modern admin panel with data visualization, reporting tools, and performance tracking for business insights.',
    highlights: [
      'Interactive charts and filters',
      'Optimized data queries',
      'Clean enterprise UI',
    ],
    tech: ['React', 'SQL Server', 'Azure'],
    demo: '#',
    github: 'https://github.com/techcrafter-ai/admin-dashboard',
  },
  {
    title: 'Enterprise API Platform',
    description:
      'A robust backend system designed for high performance and scalability using RESTful APIs and clean architecture principles.',
    highlights: [
      'Clean architecture implementation',
      'JWT authentication & role management',
      'High-performance API design',
    ],
    tech: ['.NET', 'C#', 'SQL Server'],
    demo: '#',
    github: 'https://github.com/techcrafter-ai/api-platform',
  },
]

const expertise = [
  'Technical Lead with 10+ years delivering enterprise products',
  'Built scalable apps across web, APIs, and cloud systems',
  'Strong focus on performance, maintainability, and architecture',
  'Mentoring teams and sharing practical tech knowledge through content',
]

const creatorTopics = ['Web dev tips', 'Project builds', 'Career advice']

const contacts = [
  {
    label: 'Email',
    value: 'hello@techcrafter.ai',
    href: 'mailto:hello@techcrafter.ai',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/techcrafter',
    href: 'www.linkedin.com/in/sanjeev-maurya-7b7a545b',
    icon: Briefcase,
  },
  {
    label: 'Instagram',
    value: '@techcrafter.ai',
    href: 'https://instagram.com/techcrafter.ai',
    icon: AtSign,
  },
  {
    label: 'GitHub',
    value: 'github.com/techcrafter-ai',
    href: 'https://github.com/techcrafter-ai',
    icon: FolderGit2,
  },
]

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div
      className="max-w-3xl space-y-4"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-zinc-400">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="text-base leading-7 text-zinc-400 md:text-lg">{copy}</p>
    </motion.div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(244,114,182,0.12),transparent_24%),linear-gradient(180deg,#050505_0%,#09090b_45%,#0f172a_100%)] text-zinc-100">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-14 pt-6 sm:px-6 lg:px-8">
        <motion.header
          className="sticky top-4 z-40 mx-auto mb-8 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">TechCrafter</p>
              <p className="text-xs text-zinc-400">Full Stack Developer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#stack" className="transition hover:text-white">
              Stack
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </motion.header>

        <main className="space-y-28 md:space-y-36">
          <section id="home" className="grid items-center gap-14 pt-8 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="show"
              variants={fadeUp}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <BadgeCheck className="h-4 w-4" />
                Senior developer portfolio for recruiters, clients, and followers
              </div>

              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.42em] text-zinc-500">
                  Premium portfolio experience
                </p>
                <h1 className="max-w-4xl text-5xl font-semibold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
                  TechCrafter <span className="inline-block">🚀</span>
                </h1>
                <p className="max-w-3xl text-xl text-zinc-300 md:text-2xl">
                  Full Stack Developer | .NET | React | Cloud
                </p>
                <p className="max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
                  Building scalable apps and sharing tech knowledge with a product mindset,
                  architecture depth, and content that helps other developers grow.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-zinc-100"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com/techcrafter.ai"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
                >
                  Follow on Instagram
                  <AtSign className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ['10+', 'Years experience'],
                  ['Tech Lead', 'Enterprise delivery'],
                  ['Cloud-first', 'AWS & Azure systems'],
                ].map(([value, label], index) => (
                  <motion.div
                    key={label}
                    custom={index}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <p className="text-2xl font-semibold text-white">{value}</p>
                    <p className="mt-2 text-sm text-zinc-400">{label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl" />
              <div className="absolute -right-4 bottom-10 h-48 w-48 rounded-full bg-sky-500/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.34em] text-zinc-500">Focus</p>
                    <p className="mt-2 text-xl font-semibold text-white">Senior developer brand</p>
                  </div>
                  <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-300">
                    Available for premium builds
                  </div>
                </div>

                <div className="grid gap-4">
                  {[
                    {
                      icon: Layers3,
                      title: 'Scalable architecture',
                      copy: 'Reliable systems designed for growth, performance, and maintainability.',
                    },
                    {
                      icon: Briefcase,
                      title: 'Leadership mindset',
                      copy: 'Experience guiding delivery, mentoring teams, and shipping production software.',
                    },
                    {
                      icon: BookOpen,
                      title: 'Content creation',
                      copy: 'Sharing practical insights, builds, and developer-focused education on Instagram.',
                    },
                  ].map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.title}
                        custom={index}
                        initial="hidden"
                        animate="show"
                        variants={fadeUp}
                        className="rounded-3xl border border-white/10 bg-black/30 p-5"
                      >
                        <div className="flex items-start gap-4">
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-7 text-zinc-400">{item.copy}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </section>

          <section id="about" className="space-y-10">
            <SectionHeading
              eyebrow="About me"
              title="A technical lead profile with a modern product and platform mindset."
              copy="With over 10 years of experience, I build scalable systems, shape architecture decisions, mentor engineers, and create technical content that makes complex ideas easier to understand."
            />

            <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
              >
                <p className="text-sm uppercase tracking-[0.34em] text-zinc-500">Why teams hire me</p>
                <div className="mt-6 space-y-5 text-zinc-300">
                  <p className="mt-5 text-base leading-8 text-zinc-400">
                    I started my journey as a developer over a decade ago, working on real-world enterprise systems and gradually moving into technical leadership roles.

                    Over the years, I’ve built scalable applications across .NET, cloud platforms, and modern frontend frameworks, focusing not just on writing code but designing systems that last.

                    Today, I combine engineering with content creation through TechCrafter, where I share practical insights, real-world projects, and lessons to help developers grow faster.
                  </p>

                </div>
              </motion.div>

              <div className="grid gap-4 sm:grid-cols-2">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item}
                    custom={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                  >
                    <p className="text-sm leading-7 text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="stack" className="space-y-10">
            <SectionHeading
              eyebrow="Tech stack"
              title="The tools I use to design, ship, and scale modern software."
              copy="A balanced stack across frontend, backend, cloud, and data, chosen to keep delivery fast while maintaining strong engineering standards."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {stackGroups.map((group, index) => {
                const Icon = group.icon

                return (
                  <motion.article
                    key={group.title}
                    custom={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{group.title}</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </section>

          <section id="projects" className="space-y-10">
            <SectionHeading
              eyebrow="Projects"
              title="Portfolio-ready work that shows clean UX, strong engineering, and scalable thinking."
              copy="Each project card is framed like a premium case study preview, with clear outcomes and modern visual treatment."
            />

            {projects.map((project, index) => (
              <div key={index} className="border p-6 rounded-xl">

                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-2">
                  {project.description}
                </p>

                {/* ✅ Highlights */}
                <div className="mt-4 space-y-2">
                  {project.highlights.map((item) => (
                    <p key={item}>✅ {item}</p>
                  ))}
                </div>

                {/* ✅ Tech */}
                <div className="mt-4 flex gap-2 flex-wrap">
                  {project.tech.map((tech) => (
                    <span key={tech} className="border px-2 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ✅ Buttons */}
                <div className="mt-4 flex gap-4">
                  <a href={project.demo}>Live Demo</a>
                  <a href={project.github}>GitHub</a>
                </div>

              </div>
            ))}
          </section>

          <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-zinc-500">
                Content creator
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Sharing practical developer content that grows trust beyond the resume.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
                On Instagram as <span className="font-medium text-zinc-200">@techcrafter.ai</span>, I
                share insights that connect engineering credibility with creator consistency.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {creatorTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-100"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <a
                href="https://instagram.com/techcrafter.ai"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
              >
                Follow me
                <AtSign className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-zinc-500">
                Experience / expertise
              </p>
              <div className="mt-6 space-y-4">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <Boxes className="mt-0.5 h-5 w-5 text-zinc-200" />
                    <p className="text-sm leading-7 text-zinc-300">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

          <section id="contact" className="space-y-10">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build scalable systems, impactful products, or grow your technical team."
              copy="I’m open to senior roles, consulting opportunities, and collaborations where strong engineering and product thinking matter."
            />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="text-2xl font-semibold text-white">
                🚀 Available for senior roles & consulting
              </h3>

              <p className="mt-4 text-zinc-400 max-w-2xl">
                If you're building scalable products, modernizing systems, or need a strong technical lead — let's connect.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="mailto:hello@techcrafter.ai"
                  className="rounded-full bg-white px-6 py-3 text-black font-semibold"
                >
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/sanjeev-maurya-7b7a545b"
                  className="rounded-full border border-white/10 px-6 py-3 text-white"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon

                return (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    custom={index}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeUp}
                    className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="mt-5 text-sm uppercase tracking-[0.28em] text-zinc-500">{contact.label}</p>
                    <p className="mt-3 break-all text-base text-zinc-200">{contact.value}</p>
                  </motion.a>
                )
              })}
            </div>
            <p className="text-center text-sm text-zinc-500 mt-10">
              Trusted by teams building scalable web and cloud applications.
            </p>
          </section>

        </main>

        <footer className="mt-24 border-t border-white/10 py-8">
          <div className="flex flex-col gap-3 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
            <p className="font-medium text-zinc-200">TechCrafter</p>
            <p>Built by TechCrafter</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
