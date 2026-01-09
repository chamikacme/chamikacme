"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] selection:bg-blue-500/30 pt-20"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] uppercase tracking-wider font-bold text-blue-400 mb-8 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            Available for new projects
          </motion.div>

          <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-white mb-6 leading-[0.9] tracking-[-0.04em] uppercase">
            Transforming<br />
            Ideas into<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-purple-600">Digital Reality</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-light">
            Hi, I'm <strong className="text-white font-medium">Chamika Edirisinghe</strong>. A Full-Stack Software Engineer building scalable, high-performance applications with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold text-sm uppercase tracking-wide hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center gap-2"
            >
              Explore Projects
              <ArrowDown className="w-4 h-4 -rotate-90" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-6 py-3 rounded-full text-white font-bold text-sm uppercase tracking-wide hover:text-blue-400 transition-colors flex items-center gap-2"
            >
              Get In Touch
              <ArrowDown className="w-4 h-4 -rotate-45" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
