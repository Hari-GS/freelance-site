"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [buttonState, setButtonState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonState("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        setButtonState("sent");
        form.reset();
        setTimeout(() => setButtonState("idle"), 3000); // reset after 3s
      } else {
        alert(`Failed to send message: ${result.message}`);
        setButtonState("idle");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred.");
      setButtonState("idle");
    }
  };

  const buttonText =
    buttonState === "sending" ? "Sending..." : buttonState === "sent" ? "Sent!" : "Send Message";

  const buttonClasses =
    buttonState === "sent"
      ? "bg-green-600 hover:bg-green-700"
      : buttonState === "sending"
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary";

  return (
    <section id="contact" className="relative bg-gray-50 py-20 md:px-6 px-2 overflow-hidden">
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent pb-2 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Tell us about your project
        </motion.h2>

        <motion.p
          className="text-neutral-grey mb-10 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We’ll respond within{" "}
          <span className="relative inline-block">
            <span className="relative z-10 font-semibold text-primary">12 hours</span>
          </span>
          . Let’s turn your idea into{" "}
          <span className="relative inline-block">
            <span className="relative z-10 font-semibold text-primary">reality</span>
          </span>
          .
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white/80 backdrop-blur-md shadow-lg rounded-2xl md:p-8 py-8 px-8 text-gray-600 border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input name="name" type="text" placeholder="Your Name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-700 focus:ring-2 focus:ring-primary" />
            <input name="email" type="email" placeholder="Your Email" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-700 focus:ring-2 focus:ring-primary" />
            <input name="phone" type="tel" placeholder="Phone / WhatsApp No." className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none text-gray-700 focus:ring-2 focus:ring-primary" />
          </div>
          <textarea
            name="message"
            placeholder="Tell us few things about your project / work"
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <motion.button
            type="submit"
            disabled={buttonState === "sending"}
            className={`w-full flex justify-center items-center gap-2 text-white font-semibold py-3 rounded-2xl shadow-md transition-all duration-300 ${buttonClasses}`}
            whileTap={{ scale: buttonState === "sending" ? 1 : 0.97 }}
          >
            {buttonState === "sending" && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {buttonText}
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-8 text-gray-700 md:px-0 px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Or reach us directly on{" "}
          <a href="mailto:lancerratech@gmail.com" className="text-primary font-semibold hover:underline">
            Email
          </a>{" "}
          or{" "}
          <a href="https://wa.me/6369312803" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
