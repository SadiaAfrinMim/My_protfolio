import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X, Sun, Moon, ChevronRight, Calendar, Tag, Code, Database, Globe } from 'lucide-react';

const projects = [
  {
    "id": 1,
    "title": "AI-Based Product Suggestion System",
    "shortDesc": "AI-driven platform for personalized product recommendations.",
    "fullDesc": "Built an AI-driven platform that analyzes user preferences and behavior to suggest relevant products. Integrated machine learning-based recommendation logic with a Next.js frontend and Prisma-managed database. Designed a clean, responsive UI with seamless API communication between frontend and backend.",
    "liveLink": "https://ai-project-flax-ten.vercel.app/",
    "githubFront": "https://github.com/SadiaAfrinMim/AI-driven-project-Frontend",
    "githubBack": "https://github.com/SadiaAfrinMim/ai-driven-backend",
    "features": [
      "AI-driven product recommendations",
      "User preference & behavior analysis",
      "Machine learning recommendation logic",
      "Seamless API communication",
      "Clean responsive UI/UX"
    ],
    "tech": ["Next.js", "PostgreSQL", "Prisma ORM", "Python", "TensorFlow"],
    "category": "E-commerce",
    "color": "from-purple-500 to-pink-400",
    "icon": "🤖",
    "year": "2024",
    "frontendTech": "Next.js, Tailwind CSS",
    "backendTech": "Node.js, Express, PostgreSQL, Prisma"
  },
  {
    "id": 2,
    "title": "Urban Farming News Platform",
    "shortDesc": "Full-stack urban farming news platform.",
    "fullDesc": "Developed a full-stack urban farming news platform with real-time content publishing and filtering. Implemented structured database management using PostgreSQL and Prisma ORM for efficient data handling. Independently designed and delivered the complete system from concept to deployment.",
    "liveLink": "https://urban-farming-sable.vercel.app/",
    "githubFront": "https://github.com/SadiaAfrinMim/urban-farming-frontend",
    "githubBack": "https://github.com/SadiaAfrinMim/urban-farming",
    "features": [
      "Real-time content publishing",
      "Advanced content filtering",
      "PostgreSQL database management",
      "Prisma ORM integration",
      "End-to-end system design & deployment"
    ],
    "tech": ["Next.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS"],
    "category": "Agriculture",
    "color": "from-green-500 to-emerald-400",
    "icon": "🌱",
    "year": "2024",
    "frontendTech": "Next.js, Tailwind CSS, Axios",
    "backendTech": "Node.js, Express, PostgreSQL, Prisma"
  },
  {
    "id": 3,
    "title": "News Portal",
    "shortDesc": "Full‑stack news platform with admin management.",
    "fullDesc": "A modern news platform where users can read, comment, and bookmark articles. Admins have full control over content management with a rich text editor.",
    "liveLink": "https://simple-project-c9ba2.web.app/",
    "githubFront": "https://github.com/SadiaAfrinMim/NewsDaily-full-stack-website",
    "githubBack": "https://github.com/SadiaAfrinMim/NewsDaily-full-stack-website-server",
    "features": [
      "User registration & profiles",
      "Article creation with rich editor",
      "Comment & like system",
      "Bookmark favorite articles",
      "Category-based filtering",
    ],
    "tech": ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    "category": "Media",
    "color": "from-orange-500 to-red-400",
    "icon": "📰",
    "year": "2024",
    "frontendTech": "React.js, Firebase, Tailwind CSS",
    "backendTech": "Node.js, Express, MongoDB, JWT"
  },
];

