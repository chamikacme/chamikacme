"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-12">
            Work <span className="text-blue-500">Experience</span>
          </h2>
          
          <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-500 ring-4 ring-zinc-950" />
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm text-gray-500 font-mono mt-1 sm:mt-0 bg-zinc-900 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 mb-4 text-blue-400">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{exp.company}</span>
                </div>
                
                <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-3xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
