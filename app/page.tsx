"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Portfolio() {
  const skills = [
    "React",
    "Next.js",
    "TailwindCSS",
    "JavaScript",
    "Python",
    "C++",
    "Java",
    "SQL",
    "Android Studio",
  ];

  const experiences = [
    {
      title: "Web Designer (Internship)",
      year: "2022",
      desc: "Built and redesigned responsive websites with modern layouts and accessible design.",
    },
    {
      title: "React Native Developer (Internship)",
      year: "2023",
      desc: "Developed cross-platform mobile apps using React Native and integrated native modules.",
    },
    {
      title: "Finishing School Training",
      year: "2024",
      desc: "Comprehensive training in Web, DB, Android, and soft skills over 80+ hours.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Engineering (Running)",
      school: "Laxmi Institute of Technology",
      years: "2024 – Present",
    },
    {
      degree: "Diploma in IT",
      school: "Government Polytechnic, Waghai",
      years: "2021 – 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white font-sans">
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-20 backdrop-blur-md bg-white/5 border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div>
            <h1 className="text-2xl font-bold text-emerald-400 tracking-tight">
              Rihen Patel
            </h1>
            <p className="text-sm text-gray-300">
              IT Engineer • Web & Mobile Developer
            </p>
          </div>
          <div className="text-sm text-gray-400 space-y-0.5">
            <p>
              📧{" "}
              <a
                href="mailto:Rihen7636@gmail.com"
                className="hover:text-emerald-400 transition"
              >
                Rihen7636@gmail.com
              </a>
            </p>
            <p>
              📞{" "}
              <span className="hover:text-emerald-400 transition">
                7874654775
              </span>
            </p>
            <p>📍 Bilimora, India</p>
          </div>
        </div>
      </motion.header>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Hi, I&apos;m <span className="text-emerald-400">Rihen Patel</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          A passionate <span className="text-emerald-400">IT Engineer</span> who
          loves creating digital experiences. I specialize in Web & Mobile
          development using modern technologies.
        </motion.p>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl border border-white/10"
        >
          <h3 className="text-xl font-semibold mb-3 text-emerald-400">
            About Me
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I’m an ambitious IT Engineer who enjoys solving problems and
            building user-friendly digital solutions. From web design to Android
            apps, I bring creativity and precision to every project I work on.
          </p>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Experience</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10"
            >
              <h4 className="font-semibold text-lg text-white">{exp.title}</h4>
              <p className="text-sm text-gray-400">{exp.year}</p>
              <p className="mt-2 text-gray-300">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Skills</h3>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-wrap gap-3"
        >
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-400/20 hover:bg-emerald-500/20 transition"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="max-w-5xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Education</h3>
        <div className="space-y-4">
          {education.map((ed, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-5 rounded-2xl border border-white/10"
            >
              <h4 className="font-semibold text-white">{ed.degree}</h4>
              <p className="text-sm text-gray-400">{ed.school}</p>
              <p className="text-sm text-gray-500">{ed.years}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-20 text-center"
      >
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-4 text-emerald-400"
        >
          Let&apos;s Connect
        </motion.h3>
        <p className="text-gray-400 mb-8">
          I’m open to new opportunities, collaborations, or freelance work. You
          can reach me through any of the following ways 👇
        </p>

        <div className="space-y-3 text-gray-300">
          <p>
            📧{" "}
            <a
              href="mailto:Rihen7636@gmail.com"
              className="text-emerald-400 hover:underline"
            >
              Rihen7636@gmail.com
            </a>
          </p>
          <p>
            📞 <span className="text-emerald-400">7874654775</span>
          </p>
          <p>📍 Bilimora, Gujarat, India</p>
        </div>

        <a
          href="mailto:Rihen7636@gmail.com"
          className="inline-block mt-8 px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition"
        >
          Send an Email
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-gray-500 border-t border-white/10">
        © 2025 Rihen Patel — Crafted with ❤️ using Next.js & Tailwind
      </footer>
    </div>
  );
}
