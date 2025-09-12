import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
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

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const res = await fetch("https://port-back-nine.vercel.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert(data.message || "Something went wrong!");
    }
  } catch (err) {
    console.error(err);
    alert("Failed to send message.");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactMethods = [
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      info: "abdulazizyousufzia@gmail.com",
      color: "bg-blue-900/30",
      iconColor: "text-blue-500",
      link: "mailto:abdulazizyousufzia@gmail.com"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Phone",
      info: "+92 345 2489424",
      link: "tel:+923452489424",
      color: "bg-purple-900/30",
      iconColor: "text-purple-500"
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      info: "+92 345 2489424",
      link: "https://wa.me/923452489424",
      color: "bg-green-900/30",
      iconColor: "text-green-500"
    },
    {
      icon: <SiLinkedin className="text-2xl" />,
      title: "LinkedIn",
      info: "Abdul Aziz Yousufzia",
      link: "https://www.linkedin.com/in/abdul-aziz-yousufzia-a98340356",
      color: "bg-blue-900/30",
      iconColor: "text-blue-500"
    },
    {
      icon: <SiGmail className="text-2xl" />,
      title: "Gmail",
      info: "abdulazizyousufzia",
      link: "mailto:abdulazizyousufzia@gmail.com",
      color: "bg-red-900/30",
      iconColor: "text-red-500"
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Location",
      info: "Pakistan",
      color: "bg-orange-900/30",
      iconColor: "text-orange-500"
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
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-12 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Connect</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Send me a message and I'll respond as soon as possible.
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
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-center mb-8 text-white">
                Send me a message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-300 font-medium">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full pl-10 p-4 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="w-full pl-10 p-4 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-gray-300 font-medium">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello, I'd like to talk about..."
                    required
                    className="w-full p-4 rounded-xl bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500 border border-gray-600 transition"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-xl font-medium text-white transition-all flex items-center justify-center gap-2 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A7.96 7.96 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z"></path>
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
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 h-full">
              <h2 className="text-2xl font-bold text-center mb-8 text-white">
                Contact Information
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
                    target={method.link?.startsWith('http') ? '_blank' : '_self'}
                    rel={method.link?.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`${method.color} p-6 rounded-xl transition-all hover:shadow-md border border-gray-700 group`}
                  >
                    <div className={`w-12 h-12 rounded-full ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <div className={method.iconColor}>
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 text-white">{method.title}</h3>
                    <p className="text-gray-300">{method.info}</p>
                  </motion.a>
                ))}
              </motion.div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl">
                <h3 className="text-lg font-semibold mb-2 text-white">Response Time</h3>
                <p className="text-gray-300">
                  I typically respond to messages within 24 hours. For urgent inquiries, please use WhatsApp or call directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
