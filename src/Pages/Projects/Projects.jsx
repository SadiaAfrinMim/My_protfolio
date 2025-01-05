import React from 'react';
import { FaGithub } from 'react-icons/fa';
import img1 from '../../assets/react-icon-256x228-97ltgbl1.png'
import img2 from '../../assets/react-router (1).png'
import img3 from '../../assets/Screenshot_116.png'
import img4 from '../../assets/firebase.png'
import img5 from '../../assets/logo-mongodb-png-mongo-db-shaped-sticker-650.png'
import { div } from 'framer-motion/client';
import project1 from '../../assets/Screenshot_118.png'
import project2 from '../../assets/Screenshot_119.png'
import project3 from '../../assets/Screenshot_120.png'

const Projects = () => {
    return (
       <div >
       <div className='text-center space-y-8'>
       <h1 className='text-4xl  font-bold'>My Project</h1>
        <h2 className='pb-12 lg:w-9/12 mx-auto text-xl'>
Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</h2>
       </div>
         <div id='project' className="grid gap-4 grid-cols-1 md:grid-cols-3">
            <div className="rounded-lg relative border-2 space-y-4 shadow-lg">
                <img
                    className="rounded-t-lg h-64 mx-auto"
                    src={project1}
                    alt="Project"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <FaGithub className="text-purple-700 w-6 h-6" />
                </div>
                <div className="space-y-4 p-4">
                    <h4 className="text-2xl font-bold">Assinment submission website</h4>
                    <p>
                        It's a Full Stack Job Portal Website. You can login and logout to our website and also post and read articles. You can create and apply for jobs. For full info, visit GitHub.
                    </p>
                    <p className='font-bold text-xl'>Tech Used :-</p>

                    <div className='flex gap-2'>
                        
                        <img className='w-12 h-10 border rounded-lg shadow-md' src={img1} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img2} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img3} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img4} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img5} alt="" srcset="" />
                    </div>
                    <div className="flex pb-4 justify-between items-center">
                       <a href="https://simple-project-c9ba2.web.app/" target="_blank" rel="noopener noreferrer">
                       <button className="btn btn-outline ">Live Preview</button></a>
                        <div>
                            <img
                                className="w-8 h-8 animate-ping mx-auto duration-3000"
                                src="https://img.icons8.com/?size=100&id=IEHzNvjQmNPF&format=png&color=7950F2"
                                alt="Pinging Icon"
                            />
                        </div>
                        <a href="https://github.com/SadiaAfrinMim/Assinment-_submission_prioject" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline ">View Github</button></a>
                    </div>
                </div>
            </div>

            {/* 2nd project */}
            <div className="rounded-lg relative border-2 space-y-4 shadow-lg">
                <img
                    className="rounded-t-lg h-64 mx-auto"
                    src={project2}
                    alt="Project"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <FaGithub className="text-purple-700 w-6 h-6" />
                </div>
                <div className="space-y-4 p-4">
                    <h4 className="text-2xl font-bold">Funding Website</h4>
                    <p>
                    SadiaFund is a modern and user-friendly crowdfunding platform that enables users to create, manage, and support campaigns for personal, creative, or startup initiatives. Designed with simplicity and efficiency in mind.For full info, visit GitHub.
                    </p>
                    <p className='font-bold text-xl'>Tech Used :-</p>

                    <div className='flex gap-2'>
                        
                        <img className='w-12 h-10 border rounded-lg shadow-md' src={img1} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img2} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img3} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img4} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img5} alt="" srcset="" />
                    </div>
                    <div className="flex pb-4 justify-between items-center">
                        <a href="https://luminous-praline-615362.netlify.app/">
                        <button className="btn btn-outline ">Live Preview</button></a>
                        <div>
                            <img
                                className="w-8 h-8 animate-ping mx-auto duration-3000"
                                src="https://img.icons8.com/?size=100&id=IEHzNvjQmNPF&format=png&color=7950F2"
                                alt="Pinging Icon"
                            />
                        </div>
                        <a href="https://github.com/SadiaAfrinMim/funding_project_10" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-outline">View Github</button>
</a>

                    </div>
                </div>
            </div>
            {/* 3rd project */}
            <div className="rounded-lg relative border-2 space-y-4 shadow-lg">
                <img
                    className="rounded-t-lg h-64 mx-auto"
                    src={project3}
                    alt="Project"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <FaGithub className="text-purple-700 w-6 h-6" />
                </div>
                <div className="space-y-4 p-4">
                    <h4 className="text-2xl font-bold">Cloth Donation Website</h4>
                    <p>
                    Clothe the Needy 👚 is a platform designed to connect donors with those in need. Whether you want to donate clothes or raise awareness about a cause, this application provides a seamless and intuitive experience. For full info, visit GitHub.
                    </p>
                    <p className='font-bold text-xl'>Tech Used :-</p>

                    <div className='flex gap-2'>
                        
                        <img className='w-12 h-10 border rounded-lg shadow-md' src={img1} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img2} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img3} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img4} alt="" srcset="" />
                        <img className='w-12 h-10 border  rounded-lg shadow-md' src={img5} alt="" srcset="" />
                    </div>
                    <div className="flex pb-4 justify-between items-center">
                        <a href="https://incredible-sable-27d213.netlify.app/donation-campaigns" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-outline ">Live Preview</button></a>
                        <div>
                            <img
                                className="w-8 h-8 animate-ping mx-auto duration-3000"
                                src="https://img.icons8.com/?size=100&id=IEHzNvjQmNPF&format=png&color=7950F2"
                                alt="Pinging Icon"
                            />
                        </div>
                       <a href="https://github.com/SadiaAfrinMim/Cloth_Donation_project" target="_blank" rel="noopener noreferrer">
                       <button className="btn btn-outline ">View Github</button></a>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Projects;
