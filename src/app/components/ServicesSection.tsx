// app/components/ServicesSection.jsx (or put inside your page directly)

export default function ServicesSection() {
    const services = [
      {
        title: "Web Development",
        description: "Responsive, SEO-friendly websites that convert visitors into customers.",
        icon: "🌐",
      },
      {
        title: "Mobile Apps",
        description: "Fast, scalable apps for iOS & Android to engage your audience.",
        icon: "📱",
      },
      {
        title: "UI/UX Design",
        description: "Beautiful and intuitive designs to improve user experience.",
        icon: "🎨",
      },
      {
        title: "Maintenance & Support",
        description: "Continuous updates and monitoring for your digital assets.",
        icon: "🛠️",
      },
    ];
  
    return (
      <section id="services" className="bg-neutral-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-neutral-grey mb-12">
            Tailored digital solutions to help your business thrive online.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-neutral-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-neutral-grey text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  