// components/Testimonials.js
export default function Testimonials() {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Founder, XYZ Co.",
        feedback:
          "They built our e-commerce site flawlessly. Conversions went up 35% in just 2 months. Great communication and timely delivery!",
        image: "/testimonials/sarah.jpg", // replace with actual image path
      },
      {
        name: "Michael Lee",
        role: "CTO, ABC Startup",
        feedback:
          "Their team delivered a fast, scalable app that helped us reach thousands of new users. Highly reliable and professional.",
        image: "/testimonials/michael.jpg",
      },
      {
        name: "Priya Sharma",
        role: "Entrepreneur",
        feedback:
          "Amazing design and user experience! They understood my vision and executed it perfectly. Highly recommend.",
        image: "/testimonials/priya.jpg",
      },
    ];
  
    return (
      <section className="py-20 bg-neutral-100" id="testimonials">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-full mb-4 object-cover border-2 border-[--color-primary]"
                />
                <p className="text-gray-700 italic mb-4">"{t.feedback}"</p>
                <h4 className="font-semibold text-gray-900">{t.name}</h4>
                <span className="text-gray-500 text-sm">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  