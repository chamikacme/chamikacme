"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black font-sans text-white mb-8 tracking-tighter uppercase">
              Passionate About <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Building The Future</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 font-light">
              Full-Stack Software Engineer with a comprehensive understanding of both front-end and back-end technologies. 
              I pride myself on my problem-solving skills and collaborative spirit, focused on banking automation and process optimization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-500">
               <span className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                 2+ Years Experience
               </span>
               <span className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                 20+ Built Projects
               </span>
               <span className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                 10+ Happy Clients
               </span>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[2.5rem] blur-xl" />
             <div className="relative bg-zinc-900/30 backdrop-blur-xl border border-white/5 rounded-[2rem] p-8 md:p-12">
               <h3 className="text-3xl font-black text-white mb-12 uppercase tracking-tight">Capabilities</h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { title: "Languages", color: "border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]", items: portfolioData.skills.languages },
                  { title: "Back-end", color: "border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]", items: portfolioData.skills.backend },
                  { title: "Front-end", color: "border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.1)]", items: portfolioData.skills.frontend },
                  { title: "Infrastructure", color: "border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.1)]", items: portfolioData.skills.database.concat(portfolioData.skills.tools) },
                ].map((category) => (
                  <div key={category.title} className={`p-6 bg-black/40 rounded-2xl border ${category.color} hover:bg-black/60 transition-colors`}>
                    <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">{category.title}</h4>
                    <ul className="space-y-4">
                      {category.items.map((skill) => (
                        <li key={skill} className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
               </div>
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
