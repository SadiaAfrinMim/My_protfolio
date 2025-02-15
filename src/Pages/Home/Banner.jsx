import React, { useState } from 'react';
import ComputersCanvas from '../../Component/Computer';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../../src/assets/SADIA AFRIN MIM cv.pdf';
import '../../index.css'
import { IoCloudDownload } from "react-icons/io5";


const Banner = () => {
    const [isTyping, setIsTyping] = useState(false);
    return (
        <div className="py-10 mx-auto">
            
            <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-10">
           
                {/* Left Section */}
            <div className='lg:flex-1 flex flex-col'>
            <div className='flex justify-start items-start gap-4'>
                 <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
              <div className="lg:flex-1 flex flex-col space-y-6">
               
               <div>
                   <h3 className="text-4xl font-bold flex items-center">
                       Hi There!
                       <img
                           className="w-12 animate-pulse ml-2"
                           src="https://img.icons8.com/?size=100&id=1H52efUsDX7A&format=png&color=000000"
                           alt="wave"
                       />
                   </h3>
                   <h1 className="py-3 font-bold text-purple-600 text-3xl">
                       I'M SADIA AFRIN MIM
                   </h1>
               </div>
               <div>
               <h3
  className={`md:text-4xl text-xl font-bold transition-colors duration-300 ${
    isTyping ? "bg-primary/20 px-2 py-1 inline-block rounded-full" : ""
  }`}
>
  <Typewriter
    words={["I'm a MERN Stack Developer", "I'm a Full Stack Developer"]}
    loop={5}
    cursor
    cursorStyle="_"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    onType={() => setIsTyping(true)}
    onEnd={() => setIsTyping(false)}
  />
</h3>

               </div>
               <p className="text-xl">
                   I'm a Web Developer who specializes in the MERN stack, which stands for
                   MongoDB, Express.js, React.js, and Node.js. I enjoy creating websites and
                   applications that look amazing and work smoothly.
               </p>
               {/* Social Icons */}
               <div className="flex gap-6">
                   <a
                       target="_blank"
                       rel="noreferrer"
                       href="https://github.com/SadiaAfrinMim"
                       className="text-purple-600 text-3xl hover:text-black border border-purple-700 rounded-full p-3 transform hover:scale-125 transition-all duration-300"
                   >
                       <FaGithub />
                   </a>
                   <a
                       target="_blank"
                       rel="noreferrer"
                       href="https://www.linkedin.com/in/sadia-afrin-mim-5198121b0/"
                       className="text-purple-600 text-3xl hover:text-black border border-purple-700 rounded-full p-3 transform hover:scale-125 transition-all duration-300"
                   >
                       <FaLinkedin />
                   </a>
                   <a
                       target="_blank"
                       rel="noreferrer"
                       href="mailto:sadiaafrinmim660@gmail.com"
                       className="text-purple-600 text-3xl hover:text-black border border-purple-700 rounded-full p-3 transform hover:scale-125 transition-all duration-300"
                   >
                       <FaEnvelope />
                   </a>
               </div>
               {/* Resume Download */}
               <div className="mt-6">
                   <a href={resume} download="">
                       <button className="hover:bg-purple-600 border border-purple-800 font-bold py-2 px-5 rounded-full transition duration-300 transform text-purple-700 hover:scale-105 inline-flex items-center justify-center gap-1">
                           Download Resume <IoCloudDownload className='text-2xl font-bold'/>
                       </button>
                   </a>
               </div>
           </div>
              </div>
            </div>

                {/* Right Section */}
                <div className="lg:flex-1 flex items-center justify-center h-96 mt-8 lg:mt-0">
                    <ComputersCanvas />
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;
