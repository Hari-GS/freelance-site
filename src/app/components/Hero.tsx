'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const words = [
    'We Build Reliable',
    'Websites & Apps',
    'That Grow Your Business.'
  ];

  return (
    <section id="home" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 md:pt-32 pt-10 pb-36 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-black leading-tight">
            {words.map((text, i) => (
              <motion.span
                key={i}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2, duration: 0.6, ease: 'easeOut' }}
                className="block"
              >
                {i === 1 ? (
                  <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    {text}
                  </span>
                ) : (
                  text
                )}
              </motion.span>
            ))}
          </h1>

          <p className="mt-5 text-lg text-neutral-grey max-w-xl mx-auto md:mx-0">
            We’re a freelance development team, ensuring every project is delivered with trusted quality
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-gradient-to-r from-primary to-primary-dark px-6 py-3 text-white font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition"
            >
              Start Your Project
            </Link>
            {/* <Link
              href="#work"
              className="rounded-full border border-neutral-grey px-6 py-3 text-neutral-black font-medium hover:border-primary hover:text-primary transform hover:scale-105 transition"
            >
              View Work
            </Link> */}
          </div>
        </div>
        
        {/* Illustration / Image */}
        <div className="flex-1 flex justify-center">
          <Image 
            src="/hero-illustration.jpg"  // replace with your illustration
            alt="Illustration"
            width={500}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
