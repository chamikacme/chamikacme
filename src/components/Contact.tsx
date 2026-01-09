"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="grid md:grid-cols-2 gap-12 lg:gap-24"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">
              Let's <span className="text-blue-500">Connect</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a 
                href={`mailto:${portfolioData.personalInfo.email}`} 
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="p-3 bg-zinc-900 rounded-lg group-hover:bg-blue-500/10 group-hover:text-blue-500 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">{portfolioData.personalInfo.email}</span>
              </a>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 bg-zinc-900 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-lg">Sri Lanka</span>
              </div>
            </div>
          </div>

          <form className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <button 
                type="button" 
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
