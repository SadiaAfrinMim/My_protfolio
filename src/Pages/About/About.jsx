import React, { useState } from 'react';
import myImg from '../../assets/photo_6242537220602971162_x.jpg'
import { Typewriter } from 'react-simple-typewriter';
import CodeCanvas from '../../Component/Code';




const About = () => {
  const [isTyping, setIsTyping] = useState(false);
  return (
    <section id='about' className="container mx-auto my-10 px-4">
      <h2 className="text-center text-4xl  font-bold ">
        Let Me Introduce Myself
      </h2>
      <div className="lg:flex flex-col md:flex-row justify-between items-center">
        {/* Introduction Section */}
        <div className="mb-10 md:mb-0 md:w-5/12">
          <h2 className='font-bold text-xl'>I'm Available For</h2>

          <div className="my-4">
            <h3
              className={`text-2xl font-bold ${isTyping ? " text-purple-700 inline-block rounded" : ""
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
                onType={() => setIsTyping(true)} // Set typing state to true
                onEnd={() => setIsTyping(false)} // Reset typing state after the loop ends
              />
            </h3>
          </div>
          <div className=''>
            <CodeCanvas></CodeCanvas>
          </div>
       

          <h4 className="text-lg leading-relaxed">
            I fell in love with programming and I have at least learnt
            something, I think… <span className='text-4xl'>🤷‍♂️</span>
            <br /> <br />
            I am fluent in classics like{" "}
            <span className="text-purple-500 font-bold">HTML, CSS, and Go.</span>
            <br /> <br />
            My field of interest includes building new{" "}
            <span className="text-purple-500 font-bold">
              Web Technologies and Products
            </span>{" "}
            and exploring areas related to{" "}
            <span className="text-purple-500 font-bold">Websites</span>.
            <br />
            <br />
            Whenever possible, I also apply my passion for developing products
            with{" "}
            <span className="text-purple-500 font-bold">Node.js</span> and
            modern{" "}
            <span className="text-purple-500 font-bold">
              JavaScript libraries and frameworks like React.js and Next.js
            </span>
            .
          </h4>
        </div>
        <div className='group'>
          <div>
            <img className='rounded-full group-hover:scale-110 
                transition border-b-8 border-t-8 border-purple-700' src={myImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
