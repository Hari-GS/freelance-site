import { Clock, MessageSquare, DollarSign, Code } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      title: "On-time Delivery",
      description:
        "We stick to strict project timelines without compromising quality.",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      title: "Transparent Communication",
      description:
        "Regular updates and clear milestones to keep you informed.",
    },
    {
      icon: <DollarSign className="w-10 h-10 text-primary" />,
      title: "Affordable Pricing",
      description:
        "High-quality work tailored to startup-friendly budgets.",
    },
    {
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Modern Tech Stack",
      description:
        "Built with Next.js, Tailwind CSS, and best industry practices.",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100">
      {/* Background subtle gradient blur */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading with underline accent */}
        <h2 className="text-4xl font-extrabold text-neutral-black mb-4 relative inline-block">
          Why Choose Us
        </h2>
        <p className="text-neutral-grey mb-16 text-lg">
          A few reasons why you should choose us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {points.map((point, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl shadow-md border border-gray-100 bg-white hover:shadow-xl transition duration-500 hover:-translate-y-2"
            >
              {/* Hover glow accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              {/* Icon with circular accent */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-neutral-black mb-3 group-hover:text-primary transition">
                {point.title}
              </h3>
              <p className="text-neutral-grey text-sm leading-relaxed">
                {point.description}
              </p>

              {/* Animated underline on hover */}
              <div className="mt-4 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-12 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
