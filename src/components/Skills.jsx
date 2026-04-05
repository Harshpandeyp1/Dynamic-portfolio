import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaJava, FaJs, FaHtml5, FaCss3Alt, 
  FaNodeJs, FaPython, FaServer, FaTerminal,
  FaDatabase
} from "react-icons/fa";
import { 
  SiSpringboot, SiNextdotjs, SiApachetomcat, SiTailwindcss 
} from "react-icons/si";

const skillCategories = [
  {
    title: "Core Pillars",
    skills: [
      { name: "React JS", icon: <FaReact className="text-cyan-400" />, level: 85 },
      { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" />, level: 80 },
      { name: "Java", icon: <FaJava className="text-red-500" />, level: 85 },
      { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 80 },
    ],
  },
  {
    title: "Web Foundation",
    skills: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 90 },
      { name: "CSS3 / Tailwind", icon: <SiTailwindcss className="text-sky-400" />, level: 85 },
      { name: "JSP & Servlet", icon: <FaServer className="text-gray-400" />, level: 75 },
      { name: "Apache Tomcat", icon: <SiApachetomcat className="text-orange-400" />, level: 70 },
    ],
  },
  {
    title: "Expanding Horizon",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 50 },
      { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, level: 55 },
      { name: "Python", icon: <FaPython className="text-blue-400" />, level: 60 },
      { name: "MySQL", icon: <FaDatabase className="text-blue-400" />, level: 60 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-[#050505] text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-emerald-400 tracking-[0.3em] uppercase text-sm font-bold mb-2">Technical Proficiency</h2>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-gray-400 to-gray-600 text-transparent bg-clip-text">
            My Skill Set
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-gray-200 ml-2 border-l-4 border-emerald-500 pl-4">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="group bg-white/5 border border-white/10 p-4 rounded-2xl hover:bg-white/10 hover:border-emerald-500/50 transition-all duration-300 shadow-xl"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="font-semibold text-gray-300 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                    </div>
                    
                    {/* Minimalist Progress Line */}
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-12 border-t border-white/5"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {["Singing 🎤", "Poetry Writing ✍️", "Creative Thinking 💡", "Communication 🗣️"].map((pskill, i) => (
              <span 
                key={i}
                className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-default"
              >
                {pskill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;