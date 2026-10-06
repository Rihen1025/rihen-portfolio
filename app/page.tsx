"use client";

import { motion } from "framer-motion";

const skills = [
  {
    title: "AI & Prompt Engineering",
    items: [
      "AI Prompt Design",
      "Prompt Optimization",
      "AI-assisted Development",
    ],
  },
  {
    title: "IT Support",
    items: [
      "Troubleshooting",
      "Hardware Diagnostics",
      "Software Installation",
      "System Configuration",
      "Remote Support",
      "Help Desk Support",
    ],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Frontend",
    items: ["React.js"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "PHP", "MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Android Studio",
      "XAMPP",
      "Figma",
      "Postman",
      "Vercel",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Smart Agriculture IoT",
    description:
      "A smart farming system built with Arduino and sensors to monitor soil moisture, temperature, humidity and light conditions.",
    tech: ["Arduino", "C/C++", "DHT11", "Soil Moisture", "LDR"],
  },
  {
    number: "02",
    title: "Online Food Ordering App",
    description:
      "An Android food ordering application with basic user login and order management functionality using Firebase.",
    tech: ["Java", "Android Studio", "Firebase"],
  },
  {
    number: "03",
    title: "Online Food Ordering Website",
    description:
      "A responsive food ordering website with frontend pages and basic backend/database functionality.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
];

const experience = [
  {
    year: "2022",
    company: "InnGenius",
    role: "Summer Internship",
    description:
      "Gained practical experience in HTML, CSS and JavaScript. Learned responsive web design and basic UI/UX principles.",
  },
  {
    year: "2023",
    company: "Izonnet Web Solution PVT. LTD.",
    role: "Winter Internship",
    description:
      "Learned React Native fundamentals including components, props and state. Developed basic cross-platform mobile interfaces with navigation and styling.",
  },
  {
    year: "2024",
    company: "Finishing School Training",
    role: "Professional Skill Development",
    description:
      "Completed 80+ hours of professional and interpersonal skill development covering communication, teamwork, leadership and problem-solving.",
  },
];

const education = [
  {
    year: "2024 — Present",
    title: "Bachelor of Engineering — Information Technology",
    institute: "Laxmi Institute of Technology",
  },
  {
    year: "2021 — 2024",
    title: "Diploma in Computer Engineering",
    institute: "Government Polytechnic, Waghai — GTU",
    result: "CGPA: 7.49 / 10",
  },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#08090b] text-zinc-100 selection:bg-emerald-400 selection:text-black">
      {/* NAVBAR */}
      <header className="fixed top-0 z-50 w-full border-b border-white/[0.06] bg-[#08090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a
            href="#home"
            className="text-sm font-bold tracking-[0.25em] text-white"
          >
            R<span className="text-emerald-400">P</span>
          </a>

          <nav className="hidden items-center gap-7 text-xs uppercase tracking-widest text-zinc-500 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#work" className="transition hover:text-white">
              Work
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="mailto:rihen7636@gmail.com"
            className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-emerald-400/50 hover:text-emerald-400"
          >
            Let&apos;s Talk
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-10"
      >
        <div className="absolute inset-0 -z-10 hero-grid opacity-40" />

        <div className="grid w-full gap-14 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-400">
              <span className="h-px w-10 bg-emerald-400" />
              B.E. Information Technology Student
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Building.
              <br />
              Learning.
              <br />
              <span className="text-emerald-400">Improving.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              I&apos;m Rihen Patel — interested in Prompt Engineering,
              AI-assisted development, web technologies and IT support. I enjoy
              turning ideas into practical solutions while continuously
              improving my technical skills.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
              >
                Explore My Work
              </a>

              <a
                href="https://github.com/Rihen1025"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/50 hover:text-emerald-400"
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>

          {/* TERMINAL CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="terminal-card mx-auto w-full max-w-md"
          >
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              <span className="ml-auto font-mono text-[10px] text-zinc-600">
                rihen.os
              </span>
            </div>

            <div className="space-y-5 p-6 font-mono text-sm">
              <div>
                <p className="text-zinc-500">$ system.status</p>
                <p className="mt-1 text-emerald-400">● SYSTEM ONLINE</p>
              </div>

              <div className="space-y-3 text-zinc-300">
                <p>
                  <span className="text-zinc-600">01</span> AI TOOLS ACTIVE
                </p>
                <p>
                  <span className="text-zinc-600">02</span> WEB READY
                </p>
                <p>
                  <span className="text-zinc-600">03</span> IT SUPPORT READY
                </p>
                <p>
                  <span className="text-zinc-600">04</span> CURRENT MODE:{" "}
                  <span className="text-emerald-400">BUILDING + LEARNING</span>
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 text-xs text-zinc-600">
                // personal portfolio system
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="section-number">01 / ABOUT</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Curious by nature.
                <br />
                Practical by approach.
              </h2>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-zinc-400">
                I&apos;m a B.E. Information Technology student interested in
                Prompt Engineering, web development and IT support. I enjoy
                using technology and AI-assisted development to build practical
                solutions and solve real-world problems.
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-500">
                Through internships and academic projects, I have gained
                practical exposure to web development, Android applications, IoT
                systems and technical problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="section-number">02 / WHAT I WORK WITH</p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#0b0d10] p-7 transition hover:bg-[#101318]"
              >
                <p className="mb-5 text-sm font-semibold text-white">
                  {group.title}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.08] px-3 py-1.5 text-xs text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-number">03 / SELECTED WORK</p>
              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Real projects.
                <br />
                Real learning.
              </h2>
            </div>

            <a
              href="https://github.com/Rihen1025"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-500 transition hover:text-emerald-400"
            >
              Explore GitHub ↗
            </a>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="project-card group"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-emerald-400">
                    {project.number}
                  </span>
                  <span className="text-zinc-700 transition group-hover:text-emerald-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-16 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[11px] text-zinc-600">
                      #{tech.replaceAll(" ", "-")}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="section-number">04 / EXPERIENCE</p>

          <div className="mt-12 space-y-0">
            {experience.map((item, index) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid gap-5 border-t border-white/[0.08] py-8 md:grid-cols-[120px_1fr]"
              >
                <p className="font-mono text-sm text-emerald-400">
                  {item.year}
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.company}
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">{item.role}</p>

                  <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION + CURRENTLY EXPLORING */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="section-number">05 / EDUCATION</p>

            <div className="mt-10 space-y-8">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="border-l border-emerald-400/40 pl-6"
                >
                  <p className="font-mono text-xs text-emerald-400">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">{item.institute}</p>
                  {item.result && (
                    <p className="mt-2 text-sm text-zinc-600">{item.result}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="section-number">06 / CURRENTLY EXPLORING</p>

            <div className="mt-10 space-y-5">
              {[
                "AI-assisted Development",
                "Prompt Engineering",
                "IT Support & Troubleshooting",
                "Web Technologies",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b border-white/[0.08] pb-4"
                >
                  <span className="text-zinc-300">{item}</span>
                  <span className="font-mono text-xs text-zinc-700">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SOLVING */}
      <section className="border-t border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="section-number">07 / HOW I APPROACH PROBLEMS</p>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] md:grid-cols-4">
            {[
              ["01", "Understand", "Understand the requirement and problem."],
              ["02", "Explore", "Research possible solutions and tools."],
              ["03", "Build", "Create a practical solution using technology."],
              ["04", "Improve", "Test, troubleshoot and improve the result."],
            ].map(([number, title, description]) => (
              <div key={number} className="bg-[#0b0d10] p-7">
                <p className="font-mono text-xs text-emerald-400">{number}</p>
                <h3 className="mt-7 font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="section-number">08 / LET&apos;S CONNECT</p>

          <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Let&apos;s build something
            <span className="text-emerald-400"> useful.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-zinc-500">
            Open to internships, entry-level opportunities and learning-focused
            technical roles.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:rihen7636@gmail.com"
              className="rounded-full bg-emerald-400 px-7 py-3 text-sm font-semibold text-black transition hover:bg-emerald-300"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/rihen7636"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/50 hover:text-emerald-400"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Rihen1025"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 px-7 py-3 text-sm font-semibold text-white transition hover:border-emerald-400/50 hover:text-emerald-400"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-7">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 text-xs text-zinc-700 sm:flex-row lg:px-10">
          <p>RIHEN PATEL — B.E. INFORMATION TECHNOLOGY</p>
          <p>AI • WEB • IT SUPPORT</p>
        </div>
      </footer>
    </main>
  );
}
