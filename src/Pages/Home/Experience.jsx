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
    <section id="experience" className="py-20 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* সেকশন হেডার */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions in development communication
          </p>
        </motion.div>

        {/* এক্সপেরিয়েন্স কার্ড */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* ডেকোরেটিভ গ্রেডিয়েন্ট বর্ডার */}
          <div className="absolute -inset-1  rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
          
          {/* মূল কার্ড */}
          <div className="relative  rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
            
            {/* স্ট্যাটাস ব্যাজ */}
            <div className="absolute top-6 right-6">
              <span className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                <FaCheckCircle />
                Completed
              </span>
            </div>

            {/* কন্টেন্ট */}
            <div className="space-y-6">
              {/* টাইটেল ও কোম্পানি */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {experiences[0].title}
                </h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {experiences[0].company}
                </p>
              </div>

              {/* ডিউরেশন ও লোকেশন */}
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-600" />
                  {experiences[0].duration}
                </span>
                <span className="inline-flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-600" />
                  {experiences[0].location}
                </span>
              </div>

              {/* রেসপনসিবিলিটিস */}
              <div className="space-y-4 pt-4">
                <h4 className="text-lg font-semiboldflex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
                  Key Responsibilities
                </h4>
                
                <ul className="space-y-3">
                  {experiences[0].responsibilities.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
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