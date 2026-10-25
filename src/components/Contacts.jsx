import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaCode } from "react-icons/fa";

const Contact = () => {
  // WhatsApp Link Construction
  const whatsappNumber = "8987746532";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute w-150 h-150 bg-emerald-500/5 blur-[120px] rounded-full top-[-10%] left-[-10%] pointer-events-none"></div>
      <div className="absolute w-125 h-125 bg-red-500/5 blur-[120px] rounded-full bottom-[-10%] right-[-10%] pointer-events-none"></div>

      <div className="max-w-4xl w-full relative z-10 text-center">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <h2 className="text-emerald-400 tracking-[0.4em] uppercase text-xs font-black mb-4">Availability</h2>
          <h1 className="text-6xl md:text-8xl font-black bg-linear-to-b from-white to-gray-600 text-transparent bg-clip-text">
            Get In Touch.
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            I’m currently open to internships and full-stack opportunities. 
            Feel free to reach out through any of the platforms below!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactInfoCard 
            icon={<FaEnvelope className="text-blue-400" />} 
            label="Email Me" 
            value="hk9976057@gmail.com" 
            href="mailto:hk9976057@gmail.com" 
          />
          <ContactInfoCard 
            icon={<FaWhatsapp className="text-green-500" />} 
            label="WhatsApp" 
            value="+91 8987746532" 
            href={whatsappLink} 
          />
          <ContactInfoCard 
            icon={<FaGithub className="text-white" />} 
            label="GitHub" 
            value="harshpandey_p1" 
            href="https://github.com/Harshpandeyp1" 
          />
          <ContactInfoCard 
            icon={<FaLinkedin className="text-blue-500" />} 
            label="LinkedIn" 
            value="@harshpandeyp1" 
            href="https://www.linkedin.com/in/harsh-pandey-381b2a371/" 
          />
          <ContactInfoCard 
            icon={<FaCode className="text-blue-500" />} 
            label="LeetCode" 
            value="@Harshpandey_p1" 
            href="https://leetcode.com/u/Harshpandey_p1/" 
          />
        </div>

        {/* Location Tag */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 flex items-center justify-center gap-2 text-gray-500 font-bold tracking-widest text-xs uppercase"
        >
          <FaMapMarkerAlt className="text-red-500" /> 
          Bhubaneswar, Odisha, India
        </motion.div>
      </div>

      {/* Footer Branding */}
      <div className="mt-32 border-t border-white/5 pt-12 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center text-gray-600 text-[10px] font-bold tracking-[0.3em] px-4">
        <p>BUILT BY HARSH PANDEY</p>
        <p className="mt-4 md:mt-0">© 2026 • REACT & SMOKE ENGINE</p>
      </div>
    </section>
  );
};

// Refined Card Component
const ContactInfoCard = ({ icon, label, value, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -8, scale: 1.02 }}
    className="group p-8 bg-white/5 border border-white/10 rounded-4xl backdrop-blur-xl hover:bg-white/10 transition-all text-left flex flex-col justify-between h-44"
  >
    <div className="text-4xl group-hover:scale-110 transition-transform origin-left">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-xl font-bold truncate group-hover:text-emerald-400 transition-colors">
        {value}
      </p>
    </div>
  </motion.a>
);

export default Contact;