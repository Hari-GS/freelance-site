// components/ContactSection.jsx
"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-gray-50 py-20 px-6 overflow-hidden"
    >
      <div className="relative max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent pb-2 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Tell us about your project
        </motion.h2>

        {/* Subtext with Wavy Underline */}
        <motion.p
          className="text-neutral-grey mb-10 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We’ll respond within{" "}
          <span className="relative inline-block">
            <span className="relative z-10 font-semibold text-primary">
              12 hours
            </span>
          </span>
          . Let’s turn your idea into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 font-semibold text-primary">
              reality
            </span>
          </span>
          .
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="space-y-6 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl p-8 text-gray-600 border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-700 focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-700 focus:ring-2 focus:ring-primary"
            />
          </div>
          <textarea
            placeholder="Message / Project Brief"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 rounded-2xl shadow-md hover:shadow-xl hover:from-primary-light hover:to-primary transition-all duration-300"
            whileTap={{ scale: 0.97 }}
          >
            Send Request
          </motion.button>
        </motion.form>

        {/* Alternative Contact */}
        <motion.div
          className="mt-8 text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Or reach us directly on{" "}
          <a
            href="mailto:youremail@example.com"
            className="text-primary font-semibold hover:underline"
          >
            Email
          </a>{" "}
          or{" "}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
