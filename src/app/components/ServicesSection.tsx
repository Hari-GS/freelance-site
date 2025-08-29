"use client";
import { motion } from "framer-motion";
import { FaGlobe, FaMobileAlt, FaPaintBrush, FaTools } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Web Development",
      description:
        "Responsive, SEO-friendly websites that convert visitors into customers.",
      icon: <FaGlobe className="text-primary text-4xl" />,
    },
    {
      title: "Mobile Apps",
      description:
        "Fast, scalable apps for iOS & Android to engage your audience.",
      icon: <FaMobileAlt className="text-primary text-4xl" />,
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive designs to improve user experience.",
      icon: <FaPaintBrush className="text-primary text-4xl" />,
    },
    {
      title: "Maintenance & Support",
      description:
        "Continuous updates and monitoring for your digital assets.",
      icon: <FaTools className="text-primary text-4xl" />,
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-gray-50 py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading with subtle animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-neutral-black mb-4"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-neutral-grey max-w-2xl mx-auto mb-14"
        >
          Tailored digital solutions to help your business thrive online.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden group"
            >
              {/* Icon with gradient background */}
              <div className="text-4xl mb-4 inline-block bg-gradient-to-r bg-neutral-white text-white p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-neutral-black mb-2">
                {service.title}
              </h3>

              <p className="text-neutral-grey text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Subtle hover highlight effect */}
              {/* <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-2xl pointer-events-none" /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
