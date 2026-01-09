"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-20 tracking-tighter">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-8 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20">
                      {project.category}
                    </span>
                    <div className="flex gap-4 text-gray-500">
                      <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                      <ExternalLink className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400" />
                  </h3>
                  
                  <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow font-light">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs text-gray-500 font-mono bg-black/50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
