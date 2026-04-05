import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "Prison Manager",
    tags: ["React", "Tailwind", "Node.js", "MySQL"],
    description: "A full-stack admin panel for prison record management. Features secure role-based access control (RBAC) to manage inmates, staff schedules, and facility activities.",
    image: "/project-prison.jpg", // Replace with your image path
    github: "https://github.com/Harshpandeyp1/prison_manager"
  },
  {
    title: "Job App",
    tags: ["Spring Boot", "React", "REST API", "PostgreSQL"],
    description: "A robust job portal with application tracking and job posting features. Built with a Spring Boot backend and a React frontend for high performance.",
    image: "/project-job.jpg", // Replace with your image path
    github: "https://github.com/Harshpandeyp1/Jobapp-Springboot"
  },
  {
    title: "Civylitics",
    tags: ["React", "Data Viz", "Chart.js"],
    description: "An analytics platform for civil Service Aspirants  intregated with Api to get summary pyq all at once.",
    image: "/Screenshot 2026-04-01 220331.png", // Replace with your image path
    github: "https://github.com/Harshpandeyp1/Civilytics"
  },
  {
    title: "Dept Master",
    tags: ["React", "Context API", "CSS Modules"],
    description: "A specialized dept Management system to recover you from all of your depts..",
    image: "/project-dept.jpg", // Replace with your image path
    github: "https://github.com/Harshpandeyp1/Dept-master"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="min-h-screen bg-[#050505] text-white py-24 px-6 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-emerald-400 tracking-[0.3em] uppercase text-sm font-bold mb-2">Portfolio</h2>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
            Featured Projects
          </h1>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              layoutId={`card-${project.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
            >
              {/* Image Section */}
              <div className="h-56 w-full overflow-hidden bg-gray-900 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/111/333?text=Project+Preview"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-emerald-500/10 rounded-full text-emerald-400 border border-emerald-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-black mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 line-clamp-2 text-md leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-emerald-400 group-hover:gap-3 transition-all uppercase tracking-tighter">
                  View Case Study <span className="ml-2">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`card-${selectedProject.title}`}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              >
                <FaTimes className="text-xl" />
              </button>

              <div className="h-64 bg-gray-800">
                <img src={selectedProject.image} alt="" className="w-full h-full object-cover" />
              </div>

              <div className="p-8 md:p-12 space-y-6">
                <h2 className="text-4xl font-black">{selectedProject.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="pt-6">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-black rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                  >
                    <FaGithub className="text-xl" /> SOURCE CODE
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;