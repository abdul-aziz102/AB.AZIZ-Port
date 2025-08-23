import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      title: "Simple Website",
      description: "Clean, responsive websites with modern design principles. Perfect for small businesses or personal use.",
      price: "From $499",
      features: ["Responsive Design", "SEO Optimized", "Contact Forms", "Basic CMS", "1 Month Support"],
      icon: "💻"
    },
    {
      title: "E-commerce Website",
      description: "Full-featured online stores with secure payment processing and inventory management.",
      price: "From $1499",
      features: ["Product Management", "Payment Gateway", "Inventory System", "Order Tracking", "3 Months Support"],
      icon: "🛒"
    },
    {
      title: "Company Portfolio",
      description: "Professional showcase of your business with case studies, team profiles, and service highlights.",
      price: "From $899",
      features: ["Custom Design", "Case Studies", "Team Profiles", "Testimonials", "2 Months Support"],
      icon: "🏢"
    },
    {
      title: "Simple Portfolio",
      description: "Elegant personal portfolio to showcase your work, skills, and professional journey.",
      price: "From $399",
      features: ["Project Gallery", "Skills Display", "Resume Integration", "Contact Form", "1 Month Support"],
      icon: "🎨"
    },
    {
      title: "AI Integration",
      description: "Enhance your website with AI capabilities like chatbots, recommendation engines, and automation.",
      price: "From $999",
      features: ["AI Chatbot", "Personalization", "Data Analysis", "Automation", "3 Months Support"],
      icon: "🤖"
    },
    {
      title: "Advanced Design",
      description: "Cutting-edge designs with animations, micro-interactions, and unique user experiences.",
      price: "From $1299",
      features: ["Custom Animations", "Advanced UI/UX", "Interactive Elements", "Performance Optimized", "2 Months Support"],
      icon: "✨"
    }
  ];

  return (
    <div className="relative w-full  pt-24 pb-16 flex items-center bg-white dark:bg-gray-900 px-8 md:px-12 transition-colors duration-300 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-500 filter blur-3xl"></div>
      </div>
      
      {/* Floating tech icons */}
      <div className="absolute top-1/4 left-1/5 opacity-20 animate-float">
        <TechIcon icon="react" size={40} />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-20 animate-float-delay">
        <TechIcon icon="node" size={50} />
      </div>
      <div className="absolute bottom-1/4 left-1/3 opacity-20 animate-float-delay-2">
        <TechIcon icon="js" size={30} />
      </div>
      <div className="absolute bottom-1/3 right-1/5 opacity-20 animate-float">
        <TechIcon icon="css" size={45} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-2 flex items-center justify-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <span className="text-sm font-medium text-blue-500 dark:text-blue-400">
              MY SERVICES
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Solutions I Offer
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            I provide a range of web development and design services to help bring your digital vision to life with modern technologies and best practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              {/* Service icon */}
              <div className="text-4xl mb-4">{service.icon}</div>
              
              {/* Service title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              
              {/* Service description */}
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {service.description}
              </p>
              
              {/* Price */}
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                  {service.price}
                </span>
              </div>
              
              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
          
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with a custom solution tailored to your needs.
          </p>
          <a href="/contact">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-blue-500/30">
              Get in Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// Reuse the TechIcon component from your portfolio
const TechIcon = ({ icon, size = 24 }) => {
  const icons = {
    react: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
        <path fill="#00d8ff" d="M24,34C11.1,34,1,29.6,1,24s10.1-10,23-10s23,4.4,23,10S36.9,34,24,34z M24,16c-12.6,0-21,4.1-21,8s8.4,8,21,8s21-4.1,21-8S36.6,16,24,16z"/>
        <path fill="#00d8ff" d="M15.1,44c-1.1,0-2.1-0.3-2.9-0.9c-2.1-1.6-2.4-4.9-0.8-7.3l9.2-15.4c1.6-2.7,4.4-2.7,6,0l9.2,15.4c1.6,2.7,1.3,6-0.8,7.6c-2.1,1.6-5.3,1.3-6.9-0.8L24,30.7l-8.9,14.9C14.1,47,14.5,48,15.1,48L15.1,44z"/>
        <path fill="#00d8ff" d="M32.9,44c0.6,0,1-1,0.8-1.4L24,27.7l-9.7,16.1c-0.2,0.4,0.2,1.2,0.8,1.2c0.6,0,1.4-0.2,1.7-0.6L24,30.7l8.9,14.9C33.5,46,34.3,48,32.9,48L32.9,44z"/>
        <path fill="#00d8ff" d="M15.1,4c1.1,0,2.1,0.3,2.9,0.9c2.1,1.6,2.4,4.9,0.8,7.3l-9.2,15.4c-1.6,2.7-4.4,2.7-6,0l-9.2-15.4c-1.6-2.7-1.3-6,0.8-7.6C5.6,0.8,8.8,1.1,10.4,4l8.9,14.9L24,4.3L15.1,4z"/>
        <path fill="#00d8ff" d="M32.9,4c-0.6,0-1,1-0.8,1.4L24,20.3l9.7-16.1c0.2-0.4-0.2-1.2-0.8-1.2c-0.6,0-1.4,0.2-1.7,0.6L24,17.3l-8.9-14.9C14.5,2,13.7,0,15.1,0L32.9,4z"/>
      </svg>
    ),
    node: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
        <path fill="#8bc34a" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"/>
        <path fill="#fff" d="M24,10c7.7,0,14,6.3,14,14s-6.3,14-14,14S10,31.7,10,24S16.3,10,24,10z"/>
        <path fill="#4caf50" d="M24,8c8.8,0,16,7.2,16,16s-7.2,16-16,16S8,32.8,8,24S15.2,8,24,8z M24,12c-6.6,0-12,5.4-12,12s5.4,12,12,12s12-5.4,12-12S30.6,12,24,12z"/>
        <path fill="#388e3c" d="M24,14c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10S18.5,14,24,14z"/>
        <path fill="#8bc34a" d="M24,16c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S19.6,16,24,16z"/>
      </svg>
    ),
    js: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
        <path fill="#ffd600" d="M6,42V6h36v36H6z"/>
        <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"/>
      </svg>
    ),
    css: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"/>
        <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z"/>
        <path fill="#FFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"/>
        <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"/>
      </svg>
    )
  };
  
  return icons[icon] || null;
};

export default ServicesPage;