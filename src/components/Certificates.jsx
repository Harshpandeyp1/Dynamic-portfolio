import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";

// Certificate artwork imports
import springboot from "../assets/springboot.png";
import Genai from "../assets/Genai.png";
import react from "../assets/react.png";
import prompt from "../assets/prompt.png";
import dsa from "../assets/dsa.png";
import java from "../assets/java.png";

const certificates = [
 {
    title: "GenAI Certification",
    issuer: "Google | Coursera",
    tags: ["Generative AI", "LLMs", "Machine Learning"],
    description: "Mastered the core concepts of Generative AI, foundational large language models (LLMs), and how to responsibly implement Google Cloud AI tools in modern engineering workflows.",
    image: Genai,
    
  },
  {
    title: "Prompt Engineering Certification",
    issuer: "Google | Coursera",
    tags: ["Prompt Engineering", "Context Optimization", "AI Tuning"],
    description: "Developed advanced skills in crafting, testing, and optimizing structural prompts. Explored zero-shot, few-shot, and chain-of-thought techniques to maximize AI model accuracy.",
    image: prompt,

  },
  {
    title: "React Certification",
    issuer: "Meta | Coursera", // Adjust issuer to Meta or IBM if needed, left as requested
    tags: ["React JS", "State Management", "SPAs"],
    description: "Gained comprehensive expertise in building scalable frontend architectures using React. Mastered hooks, functional components, component files structure, and asynchronous state handling.",
    image: react,
  
  },
  {
    title: "Spring Boot Certification",
    issuer: "Google | Coursera", // Adjust issuer if it was a specific university or vendor on Coursera
    tags: ["Spring Boot", "REST APIs", "Microservices"],
    description: "Mastered backend development ecosystem building robust enterprise architectures. Deeply analyzed dependency injection, bean management, REST endpoints, and secure database configurations.",
    image: springboot,
   
  },
  {
    title: "DSA and Algo Certification",
    issuer: "GeeksforGeeks",
    tags: ["Data Structures", "Algorithms", "Problem Solving"],
    description: "Cultivated a deep understanding of core algorithmic concepts and computational complexity. Solved complex challenges involving trees, graphs, dynamic programming, sorting, and search optimizations.",
    image: dsa,
   
  },
  {
    title: "Java Certification",
    issuer: "GeeksforGeeks",
    tags: ["Java", "OOPs Concepts", "Multithreading"],
    description: "Solidified core programming competencies in Java. Mastered the pillars of Object-Oriented Programming (Inheritance, Polymorphism, Abstraction, Encapsulation), collections, exception handling, and memory management.",
    image: java,
 
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="min-h-screen bg-[#050505] text-white py-24 px-6 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-emerald-400 tracking-[0.3em] uppercase text-sm font-bold mb-2">Credentials</h2>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text">
            Certifications
          </h1>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              layoutId={`cert-card-${cert.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md"
            >
              {/* Certificate Preview Image */}
              <div className="h-48 w-full overflow-hidden bg-gray-900 relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/111/333?text=Certificate+Preview"; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
              </div>

              {/* Content Details */}
              <div className="p-6">
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="text-2xl font-black mb-3 group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {cert.title}
                </h3>
                <p className="text-gray-400 line-clamp-2 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-emerald-500/10 rounded-full text-emerald-400 border border-emerald-500/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center text-xs font-bold text-emerald-400 group-hover:gap-2 transition-all uppercase tracking-tighter">
                  View Verification <span className="ml-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            
            <motion.div
              layoutId={`cert-card-${selectedCert.title}`}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/20 rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
              >
                <FaTimes className="text-xl" />
              </button>

              <div className="h-64 bg-gray-800 flex items-center justify-center overflow-hidden">
                <img src={selectedCert.image} alt="" className="w-full h-full object-contain bg-neutral-900" />
              </div>

              <div className="p-8 md:p-12 space-y-4">
                <span className="text-sm text-emerald-400 font-bold uppercase tracking-widest">
                  {selectedCert.issuer}
                </span>
                <h2 className="text-3xl md:text-4xl font-black">{selectedCert.title}</h2>
                <p className="text-gray-400 text-md leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="pt-6">
                  <a 
                    href={selectedCert.credentialUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-black rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] text-sm"
                  >
                    <FaExternalLinkAlt className="text-sm" /> VERIFY CREDENTIAL
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

export default Certificates;