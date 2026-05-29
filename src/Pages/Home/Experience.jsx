import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaTasks, FaUsers, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: 'Intern (Development Communication)',
      company: 'Bangladesh Academy for Rural Development (BARD)',
      location: 'Cumilla',
      duration: 'Feb 2024 - Aug 2024',
      responsibilities: [
        'Assisted in rural development communication projects and awareness programs, supporting data collection, report preparation, and content development.',
        'Contributed to organizing seminars, workshops, and training sessions, enhancing outreach and community engagement.'
      ],
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 dark:bg-[#0a0a0f] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3 sm:mb-4">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            My professional journey and contributions in development communication
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Decorative Gradient Border */}
          <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl blur opacity-20 dark:opacity-25 group-hover:opacity-40 transition duration-300"></div>
          
          {/* Main Card */}
          <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900">
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
              <span className="inline-flex items-center gap-1 sm:gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                <FaCheckCircle className="text-xs sm:text-sm" />
                <span className="hidden xs:inline">Completed</span>
                <span className="xs:hidden">Done</span>
              </span>
            </div>

            {/* Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Title & Company */}
              <div className="pr-20 sm:pr-24 md:pr-32">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 dark:text-white text-gray-900 break-words">
                  {experiences[0].title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-blue-600 dark:text-blue-400 font-medium break-words">
                  {experiences[0].company}
                </p>
              </div>

              {/* Duration & Location */}
              <div className="flex flex-wrap gap-3 sm:gap-4 dark:text-gray-400 text-gray-600">
                <span className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <FaCalendarAlt className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm" />
                  {experiences[0].duration}
                </span>
                <span className="inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <FaMapMarkerAlt className="text-purple-600 dark:text-purple-400 text-xs sm:text-sm" />
                  {experiences[0].location}
                </span>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-3 md:pt-4">
                <h4 className="text-base sm:text-lg font-semibold flex items-center gap-2 dark:text-white text-gray-900">
                  <span className="w-1 h-4 sm:h-5 md:h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                  Key Responsibilities
                </h4>
                
                <ul className="space-y-2 sm:space-y-3 dark:text-gray-300 text-gray-600">
                  {experiences[0].responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <span className="w-1.5 h-1.5 mt-1.5 sm:mt-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></span>
                      <span className="text-xs sm:text-sm md:text-base leading-relaxed break-words">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;