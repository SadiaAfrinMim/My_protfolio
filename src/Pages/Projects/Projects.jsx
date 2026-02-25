import React, { useEffect, useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaHeart, FaCode, FaServer, FaCodeBranch, FaArrowRight, FaEye } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import img1 from '../../assets/react-icon-256x228-97ltgbl1.png';
import img2 from '../../assets/react-router (1).png';
import img3 from '../../assets/Screenshot_116.png';
import img4 from '../../assets/firebase.png';
import img5 from '../../assets/logo-mongodb-png-mongo-db-shaped-sticker-650.png';

// ইমেজ ইম্পোর্ট
import assignmentImg from '../../assets/assainment.png';
import fundingImg from '../../assets/sadiafunp.png';
import clothImg from '../../assets/cloth.png';
import newsImg from '../../assets/newssite.png';
import libraryImg from '../../assets/laibary.png';
import marathonImg from '../../assets/merathon.png';

const techStackIcons = [img1, img2, img3, img4, img5];

// অটো স্ক্রলিং ইমেজ কম্পোনেন্ট
const AutoScrollingImage = ({ src, alt }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <div 
      className="relative w-full h-64 md:h-72 overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        animate={{
          y: ['0%', '-100%']
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
        className="relative w-full"
        style={{
          y: isHovering ? '-100%' : '0%'
        }}
      >
        <img src={src} alt={alt} className="w-full h-64 md:h-72 object-cover" />
        <img src={src} alt={`${alt}-2`} className="w-full h-64 md:h-72 object-cover" />
        <img src={src} alt={`${alt}-3`} className="w-full h-64 md:h-72 object-cover" />
      </motion.div>
      
      {/* গ্রেডিয়েন্ট ওভারলে */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
      
      {/* ভিউ ইন্ডিকেটর */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm border border-white/30"
      >
        <FaEye className="inline mr-2" /> Explore
      </motion.div>
      
      {/* স্ক্রল ইন্ডিকেটর */}
      <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full text-white text-xs border border-white/20">
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          ↓
        </motion.span> Auto Scroll
      </div>
    </div>
  );
};

// প্রজেক্ট ডাটা
const projects = [
  {
    id: 1,
    title: 'Assignment Submission',
    shortDesc: 'Collaborative learning platform where students submit assignments and track progress.',
    fullDesc: 'A comprehensive platform where students can collaborate, share study materials, and learn together. Features include user authentication, assignment submission, peer reviews, and progress tracking with real-time notifications.',
    liveLink: 'https://assainment-submission.netlify.app',
    githubFront: 'https://github.com/SadiaAfrinMim/Assinment-_submission_prioject',
    githubBack: 'https://github.com/SadiaAfrinMim/Assinment-_submission_server_side',
    image: assignmentImg,
    features: [
      'User authentication & profiles',
      'Create and join study groups',
      'Assignment submission with deadlines',
      'Peer review system',
      'Progress tracking dashboard',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    category: 'Education',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    title: 'Funding Platform',
    shortDesc: 'Crowdfunding platform for personal and charitable causes.',
    fullDesc: 'A powerful crowdfunding platform where users can create campaigns to raise funds for personal, charitable, or business initiatives. Integrated with Stripe for secure payments and real-time donation tracking.',
    liveLink: 'https://sadiafunding.netlify.app/',
    githubFront: 'https://github.com/SadiaAfrinMim/funding_project_10-frontend',
    githubBack: 'https://github.com/SadiaAfrinMim/funding_project_server_side',
    image: fundingImg,
    features: [
      'Campaign creation & management',
      'Stripe payment integration',
      'Real-time donation tracking',
      'Campaign categories & search',
      'Admin dashboard for approval',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    category: 'Finance',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 3,
    title: 'Cloth Donation',
    shortDesc: 'Connect donors with people in need of clothing.',
    fullDesc: 'A platform that connects donors with individuals in need, ensuring clothing reaches those who require it most. Features location-based matching and donation tracking.',
    liveLink: 'https://incredible-sable-27d213.netlify.app',
    githubFront: 'https://github.com/SadiaAfrinMim/Cloth_Donation_project',
    githubBack: 'https://github.com/SadiaAfrinMim/Cloth_Donation_project',
    image: clothImg,
    features: [
      'Donation campaigns with goals',
      'Request clothing items',
      'Location-based matching',
      'Donation history & receipts',
      'Admin verification panel',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Google Maps'],
    category: 'Social',
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: 4,
    title: 'News Portal',
    shortDesc: 'Full‑stack news platform with admin management.',
    fullDesc: 'A modern news platform where users can read, comment, and bookmark articles. Admins have full control over content management with a rich text editor.',
    liveLink: 'https://simple-project-c9ba2.web.app/',
    githubFront: 'https://github.com/SadiaAfrinMim/NewsDaily-full-stack-website',
    githubBack: 'https://github.com/SadiaAfrinMim/NewsDaily-full-stack-website-server',
    image: newsImg,
    features: [
      'User registration & profiles',
      'Article creation with rich editor',
      'Comment & like system',
      'Bookmark favorite articles',
      'Category-based filtering',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
    category: 'Media',
    color: 'from-orange-500 to-red-400',
  },
  {
    id: 5,
    title: 'Library System',
    shortDesc: 'Complete library management solution.',
    fullDesc: 'A comprehensive Library Management System for librarians to manage books, track issued books, maintain student records, and monitor returns with automated notifications.',
    liveLink: 'https://library-managementsys.netlify.app',
    githubFront: 'https://github.com/SadiaAfrinMim/Library-management-with-Redux',
    githubBack: 'https://github.com/SadiaAfrinMim/Backend_mongoose_typescript_express',
    image: libraryImg,
    features: [
      'Book inventory management',
      'Issue/return tracking',
      'Overdue notifications',
      'Student records',
      'Search & filter books',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Redux'],
    category: 'Management',
    color: 'from-indigo-500 to-purple-400',
  },
  {
    id: 6,
    title: 'Marathon Events',
    shortDesc: 'Marathon registration & event management.',
    fullDesc: 'A platform for organizing marathon events, registering participants, tracking registrations, and processing payments. Includes dashboards for event analytics.',
    liveLink: 'https://merathon-runway.netlify.app',
    githubFront: 'https://github.com/SadiaAfrinMim/Merathon_client_side',
    githubBack: 'https://github.com/SadiaAfrinMim/Merathon_server_side',
    image: marathonImg,
    features: [
      'Event creation & scheduling',
      'Participant registration',
      'Payment processing',
      'Organizer dashboard',
      'Email confirmations',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    category: 'Events',
    color: 'from-pink-500 to-rose-400',
  },
];

// মডার্ন মোডাল
const ModernModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0  backdrop-blur-md"
        />
        
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative   rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-800"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ইমেজ সেকশন */}

          
          <div className="relative h-72 md:h-96 overflow-hidden rounded-t-3xl">
            <AutoScrollingImage src={project.image} alt={project.title} />
            
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-20  backdrop-blur-md hover:bg-black/70  rounded-full p-3 transition-all duration-300 border border-white/30"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-8 z-10">
              <span className={`inline-block px-5 py-2 bg-gradient-to-r ${project.color}  rounded-full text-sm font-semibold shadow-lg mb-3`}>
                {project.category}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold ">{project.title}</h3>
            </div>
          </div>

          {/* কন্টেন্ট সেকশন */}
          <div className="p-8">
            <p className=" text-lg mb-8 leading-relaxed">
              {project.fullDesc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-4  flex items-center gap-2">
                  <span className={`w-1.5 h-6 bg-gradient-to-r ${project.color} rounded-full`}></span>
                  Key Features
                </h4>
                <div className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-2 h-2 mt-2 bg-gradient-to-r ${project.color} rounded-full flex-shrink-0`}></div>
                      <span className="">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className={`w-1.5 h-6 bg-gradient-to-r ${project.color} rounded-full`}></span>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-xl text-sm font-medium shadow-md`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* অ্যাকশন বাটন */}
         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
  {/* লাইভ ডেমো - প্রোজেক্টের নিজস্ব গ্রেডিয়েন্ট */}
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className={`py-4 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base group hover:opacity-90`}
  >
    <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" /> 
    Live Demo
  </motion.a>

  {/* ফ্রন্টএন্ড - পার্পল শেড */}
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={project.githubFront}
    target="_blank"
    rel="noopener noreferrer"
    className="py-4 bg-gradient-to-r from-purple-600 to-purple-800 dark:from-purple-500 dark:to-purple-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base group hover:from-purple-700 hover:to-purple-900 dark:hover:from-purple-400 dark:hover:to-purple-600"
  >
    <FaCodeBranch className="group-hover:rotate-12 transition-transform" /> 
    Frontend
  </motion.a>

  {/* ব্যাকএন্ড - ইন্ডিগো শেড */}
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={project.githubBack}
    target="_blank"
    rel="noopener noreferrer"
    className="py-4 bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-500 dark:to-indigo-700 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base group hover:from-indigo-700 hover:to-indigo-900 dark:hover:from-indigo-400 dark:hover:to-indigo-600"
  >
    <FaServer className="group-hover:scale-110 transition-transform" /> 
    Backend
  </motion.a>
</div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// প্রজেক্ট কার্ড
const ModernProjectCard = ({ project, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -12 }}
        className="group relative rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200 dark:border-gray-800 shadow-lg"
        onClick={() => setIsModalOpen(true)}
      >
        {/* ইমেজ */}
        <div className="relative h-64 overflow-hidden">
          <AutoScrollingImage src={project.image} alt={project.title} />
          
          {/* ক্যাটাগরি */}
          <div className="absolute top-5 left-5 z-10">
            <span className={`px-4 py-1.5 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full shadow-lg`}>
              {project.category}
            </span>
          </div>
        </div>

        {/* কন্টেন্ট */}
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 line-clamp-1">
            {project.title}
          </h3>
          
          <p className="text-sm mb-4 line-clamp-2">
            {project.shortDesc}
          </p>

          {/* টেক স্ট্যাক */}
          <div className="flex items-center gap-2 mb-5">
            {techStackIcons.slice(0, 4).map((icon, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-8 h-8 rounded-xl  p-1.5"
              >
                <img
                  src={icon}
                  alt={`tech-${idx}`}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
            {project.tech.length > 4 && (
              <span className="text-sm font-medium">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* ডিটেলস বাটন */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3.5 bg-gradient-to-r ${project.color} text-white rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn`}
          >
            View Details
            <FaArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      <ModernModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

// ফিল্টার বাটন
const FilterButton = ({ category, active, onClick, color }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${
        active 
          ? `bg-gradient-to-r ${color} text-white shadow-lg` 
          : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {category}
    </motion.button>
  );
};

const Projects = () => {
  const [headerInView, setHeaderInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref: headerRef, inView: headerVisible } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const colors = [
    'from-blue-500 to-cyan-400',
    'from-green-500 to-emerald-400',
    'from-purple-500 to-pink-400',
    'from-orange-500 to-red-400',
    'from-indigo-500 to-purple-400',
    'from-pink-500 to-rose-400'
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    if (headerVisible) setHeaderInView(true);
  }, [headerVisible]);

  return (
    <section id="project" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* হেডার */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={headerInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-6 py-2 rounded-full mb-6"
          >
            <FaCode className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold">My Portfolio</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div 
              animate={{ width: ['0%', '100%'] }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-20 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            ></motion.div>
            <FaHeart className="w-6 h-6 text-pink-500 animate-pulse" />
            <motion.div 
              animate={{ width: ['0%', '100%'] }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-20 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            ></motion.div>
          </div>

          <p className="max-w-2xl mx-auto text-lg">
            I build innovative and scalable web applications that solve real-world problems. 
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* ফিল্টার */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <FilterButton
              key={category}
              category={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              color={colors[index % colors.length]}
            />
          ))}
        </motion.div>

        {/* প্রজেক্ট গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ModernProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

    
      </div>
    </section>
  );
};

export default Projects;