// Modal Component
const Modal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');

  if (!project) return null;

   return (
     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
       {/* Backdrop */}
       <div className="absolute inset-0 bg-base-content/10 backdrop-blur-sm" onClick={onClose} />
       
       {/* Modal Content */}
       <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-base-100 shadow-2xl animate-slideUp">
         {/* Close Button */}
         <button
           onClick={onClose}
           className="absolute top-4 right-4 z-10 p-2 rounded-full bg-base-content/10 hover:bg-base-content/20 transition-all text-base-content"
         >
           <X size={24} />
         </button>

         {/* Modal Header with Gradient */}
         <div className={`relative h-56 bg-gradient-to-r ${project.color} rounded-t-2xl`}>
           <div className="absolute inset-0 bg-base-content/10 rounded-t-2xl" />
           <div className="absolute bottom-4 left-6 text-base-content">
             <div className="text-5xl mb-2">{project.icon}</div>
             <h2 className="text-3xl font-bold">{project.title}</h2>
             <div className="flex gap-3 mt-2">
               <span className="text-sm bg-base-content/10 px-3 py-1 rounded-full">{project.category}</span>
               <span className="text-sm bg-base-content/10 px-3 py-1 rounded-full">{project.year}</span>
             </div>
           </div>
         </div>

         {/* Modal Body */}
         <div className="p-6">
           {/* Tab Navigation */}
           <div className="flex gap-4 border-b border-base-content/10 mb-6">
             {['details', 'features', 'tech', 'links'].map((tab) => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`px-4 py-2 font-semibold capitalize transition-all ${
                   activeTab === tab
                     ? `text-transparent bg-clip-text bg-gradient-to-r ${project.color} border-b-2 border-purple-500`
                     : 'text-base-content/60 hover:text-base-content'
                 }`}
               >
                 {tab === 'links' ? '🔗 Links' : tab}
               </button>
             ))}
           </div>

           {/* Tab Content */}
           <div className="min-h-[300px]">
             {activeTab === 'details' && (
               <div className="space-y-4">
                 <p className="text-base-content/60 leading-relaxed">{project.fullDesc}</p>
                 <div className="grid grid-cols-2 gap-4 mt-4">
                   <div className="flex items-center gap-2 text-base-content/60">
                     <Calendar size={18} className="text-purple-500" />
                     <span>Completed: {project.year}</span>
                   </div>
                   <div className="flex items-center gap-2 text-base-content/60">
                     <Tag size={18} className="text-purple-500" />
                     <span>{project.category}</span>
                   </div>
                 </div>
                 
                 {/* Tech Details */}
                 <div className="mt-4 p-4 bg-base-content/5 rounded-xl">
                   <h4 className="font-semibold text-base-content/80 mb-3">🛠️ Technology Stack</h4>
                   <div className="space-y-2">
                     <div className="flex items-start gap-2">
                       <Code size={16} className="text-blue-500 mt-0.5" />
                       <div>
                         <span className="font-medium text-base-content/70">Frontend:</span>
                         <span className="text-base-content/60 ml-2">{project.frontendTech}</span>
                       </div>
                     </div>
                     <div className="flex items-start gap-2">
                       <Database size={16} className="text-green-500 mt-0.5" />
                       <div>
                         <span className="font-medium text-base-content/70">Backend:</span>
                         <span className="text-base-content/60 ml-2">{project.backendTech}</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )}

             {activeTab === 'features' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 {project.features.map((feature, idx) => (
                   <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-base-content/5">
                     <ChevronRight size={16} className="text-green-500" />
                     <span className="text-base-content/70">{feature}</span>
                   </div>
                 ))}
               </div>
             )}

             {activeTab === 'tech' && (
               <div>
                 <div className="mb-6">
                   <h4 className="font-semibold text-base-content/80 mb-3 flex items-center gap-2">
                     <Code size={18} className="text-blue-500" />
                     Frontend Technologies
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {project.frontendTech.split(', ').map((tech, idx) => (
                       <span key={idx} className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-medium text-sm">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
                 <div>
                   <h4 className="font-semibold text-base-content/80 mb-3 flex items-center gap-2">
                     <Database size={18} className="text-green-500" />
                     Backend Technologies
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {project.backendTech.split(', ').map((tech, idx) => (
                       <span key={idx} className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 font-medium text-sm">
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             )}

             {activeTab === 'links' && (
               <div className="space-y-4">
                 <div className="p-4 bg-blue-50 rounded-xl">
                   <h4 className="font-semibold text-base-content/80 mb-3 flex items-center gap-2">
                     <Globe size={18} className="text-blue-500" />
                     Live Demo
                   </h4>
                   <a
                     href={project.liveLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                   >
                     {project.liveLink}
                     <ExternalLink size={14} />
                   </a>
                 </div>

                 <div className="p-4 bg-base-content/5 rounded-xl">
                   <h4 className="font-semibold text-base-content/80 mb-3 flex items-center gap-2">
                     <Code size={18} className="text-purple-500" />
                     Frontend Repository
                   </h4>
                   <a
                     href={project.githubFront}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
                   >
                     <Github size={16} />
                     {project.githubFront}
                   </a>
                 </div>

                 <div className="p-4 bg-base-content/5 rounded-xl">
                   <h4 className="font-semibold text-base-content/80 mb-3 flex items-center gap-2">
                     <Database size={18} className="text-green-500" />
                     Backend Repository
                   </h4>
                   <a
                     href={project.githubBack}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                   >
                     <Github size={16} />
                     {project.githubBack}
                   </a>
                 </div>
               </div>
             )}
          </div>

           {/* Action Buttons */}
           <div className="flex gap-4 mt-6 pt-6 border-t border-base-content/10">
             <a
               href={project.liveLink}
               target="_blank"
               rel="noopener noreferrer"
               className={`flex-1 bg-gradient-to-r ${project.color} text-white px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-105`}
             >
               <ExternalLink size={18} />
               Live Demo
             </a>
             <a
               href={project.githubFront}
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 bg-base-content/10 text-base-content px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-base-content/20 transition-all hover:scale-105"
             >
               <Code size={18} />
               Frontend
             </a>
             <a
               href={project.githubBack}
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 bg-base-content/10 text-base-content px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-base-content/20 transition-all hover:scale-105"
             >
               <Database size={18} />
               Backend
             </a>
           </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onViewDetails }) => {
  const [iframeError, setIframeError] = useState(false);

   return (
     <div className="group relative bg-base-100 dark:bg-base-content/900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
       
       {/* Live Website Preview - TOP SECTION */}
       <div className="relative h-56 bg-base-content/50 dark:bg-base-content/600 overflow-hidden flex-shrink-0 cursor-pointer" onClick={() => onViewDetails(project)}>
        {!iframeError ? (
          <iframe
            src={project.liveLink}
            title={`${project.title} preview`}
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            style={{
              pointerEvents: 'none'
            }}
            onError={() => setIframeError(true)}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
         ) : (
           <div className="w-full h-full bg-gradient-to-br from-base-content to-base-content/80 dark:from-base-content/800 dark:to-base-content/700 flex flex-col items-center justify-center">
             <span className="text-6xl mb-2">{project.icon}</span>
             <p className="text-base-content/70 dark:text-base-content/300 text-sm">Preview not available</p>
           </div>
         )}
        
         {/* Hover Overlay */}
         <div className="absolute inset-0 bg-base-content/10 dark:bg-base-content/800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
           <div className="text-center text-base-content dark:text-base-content/300">
             <div className="bg-base-content/20 dark:bg-base-content/600 backdrop-blur-sm rounded-full p-3 mb-2">
               <ExternalLink size={24} />
             </div>
             <p className="font-semibold">Click to view details</p>
           </div>
         </div>

        {/* Category Badge on Image */}
        <div className="absolute top-3 right-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white shadow-lg`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section - BOTTOM SECTION */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title & Icon */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">{project.icon}</span>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {project.title}
          </h3>
        </div>

         {/* Short Description */}
         <p className="text-base-content/60 mb-3 text-sm line-clamp-2">
           {project.shortDesc}
         </p>

        {/* Features Preview */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {project.features.slice(0, 2).map((feature, idx) => (
              <span key={idx} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full">
                {feature.substring(0, 20)}...
              </span>
            ))}
            {project.features.length > 2 && (
              <span className="text-xs px-2 py-0.5 text-purple-500">
                +{project.features.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs px-2 py-1 text-purple-500">
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex-1 bg-gradient-to-r ${project.color} text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-1 hover:opacity-90 transition-all hover:scale-105`}
          >
            <ExternalLink size={14} />
            Live
          </a>
           <button
             onClick={() => onViewDetails(project)}
             className="flex-1 bg-base-content/10 text-base-content px-3 py-2 rounded-lg text-sm font-medium hover:bg-base-content/20 transition-all hover:scale-105"
           >
             Details
           </button>
          <div className="relative group/btn">
            <button className="px-3 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-1 hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors">
              <Github size={14} />
              Code
            </button>
            <div className="absolute bottom-full left-0 mb-2 hidden group-hover/btn:block bg-gray-800 dark:bg-gray-900 text-white text-xs rounded-lg overflow-hidden min-w-[180px] z-10 shadow-xl">
              <a 
                href={project.githubFront} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 transition"
              >
                <Code size={12} />
                Frontend Repository
              </a>
              <a 
                href={project.githubBack} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-700 dark:hover:bg-gray-800 transition border-t border-gray-700"
              >
                <Database size={12} />
                Backend Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// MAIN PAGE COMPONENT
const ProjectsPage = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-4">
            <span className="text-7xl">🚀</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building innovative solutions with modern web technologies
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-12 mt-10">
             <div className="text-center">
               <div className="text-4xl font-bold text-base-content">{projects.length}</div>
               <div className="text-sm text-base-content/60 mt-1">Projects</div>
             </div>
             <div className="text-center">
               <div className="text-4xl font-bold text-base-content">15+</div>
               <div className="text-sm text-base-content/60 mt-1">Technologies</div>
             </div>
             <div className="text-center">
               <div className="text-4xl font-bold text-base-content">100%</div>
               <div className="text-sm text-base-content/60 mt-1">Satisfaction</div>
             </div>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 z-50 relative w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-secondary p-0.5 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Toggle theme"
        >
          <div className="w-full h-full rounded-xl bg-base-100 flex items-center justify-center overflow-hidden">
            <div className={`transform transition-transform duration-500 ${
              theme === "light" ? "rotate-0" : "rotate-180"
            }`}>
              {theme === "light" ? (
                <Moon className="text-xl text-primary group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <Sun className="text-xl text-primary group-hover:rotate-90 transition-transform duration-300" />
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onViewDetails={setSelectedProject} />
          ))}
        </div>
      </div>

       
      {/* Modal */}
      {selectedProject && (
        <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default ProjectsPage;