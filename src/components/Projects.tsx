"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors"
              >
                <div className="p-6 md:p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div className="px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full">
                      {project.category}
                    </div>
                    <div className="flex gap-2 text-gray-400">
                     {/* Links could be added to data if available, using generic placeholders if needed */}
                     {/* For now just visual icons */}
                      <Github className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                      <ExternalLink className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs text-gray-500 font-mono"
                      >
                        #{tech}
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
