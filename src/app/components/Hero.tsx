import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="bg-neutral-white">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-16 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-black leading-tight">
            We Build Reliable <span className="text-primary">Websites & Apps</span> That Grow Your Business.
          </h1>
          <p className="mt-4 text-lg text-neutral-grey max-w-xl">
            Custom web and mobile solutions delivered on time with quality you can trust.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-primary px-6 py-3 text-white font-medium hover:bg-primary-dark transition"
            >
              Start Your Project
            </Link>
            <Link
              href="#work"
              className="rounded-full border border-neutral-grey px-6 py-3 text-neutral-black font-medium hover:bg-primary-light hover:text-white transition"
            >
              View Work
            </Link>
          </div>
        </div>
        
        {/* Illustration / Image */}
        <div className="flex-1 flex justify-center">
          <Image 
            src="/hero-illustration.jpg" // replace with your illustration or abstract shape
            alt="Illustration"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
