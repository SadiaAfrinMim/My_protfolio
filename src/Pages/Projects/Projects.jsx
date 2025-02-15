import React from 'react';
import { FaGithub } from 'react-icons/fa';
import img1 from '../../assets/react-icon-256x228-97ltgbl1.png';
import img2 from '../../assets/react-router (1).png';
import img3 from '../../assets/Screenshot_116.png';
import img4 from '../../assets/firebase.png';
import img5 from '../../assets/logo-mongodb-png-mongo-db-shaped-sticker-650.png';
import project1 from '../../assets/Screenshot_118.png';
import project2 from '../../assets/Screenshot_119.png';
import project3 from '../../assets/Screenshot_120.png';
import project4 from '../../assets/Screenshot_137.png'

const projects = [
  {
    id: 1,
    title: 'Assignment Submission Website',
    description:
      "CollabStudy is likely an education-based platform where students can learn together, collaborate on various topics, and share study materials. It may offer online courses, project-based learning, coding problem-solving, and group discussions.",
    liveLink: 'https://bejewelled-treacle-199141.netlify.app/',
    githubLink: 'https://github.com/SadiaAfrinMim/Assinment-_submission_prioject',
    imgSrc: project1,
  },
  {
    id: 2,
    title: 'Funding Website',
    description:
      'SadiaFund is a funding platform designed to support various causes, projects, and individuals in need of financial assistance. It serves as a crowdfunding website where users can create campaigns to raise funds for personal, charitable, or business-related initiatives.',
    liveLink: 'https://luminous-praline-615362.netlify.app/',
    githubLink: 'https://github.com/SadiaAfrinMim/funding_project_10',
    imgSrc: project2,
  },
  {
    id: 3,
    title: 'Cloth Donation Website',
    description:
      'Clothe the Needy 👚 is a compassionate initiative that connects generous donors with individuals in need, ensuring that clothing reaches those who require it most. The platform raises awareness about clothing insecurity and provides a simple yet impactful way for people to contribute to a meaningful cause.',
    liveLink: 'https://incredible-sable-27d213.netlify.app/donation-campaigns',
    githubLink: 'https://github.com/SadiaAfrinMim/Cloth_Donation_project',
    imgSrc: project3,
  },
  {
    id: 3,
    title: 'NewsSite Website',
    description:
      'Welcome to NewsSite, a platform where users can view, manage, and interact with news articles. As an admin, you can manage users, articles, publishers, and more.',
    liveLink: 'https://simple-project-c9ba2.web.app/',
    githubLink: 'https://github.com/SadiaAfrinMim/NewsDaily-full-stack-website',
    imgSrc: project4,
  },
];

const techStackIcons = [img1, img2, img3, img4, img5];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <div className="text-center space-y-8">
        <h1 className="text-4xl font-bold">My Projects</h1>
        <h2 className="pb-12 lg:w-9/12 mx-auto text-xl">
          The following projects showcase my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos.
        </h2>
      </div>
      <div id="project" className="grid gap-4 grid-cols-1  ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg flex  relative border-2 space-y-4 shadow-lg"
          >
            <img className="rounded-t-lg w-full flex-1  mx-auto" src={project.imgSrc} alt={project.title} />
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
              <FaGithub className="text-purple-700 w-6 h-6" />
            </div>
            <div className="space-y-4 flex-1 flex-col grow p-4">
              <h4 className="text-2xl font-bold">{project.title}</h4>
              <p>{project.description}</p>
              <p className="font-bold text-xl">Tech Used:</p>
              <div className="flex gap-2">
                {techStackIcons.map((icon, index) => (
                  <img
                    key={index}
                    className="w-12 h-10 border rounded-lg shadow-md"
                    src={icon}
                    alt={`Tech Icon ${index}`}
                  />
                ))}
              </div>
              <div className="flex grow items-end pb-4 justify-between">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline">Live Preview</button>
                </a>
                <div>
                  <img
                    className="w-8 h-8 animate-ping mx-auto duration-3000"
                    src="https://img.icons8.com/?size=100&id=IEHzNvjQmNPF&format=png&color=7950F2"
                    alt="Ping Icon"
                  />
                </div>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-outline">View Github</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
