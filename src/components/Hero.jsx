import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import { useEffect } from "react";

export const useVaporTrail = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        // Randomly pick between Green and Red
        this.color = Math.random() > 0.5 ? "rgba(74, 222, 128, 0.6)" : "rgba(239, 68, 68, 0.6)";
        this.size = Math.random() * 40 + 20; // 20px to 60px
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.015; // Fade out speed
        if (this.size > 0.5) this.size -= 0.2;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      // Spawn 3 particles per move for a "thick" vapor feel
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(e.clientX, e.clientY));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);
};

const Hero = () => {
  // Optional: Parallax effect on scroll
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

 
  return (
    <div>
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center bg-[#050505] text-white overflow-hidden"
    >
      
      {/* 1. Cyber Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* 2. Animated Gradient Orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full -top-40 -left-20 animate-pulse" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -bottom-20 -right-20" 
      />

      {/* 3. Floating Interactive Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[15%] right-[15%] w-24 h-24 border border-white/10 rounded-2xl hidden md:block"
      />

      {/* Main Content Container */}
      <div className="relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-purple-400 mb-6 inline-block backdrop-blur-sm">
            Available for Internships
          </span>
          
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text drop-shadow-sm">
              Harsh Pandey
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Typing Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-3xl font-light text-gray-400 max-w-2xl mx-auto h-20"
        >
          <TypeAnimation
            sequence={[
              "Building Full-Stack Web Apps 💻",
              1500,
              "Mastering Data Structures & Algorithms 🧠",
              1500,
              "Java & Spring Boot Enthusiast 🚀",
              1500,
              "Crafting Modern UI with React 🎨",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </motion.div>

        {/* Enhanced Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <a 
  href="https://github.com/Harshpandeyp1" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 inline-flex items-center justify-center"
>
  <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
    View My Work
  </span>
  {/* Gradient Overlay that appears on hover */}
  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</a>

        <a href="/Resume.pdf" download="Resume.pdf">
  <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl font-medium flex items-center gap-2 hover:bg-white/10 transition-all hover:border-white/40">
    <FaFileDownload className="text-purple-400" /> Resume
  </button>
</a>
        </motion.div>

        {/* Social Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex items-center justify-center gap-8"
        >
          <div className="h-[1px] w-12 bg-white/20 hidden sm:block"></div>
          <div className="flex gap-6">
            <SocialIcon icon={<FaGithub />} link="https://github.com/Harshpandeyp1" />
            <SocialIcon icon={<FaLinkedin />} link="https://www.linkedin.com/in/harsh-kumar-381b2a371/" />
          </div>
          <div className="h-[1px] w-12 bg-white/20 hidden sm:block"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </motion.div>
      
    </section>
    <section id="about">
  <About />
</section>
    <section id="skills">
  <Skills />
</section>

    <section id="projects">
  <Projects />
</section>
    <section id="contacts">
  <Contacts />
</section>
    </div>
    
    
  );
};

// Helper Component for Social Icons
const SocialIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-3xl text-gray-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
  >
    {icon}
  </a>
  
);

export default Hero;