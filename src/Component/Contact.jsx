import React, { useState } from "react";
import { motion } from "framer-motion";
import EarthCanvas from "./Earth";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

  return (
    <div id="contact" className="xl:mt-12 bg-purple-400 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      {/* Contact Form */}
      <motion.div className="flex-[0.75]  bg-black-100 p-8 rounded-2xl">
        <p className="text-white text-4xl font-bold">Feel free to contact me </p>
        

        <form onSubmit={handleContact} className="flex flex-col gap-4 mt-6 text-white">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label className=" text-xl">Name</label>
            <input
              className="border-2 focus:outline-[#413a79] px-3 py-2 text-lg rounded-md text-black"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className=" text-xl">Email</label>
            <input
              className="border-2 focus:outline-[#413a79] px-3 py-2 text-lg rounded-md text-black"
              type="email"
              name="email"
              placeholder="demo@gmail.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col gap-2">
            <label className=" text-xl">Write Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message"
              rows={4}
              className="border-2 focus:outline-[#413a79] rounded-md px-3 py-2 text-black text-lg"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="mt-3 px-6 border border-double py-3 w-full btn-outline rounded-md text-white text-xl"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Earth Canvas */}
      <motion.div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
