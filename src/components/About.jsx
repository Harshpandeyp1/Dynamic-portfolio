import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaPenNib, FaMusic } from "react-icons/fa";

const About = () => {
  const stats = [
    { label: "Age", value: "21" },
    { label: "College Year", value: "3rd" },
    { label: "Projects", value: "10+" },
    { label: "Location", value: "BBSr" },
  ];

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-purple-500/30">
      <Navbar />

      <section id="about" className="pt-32 pb-20 px-6 md:px-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-red-500/10 blur-[120px] rounded-full bottom-0 -right-20"></div>

        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:text-left"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-2 font-bold">The Persona</h2>
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 via-white to-red-400 text-transparent bg-clip-text">
              About Me
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: Main Bio (8 Columns) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl">
                <p className="text-xl leading-relaxed text-gray-300">
                  I'm <span className="text-emerald-400 font-bold">Harsh Pandey</span>, 
                  a developer who thrives at the intersection of logic and creativity. Currently a 3rd-year student at{" "}
                  <span className="text-white border-b border-emerald-500/50">Centurion University, Odisha</span>.
                </p>

                <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                  My journey in tech is fueled by a passion for building robust backends with 
                  <span className="text-white font-medium"> Spring Boot & Java</span> and crafting 
                  fluid frontends with <span className="text-white font-medium">React & Tailwind CSS</span>. 
                  Whether it's optimizing a DSA problem or designing a UI, I aim for precision.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                      <div className="text-2xl font-black text-emerald-400">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Card */}
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <h3 className="text-lg font-bold flex items-center gap-3 mb-4">
                  <span className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><FaCode /></span>
                  Education & Roots
                </h3>
                <p className="text-gray-400">
                  Polished my basics at <span className="text-gray-200">Siksha Niketan High School</span> before 
                  diving deep into Engineering. Based in the vibrant city of <span className="text-gray-200 font-medium">Bbsr</span>.
                </p>
              </div>
            </motion.div>

            {/* RIGHT: Creative Side (4 Columns) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Creativity Card */}
              <div className="relative group overflow-hidden bg-gradient-to-b from-red-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="absolute -right-10 -top-10 text-9xl text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <FaPenNib />
                </div>
                
                <h3 className="text-2xl font-black mb-4 flex items-center gap-3">
                  <FaPenNib className="text-red-400" /> Creative Soul
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  When I'm not debugging code, I'm often found weaving words into 
                  <span className="text-red-400"> poetry</span> or hitting the high notes while 
                  <span className="text-emerald-400"> singing</span>. This balance keeps my 
                  problem-solving fresh and out-of-the-box.
                </p>
                
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10">
                    <FaMusic className="text-purple-400" /> Singer
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-xs font-bold border border-white/10">
                    <FaPenNib className="text-pink-400" /> Poet
                  </div>
                </div>
              </div>

              {/* Stack Preview */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                   <FaServer className="text-blue-400" /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Spring Boot", "Node.js", "Java", "Python", "JSP", "Tailwind"].map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-black border border-white/5 rounded-xl text-sm font-medium hover:border-emerald-500 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;