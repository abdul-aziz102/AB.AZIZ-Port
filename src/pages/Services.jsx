import React, { useState, useEffect, useRef } from "react";
import {
  FiCheck,
  FiArrowRight,
  FiCode,
  FiShoppingCart,
  FiBriefcase,
  FiUser,
  FiCpu,
  FiLayers,
} from "react-icons/fi";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Simple Website",
      description:
        "Clean, responsive websites with modern design principles. Perfect for small businesses or personal use.",

      features: [
        "Responsive Design",
        "SEO Optimized",
        "Contact Forms",
        "Basic CMS",
        "1 Month Support",
      ],
      icon: <FiCode className="text-blue-500" />,
      color: "from-blue-500 to-blue-600",
      category: "web",
    },
    {
      title: "E-commerce Website",
      description:
        "Full-featured online stores with secure payment processing and inventory management.",

      features: [
        "Product Management",
        "Payment Gateway",
        "Inventory System",
        "Order Tracking",
        "3 Months Support",
      ],
      icon: <FiShoppingCart className="text-purple-500" />,
      color: "from-purple-500 to-purple-600",
      category: "ecommerce",
    },
    {
      title: "Company Portfolio",
      description:
        "Professional showcase of your business with case studies, team profiles, and service highlights.",

      features: [
        "Custom Design",
        "Case Studies",
        "Team Profiles",
        "Testimonials",
        "2 Months Support",
      ],
      icon: <FiBriefcase className="text-green-500" />,
      color: "from-green-500 to-green-600",
      category: "web",
    },
    {
      title: "Simple Portfolio",
      description:
        "Elegant personal portfolio to showcase your work, skills, and professional journey.",

      features: [
        "Project Gallery",
        "Skills Display",
        "Resume Integration",
        "Contact Form",
        "1 Month Support",
      ],
      icon: <FiUser className="text-pink-500" />,
      color: "from-pink-500 to-pink-600",
      category: "web",
    },

    {
      title: "Advanced Design",
      description:
        "Cutting-edge designs with animations, micro-interactions, and unique user experiences.",

      features: [
        "Custom Animations",
        "Advanced UI/UX",
        "Interactive Elements",
        "Performance Optimized",
        "2 Months Support",
      ],
      icon: <FiLayers className="text-cyan-500" />,
      color: "from-cyan-500 to-cyan-600",
      category: "design",
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "web", name: "Web Development" },
    { id: "ecommerce", name: "E-commerce" },
    { id: "ai", name: "AI Integration" },
    { id: "design", name: "Advanced Design" },
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredServices(services);
    } else {
      setFilteredServices(
        services.filter((service) => service.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-16 overflow-hidden"
      id="services"
    >

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl ${isVisible ? "animate-pulse-slow" : "opacity-0"
            }`}
        ></div>
        <div
          className={`absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500 filter blur-3xl ${isVisible ? "animate-pulse-slow" : "opacity-0"
            }`}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
        >
          <span className="text-sm font-medium text-blue-400 flex items-center justify-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
            MY SERVICES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Solutions I Offer
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I provide a range of web development and design services to help
            bring your digital vision to life with modern technologies and best
            practices.
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          style={{ transitionDelay: "0.2s" }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "bg-gray-800 text-gray-300 hover:text-blue-400 shadow-sm"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gray-800 rounded-xl p-6 border border-gray-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group overflow-hidden ${isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <FiCheck className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Get Started{" "}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        @keyframes pulseSlow {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.85;
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s forwards;
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
