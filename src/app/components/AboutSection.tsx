/* eslint-disable react/no-unescaped-entities */

"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const team = [
    {
      name: "Hariharan G",
      role: "Head of Operations",
      image: "/Hari-profile-img.jpg", // replace with actual path
      description:
        "\"Hi! I'm Hari. I take care of day-to-day operations, making sure projects run smoothly and clients are happy. Let’s connect on LinkedIn and Instagram\"",
    },
    {
      name: "Sudeep Acharjee",
      role: "Team Lead",
      image: "/images/priya.jpg", // replace with actual path
      description:
        "\"Hey! I'm Sudeep. I guide the development team, making sure we deliver high-quality, creative solutions together. You can explore my work on GitHub and Instagram!\"",
    },
  ];

  return (
    <section id="about" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-black mb-4">
          About Us
        </h2>
        <p className="text-neutral-grey mb-12 max-w-2xl mx-auto">
            Say hello to the two minds behind our projects, guiding operations and development with passion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition text-center"
            >
              <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-black mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-black mb-3">{member.role}</p>
              <p className="text-neutral-grey text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
