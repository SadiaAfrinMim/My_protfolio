import React, { useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./Earth";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const SERVICE = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const TEMPLATED = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleContact = (e) => {
    e.preventDefault();
    setIsSending(true);

    const emailParams = {
      to_name: "Sadia",
      from_name: formData.name,
      email_id: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE, TEMPLATED, emailParams, PUBLIC)
      .then(
        () => {
          setIsSending(false);
          toast.success("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsSending(false);
          console.error("Error sending email:", error);
          toast.error("Failed to send your message. Please try again.");
        }
      );
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 overflow-hidden bg-gradient-to-br from-base-100 via-primary/5 to-base-200"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L55 30 L30 55 L5 30 Z' fill='none' stroke='%23933EEA' stroke-width='0.5' /%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row items-center gap-12 xl:gap-20">
          {/* Contact Form - Left Side */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInLeft}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full xl:w-7/12"
          >
            <div className="bg-base-100/80 backdrop-blur-sm border border-base-300 rounded-2xl shadow-2xl p-8 md:p-10">
              <p className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Feel free to contact me
              </p>

              <form onSubmit={handleContact} className="flex flex-col gap-5">
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-medium text-base-content/80">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors duration-300 text-base-content"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-medium text-base-content/80">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="demo@gmail.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input input-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors duration-300 text-base-content"
                  />
                </div>

                {/* Message Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-medium text-base-content/80">Message</label>
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="textarea textarea-bordered w-full bg-base-200/50 focus:bg-base-100 transition-colors duration-300 text-base-content"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="btn btn-primary btn-lg px-10 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <span className="loading loading-spinner loading-sm"></span>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Earth Canvas - Right Side */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full xl:w-5/12 h-[350px] md:h-[500px] xl:h-[550px] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full">
              <EarthCanvas />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;