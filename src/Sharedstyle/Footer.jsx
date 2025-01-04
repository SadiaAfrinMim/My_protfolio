import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          
          {/* Designed and Developed by */}
          <div>
            <h6 className="text-lg font-bold ">
              Designed and Developed by{' '}
              <span className="text-purple-600">Sadia Afrin Mim</span>
            </h6>
          </div>

          {/* Copyright Section */}
          <div>
            <h6 className="text-lg font-bold">
              Copyright &copy; 2024{' '}
              <span className="text-purple-600 text-xl">SAM</span>
            </h6>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-4 sm:mt-0">
            <a
              target="_blank"
              href="https://github.com/SadiaAfrinMim"
              className="text-purple-600 text-xl hover:text-black"
            >
              <FaGithub className='w-8 h-8 p-1 border  border-purple-600 hover:border-black  rounded-full text-xl'/>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sadia-afrin-mim-5198121b0/"
              className="text-purple-600 
               hover:text-black"
            >
              <FaLinkedin className='w-8 h-8 p-1 border  border-purple-600 hover:border-black  rounded-full text-xl'/>
            </a>
            <a
              target="_blank"
              href="mailto:sadiaafrinmim660@gmail.com"
              className="text-purple-600 text-xl hover:text-black"
            >
              <FaEnvelope className='w-8 h-8 p-1 border  border-purple-600 hover:border-black rounded-full text-xl'/>
            </a>
            <a
              href="tel:+01782759884"
              target="_blank"
              className="text-purple-600 text-xl hover:text-black"
            >
              <FaPhoneAlt className='w-8 h-8 hover:border-black  p-1 border  border-purple-600 rounded-full text-xl'/>
            </a>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
