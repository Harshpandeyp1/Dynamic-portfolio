import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  // Handle scroll effect for the "Floating" look
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div 
        className={`max-w-5xl mx-auto px-6 py-3 flex justify-between items-center transition-all duration-500 rounded-2xl ${
          scrolled 
            ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] mx-4 md:mx-auto" 
            : "bg-transparent"
        }`}
      >
        {/* Logo with Glow Effect */}
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black cursor-pointer group"
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Harsh
          </span>
          <span className="text-white group-hover:text-pink-500 transition-colors">.dev</span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <li key={index} className="relative group cursor-pointer text-sm font-medium uppercase tracking-widest text-gray-300 hover:text-white transition-colors">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
              
              {/* Animated Underline */}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
          {/* Subtle CTA in Nav */}
         <a 
  href="https://wa.me/918987746532?text=Hi%20Harsh,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20hiring%20opportunity!" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-pink-500 hover:text-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95"
>
  HIRE ME
</a>
        </ul>

        {/* Mobile Toggle */}
        <div 
          className="md:hidden p-2 text-xl cursor-pointer text-white hover:bg-white/10 rounded-lg transition-colors" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 right-0 w-[70%] h-screen bg-black/95 backdrop-blur-2xl z-[101] md:hidden flex flex-col justify-center items-center shadow-2xl border-l border-white/10"
          >
            <div className="absolute top-8 right-8 text-2xl cursor-pointer" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </div>

            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold hover:text-pink-500 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.button 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.6 }}
                 className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;