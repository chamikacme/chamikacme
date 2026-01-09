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
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Passionate Full-Stack Software Engineer with a comprehensive understanding of both front-end and back-end technologies. 
                I pride myself on my problem-solving skills and collaborative spirit.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-gray-300">
                  <span className="w-24 font-bold text-white">Email:</span>
                  <a href={`mailto:${portfolioData.personalInfo.email}`} className="hover:text-blue-400 transition-colors">
                    {portfolioData.personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <span className="w-24 font-bold text-white">Website:</span>
                  <a href={portfolioData.personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    chamika.space
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                 <a 
                   href="https://chamika.space/doc/Chamika-Edirisinghe-Resume.pdf" 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                 >
                   Download CV
                 </a>
              </div>
            </div>

            <div className="space-y-8">
              {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-white mb-4 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-3"
                  >
                    {skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={item}
                        className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
