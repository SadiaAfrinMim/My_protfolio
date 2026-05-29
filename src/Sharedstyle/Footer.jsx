import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/SadiaAfrinMim', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sadia-afrin-mim-5198121b0/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:sadiaafrinmim660@gmail.com', label: 'Email' },
    { icon: FaPhoneAlt, href: 'tel:+01782759884', label: 'Phone' },
  ];

  return (
    <footer className="relative dark:bg-[#0a0a0f] bg-gray-100 py-12 overflow-hidden">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-600/20 dark:bg-purple-600/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              SADIA AFRIN MIM
            </h3>
            <p className="text-gray-600 dark:text-gray-500 mt-2">Building amazing web experiences</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                <div className="relative w-12 h-12 rounded-full dark:bg-gray-800/50 bg-white border dark:border-gray-700 border-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-600 group-hover:text-white dark:group-hover:text-white group-hover:border-purple-500 transition-all duration-300">
                  <Icon className="text-xl" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent dark:via-gray-700 via-gray-300 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} Sadia Afrin Mim. All rights reserved.
            </p>
            <p className="text-gray-500 dark:text-gray-600 text-xs mt-1">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;