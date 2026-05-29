import React, { useState } from 'react';
import ComputersCanvas from '../../Component/Computer';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPrisma,
  SiMongodb,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { IoCloudDownload } from 'react-icons/io5';

const Banner = () => {
  const [isTyping, setIsTyping] = useState(false);

  // Google Drive resume link (direct download)
  const resumeLink = "https://drive.google.com/uc?export=download&id=1Dq_uiHdPZ6lIYlFOb8jpNBapBKEWyHJS";
  
  // Alternative: Open in Google Drive viewer
  const resumeViewLink = "https://drive.google.com/file/d/1Dq_uiHdPZ6lIYlFOb8jpNBapBKEWyHJS/view?usp=sharing";

  // Tech stack icons with colors and labels
  const techIcons = [
    { Icon: SiMongodb, label: 'MongoDB', color: 'text-green-600', delay: 0 },
    { Icon: SiNextdotjs, label: 'Next.js', color: 'text-black dark:text-white', delay: 1 },
    { Icon: SiTailwindcss, label: 'Tailwind', color: 'text-cyan-500', delay: 2 },
    { Icon: SiPrisma, label: 'Prisma', color: 'text-indigo-600', delay: 3 },
    { Icon: SiReact, label: 'React', color: 'text-cyan-400', delay: 4 },
  ];

  return (
    <section className="relative pt-40 overflow-hidden bg-gradient-to-br from-base-100 via-primary/5 to-base-200">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' fill='none' stroke='%23933EEA' stroke-width='0.5' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
          {/* Left Column – Text Content */}
          <div className="lg:flex-1 animate-fadeInLeft">
            <div className="flex gap-4">
              {/* Vertical timeline indicator */}
              <div className="flex flex-col items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse shadow-lg shadow-primary/50" />
                <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-primary via-secondary to-transparent animate-gradientMove" />
              </div>

              <div className="flex-1 space-y-6">
                {/* Greeting badge */}
                {/* <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-primary text-sm font-semibold">👋 Welcome to my portfolio</span>
                </div> */}

                {/* Name with glowing effect */}
                <div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-6xl font-black">
                    <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-glow">
                      SADIA AFRIN MIM
                    </span>
                  </h1>
                </div>

                {/* Typewriter title */}
                <div>
                  <h2
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold transition-all duration-300 ${
                      isTyping
                        ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent scale-105'
                        : 'text-base-content/80'
                    }`}
                  >
                    <Typewriter
                      words={[
                        "I'm a MERN Stack Developer",
                        "I'm a Full Stack Developer",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      onType={() => setIsTyping(true)}
                      onEnd={() => setIsTyping(false)}
                    />
                  </h2>
                </div>

                {/* Description with highlighted technologies */}
                <p className="text-lg text-base-content/70 leading-relaxed max-w-xl">
                  I'm a Web Developer who specializes in the MERN stack, along with modern tools like{' '}
                  <span className="font-semibold text-primary">React</span>,{' '}
                  <span className="font-semibold text-primary">Next.js</span>,{' '}
                  <span className="font-semibold text-primary">TypeScript</span>,{' '}
                  <span className="font-semibold text-primary">Tailwind CSS</span>, and{' '}
                  <span className="font-semibold text-primary">Prisma ORM</span>. I enjoy creating
                  websites and applications that look amazing and work smoothly.
                </p>

                {/* Social icons */}
                <div className="flex gap-4">
                  {[
                    { Icon: FaGithub, href: 'https://github.com/SadiaAfrinMim', label: 'GitHub' },
                    { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/sadia-afrin-mim-5198121b0/', label: 'LinkedIn' },
                    { Icon: FaEnvelope, href: 'mailto:sadiaafrinmim660@gmail.com', label: 'Email' },
                  ].map(({ Icon, href, label }, i) => (
                    <a
                      key={i}
                      target="_blank"
                      rel="noreferrer"
                      href={href}
                      aria-label={label}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="relative text-2xl text-primary border-2 border-primary/30 rounded-full p-3 transform transition-all duration-300 group-hover:scale-110 group-hover:border-transparent group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary">
                        <Icon />
                      </div>
                    </a>
                  ))}
                </div>

                {/* Resume download button */}
                <div className="pt-4 flex gap-4">
                  <a href={resumeLink} download="Sadia_Afrin_Mim_Resume.pdf">
                    <button className="group relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 inline-flex items-center gap-2">
                      <span className="relative z-10 flex items-center gap-2">
                        Download Resume
                        <IoCloudDownload className="text-xl group-hover:animate-bounce" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </a>
                  
                  <a href={resumeViewLink} target="_blank" rel="noopener noreferrer">
                    <button className="group relative overflow-hidden border-2 border-primary text-primary font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 inline-flex items-center gap-2 bg-transparent hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white">
                      <span className="relative z-10 flex items-center gap-2">
                        View Resume
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column – 3D Computer with floating tech icons */}
          <div className="lg:flex-1 flex items-center justify-center h-96 lg:h-[500px] relative">
            {/* Floating tech icons around the computer */}
            {techIcons.map(({ Icon, label, color }, index) => (
              <div
                key={label}
                className={`absolute ${color} text-4xl`}
                style={{
                  left: `${15 + index * 12}%`,
                  top: `${10 + index * 10}%`,
                  animation: `float-${index + 1} 8s ease-in-out infinite`,
                  filter: 'drop-shadow(0 0 10px currentColor)',
                  zIndex: 10,
                }}
              >
                <Icon />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-base-content/70 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}

            {/* Main computer canvas */}
            <div className="relative w-full h-full animate-float">
              {/* Glow behind the canvas */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full">
                <ComputersCanvas />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(3deg); }
        }
        @keyframes float-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        @keyframes float-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(4deg); }
        }
        
        .animate-float-1 { animation: float-1 6s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 7s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 8s ease-in-out infinite; }
        .animate-float-4 { animation: float-4 5s ease-in-out infinite; }
        .animate-float-5 { animation: float-5 9s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Banner;