import React, { useState } from 'react';
import ComputersCanvas from '../../Component/Computer';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import resume from '../../../src/assets/SADIA AFRIN MIM cv.pdf'

const Banner = () => {
    const [isTyping, setIsTyping] = useState(false);
    return (
        <div className='py-10 mx-auto'>
            <div className="lg:flex items-center justify-between">
                <div className="flex-1 mx-auto">
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-4xl font-bold flex">Hi There!
                            <img className='w-12 animate-pulse' src="https://img.icons8.com/?size=100&id=1H52efUsDX7A&format=png&color=000000" alt="" />
                        </h3>
                        <h1 className="py-3 font-bold text-purple-600 text-3xl">I'M SADIA AFRIN MIM</h1>
                        <div className="mt-10">
                            <h3
                                className={`md:text-4xl text-xl font-bold ${
                                    isTyping ? "bg-purple-300 px-2 py-1 inline-block rounded-full" : ""
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
                        <h4 className="text-xl">
                        "I'm a Web Developer who specializes in the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. I enjoy creating websites and applications that look amazing and work smoothly."
                        </h4>
                        <div className="flex gap-6 mt-6 sm:mt-0 ">
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
                                className="text-purple-600 text-3xl hover:text-black border border-purple-700  rounded-full p-3 transform hover:scale-125 transition-all duration-300"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="mailto:sadiaafrinmim660@gmail.com"
                                className="text-purple-600 text-3xl hover:text-black border border-purple-700  rounded-full p-3 transform hover:scale-125 transition-all duration-300"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                        <div className="mt-8 ">
                        <a href={resume} download=''>
                        <button className="hover:bg-purple-600 border-outline border border-purple-800 font-bold py-2 px-5 rounded-full transition duration-300 transform text-purple-700 hover:scale-105 ">
                                Download Resume
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="h-96 flex-1 mx-auto mt-8 md:mt-0">
                    <ComputersCanvas />
                </div>
            </div>
            <div className="w-full h-14 mt-8 bg-purple-700"></div>
        </div>
    );
};

export default Banner;
