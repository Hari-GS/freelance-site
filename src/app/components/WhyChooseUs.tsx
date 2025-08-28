import { Clock, MessageSquare, DollarSign, Code } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Clock className="w-8 h-8 text-neutral-black" />,
      title: "On-time Delivery",
      description: "We stick to strict project timelines without compromising quality.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-neutral-black" />,
      title: "Transparent Communication",
      description: "Regular updates and clear milestones to keep you informed.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-neutral-black" />,
      title: "Affordable Pricing",
      description: "High-quality work tailored to startup-friendly budgets.",
    },
    {
      icon: <Code className="w-8 h-8 text-neutral-black" />,
      title: "Modern Tech Stack",
      description: "Built with Next.js, Tailwind CSS, and best industry practices.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-primary mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {point.title}
              </h3>
              <p className="text-[var(--color-neutral-grey)] text-sm">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
