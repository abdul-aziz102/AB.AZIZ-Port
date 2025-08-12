import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import { SiLinkedin, SiGmail } from 'react-icons/si';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      info: "abdulazizyousufzia@gmail.com",
      color: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-500"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone",
      info: "0345 2489424",
      link: "tel:+923001234567",
      color: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-500"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      info: "+92 3452489424",
      link: "https://wa.me/923001234567",
      color: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-500"
    },
  
    {
      icon: <SiLinkedin className="text-2xl" />,
      title: "LinkedIn",
      info: "linkedin.com/in/yourprofile",
      link: "https://linkedin.com/in/yourprofile",
      color: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-500"
    },
    {
      icon: <SiGmail className="text-2xl" />,
      title: "Gmail",
      info: "your.email@gmail.com",
      link: "mailto:your.email@gmail.com",
      color: "bg-red-100 dark:bg-red-900/30",
      iconColor: "text-red-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen mt-14 bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Get In Touch
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <form 
              onSubmit={handleSubmit}
              className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6 border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-2xl font-bold text-center mb-6">
                Send me a message
              </h2>

              <div>
                <label className="block mb-2 text-gray-800 dark:text-gray-300 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full p-4 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-600 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-800 dark:text-gray-300 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full p-4 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-600 transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-800 dark:text-gray-300 font-medium">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  required
                  className="w-full p-4 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 dark:border-gray-600 transition"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
              <h2 className="text-2xl font-bold text-center mb-8">
                Other ways to connect
              </h2>

              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    variants={item}
                    whileHover={{ y: -5 }}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${method.color} p-6 rounded-xl transition-all hover:shadow-md`}
                  >
                    <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center mb-4`}>
                      <div className={method.iconColor}>
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{method.info}</p>
                  </motion.a>
                ))}
              </motion.div>

           
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;