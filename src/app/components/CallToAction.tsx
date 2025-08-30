// components/CallToAction.jsx
export default function CallToAction() {
    return (
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Project?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Let’s bring your idea to life with modern and scalable solutions.
        </p>
        <a
          href="#contact"
          className="bg-white text-primary-dark font-semibold px-6 py-3 rounded-lg hover:bg-neutral-white transition"
        >
          Get a Free Quote
        </a>
      </section>
    );
  }
  