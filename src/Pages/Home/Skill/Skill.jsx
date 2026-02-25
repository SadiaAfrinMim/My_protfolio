import React from 'react';
import html from '../../../assets/htmll.png';
import css from '../../../assets/css-logo.png';
import js from '../../../assets/js.png';
import node from '../../../assets/node.png';
import react from '../../../assets/react-icon-256x228-97ltgbl1.png';
import express from '../../../assets/express.png';
import mongo from '../../../assets/logo-mongodb-png-mongo-db-shaped-sticker-650.png';
import vscode from '../../../assets/vscode.png';
import C from '../../../assets/c programming.png';
import github from '../../../assets/github.png';
import firebase from '../../../assets/firebase.png';
import tailwind from '../../../assets/tailwind.png';
import bootstrap from '../../../assets/Bootstrap_logo.png';
import dart from '../../../assets/dart.png';
import Marquee from 'react-fast-marquee';
import { Code2, Sparkles, Cpu, Gauge, Zap, Shield } from 'lucide-react';

const Skill = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="text-purple-600" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Development",
      icon: <Cpu className="text-pink-600" size={24} />,
      skills: ["Node.js", "Express.js", "MongoDB", "Firebase"]
    },
    {
      title: "Tools & Technologies",
      icon: <Gauge className="text-purple-600" size={24} />,
      skills: ["VS Code", "GitHub", "C Programming", "Dart"]
    }
  ];

  const skills = [
    { name: "HTML5", icon: html, level: 90, color: "from-orange-500 to-orange-600" },
    { name: "CSS3", icon: css, level: 85, color: "from-blue-500 to-blue-600" },
    { name: "JavaScript", icon: js, level: 88, color: "from-yellow-500 to-yellow-600" },
    { name: "React", icon: react, level: 92, color: "from-cyan-500 to-cyan-600" },
    { name: "Node.js", icon: node, level: 80, color: "from-green-500 to-green-600" },
    { name: "Express.js", icon: express, level: 78, color: "from-gray-600 to-gray-700" },
    { name: "MongoDB", icon: mongo, level: 75, color: "from-green-600 to-green-700" },
    { name: "VS Code", icon: vscode, level: 95, color: "from-blue-600 to-blue-700" },
    { name: "C", icon: C, level: 70, color: "from-blue-700 to-blue-800" },
    { name: "GitHub", icon: github, level: 88, color: "from-gray-800 to-gray-900" },
    { name: "Firebase", icon: firebase, level: 82, color: "from-yellow-600 to-orange-600" },
    { name: "Tailwind CSS", icon: tailwind, level: 94, color: "from-teal-500 to-teal-600" },
    { name: "Bootstrap", icon: bootstrap, level: 85, color: "from-purple-600 to-purple-700" },
    { name: "Dart", icon: dart, level: 65, color: "from-blue-400 to-blue-500" }
  ];

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-gradient-to-b from-base-100 to-base-200">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 px-4 py-2 rounded-full mb-4">
            <Sparkles size={18} className="text-purple-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Technical Expertise
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <p className="text-base-content/70 max-w-2xl mx-auto text-lg">
            I work with a modern tech stack to build fast, responsive, and user-friendly applications
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-base-100/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-600/20 hover:border-purple-600/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-600/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-base-200 rounded-full text-sm text-base-content/70 group-hover:bg-gradient-to-r group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Carousel */}
        <div className="relative">
          <div className="absolute -top-8 left-0 right-0 flex justify-center gap-2 mb-4">
            <div className="flex items-center gap-2 bg-base-100/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Zap size={18} className="text-purple-600" />
              <span className="text-sm font-medium">Hover to see proficiency</span>
            </div>
          </div>

          <Marquee 
            gradient={true} 
            gradientColor={[26, 26, 35]} 
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            className="py-8"
          >
            <div className="flex gap-6 mr-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative w-32 h-32 bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 cursor-pointer"
                >
                  {/* Progress Ring Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Skill Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-16 h-16 object-contain transform group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Hover Overlay with Progress */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Skill Name & Level (shown on hover) */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-base-100 to-transparent p-3 rounded-b-2xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-semibold text-center">{skill.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="flex-1 h-1 bg-base-300 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-purple-600">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-600/20 rounded-2xl transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Projects Completed", value: "15+", icon: <Shield className="text-purple-600" size={24} /> },
            { label: "Technologies Used", value: "20+", icon: <Cpu className="text-pink-600" size={24} /> },
            { label: "Coding Hours", value: "1000+", icon: <Gauge className="text-purple-600" size={24} /> },
            { label: "Happy Clients", value: "10+", icon: <Zap className="text-pink-600" size={24} /> }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-base-100/50 backdrop-blur-sm rounded-xl p-4 text-center border border-purple-600/20 hover:border-purple-600/40 transition-all duration-300"
            >
              <div className="flex justify-center mb-2">
                <div className="p-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm text-base-content/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;