// components/ContactSection.jsx
export default function ContactSection() {
    return (
      <section id="contact" className="bg-gray-50 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Tell us about your project
          </h2>
          <p className="text-gray-600 mb-8">
            We’ll respond within 24 hours. Let’s turn your idea into reality.
          </p>
  
          {/* Contact Form */}
          <form className="space-y-6 bg-white shadow-md rounded-2xl p-8 text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-600 focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-600 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <textarea
              placeholder="Message / Project Brief"
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Request
            </button>
          </form>
  
          {/* Alternative Contact */}
          <div className="mt-6 text-gray-600">
            Or reach us directly on{" "}
            <a
              href="mailto:youremail@example.com"
              className="text-green-600 font-semibold hover:underline"
            >
              Email
            </a>{" "}
            or{" "}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-semibold hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    );
  }
  