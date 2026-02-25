import React, { useState, useEffect, useRef } from 'react';
import myImg from '../../assets/photo_6242537220602971162_x.jpg';
import { Typewriter } from 'react-simple-typewriter';
import CodeCanvas from '../../Component/Code';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [isTyping, setIsTyping] = useState(false);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-gradient-to-b from-base-100 to-base-200"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Let Me Introduce Myself
            </span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Introduction */}
          <div
            className={`w-full lg:w-7/12 transform transition-all duration-1000 delay-200 ${
              inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="space-y-6">
              {/* Available For */}
              <div className="inline-block">
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  📌 I'm Available For
                </span>
              </div>

              {/* Typewriter Title */}
             <div>
                <h3
                  className={`text-3xl md:text-4xl font-bold transition-all duration-300 ${
                    isTyping
                      ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent scale-105'
                      : 'text-base-content/80'
                  }`}
                >
                  <Typewriter
                    words={[
                      "I'm a Full Stack Developer",
                      "I'm a MERN & Next.js Specialist",
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
                </h3>
              </div>


              {/* Description */}
            <div className="text-base-content/70 leading-relaxed space-y-4 text-lg">
                <p>
                  I fell in love with programming and I have at least learnt
                  something, I think… <span className="text-4xl">🤷‍♂️</span>
                </p>
                <p>
                  I am fluent in classics like{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                    HTML, CSS, and Go.
                  </span>
                </p>
                <p>
                  My field of interest includes building new{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                    Web Technologies and Products
                  </span>{' '}
                  and exploring areas related to{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                    Websites
                  </span>.
                </p>
                <p>
                  I specialize in modern development with{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                    React, Next.js, Node.js
                  </span>{' '}
                  and databases like{' '}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
                    MongoDB (using Mongoose) and Prisma ORM
                  </span>. I enjoy building full‑stack applications that are fast, scalable, and user‑friendly.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: CodeCanvas + Profile Image */}
          <div
  className={`w-full lg:w-5/12 transform transition-all duration-1000 delay-400 ${
    inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
  }`}
>
  <div className="flex flex-col items-center gap-8">
    {/* Thinking CodeCanvas (Laptop) */}
      <div className="relative w-24 h-24 bg-base-100 rounded-2xl overflow-hidden m-0.5 shadow-2xl animate-rotate-slow">
        <CodeCanvas />

        {/* Thinking scan line overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-scan"></div>
        </div>

        {/* Bouncing dots (thinking indicator) */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>

    {/* Profile Image with Frame */}
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
        <img
          src={myImg}
          alt="Sadia Afrin Mim"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Decorative rings */}
      <div className="absolute -top-4 -left-4 w-72 h-72 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
      <div className="absolute -bottom-4 -right-4 w-80 h-80 border-2 border-secondary/20 rounded-full animate-spin-slower"></div>
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default About;