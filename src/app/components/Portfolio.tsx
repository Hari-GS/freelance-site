import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Site for XYZ",
      description:
        "Designed and developed a custom store that increased conversions by 35%.",
      image: "/mockup-1.jpg", // replace with your mockup image path
    },
    {
      title: "Corporate Website for ABC",
      description:
        "Built a responsive and SEO-friendly site, boosting online visibility.",
      image: "/mockup-2.jpg",
    },
    {
      title: "Mobile App for Startup 123",
      description:
        "Developed a cross-platform app with intuitive UX, increasing user retention.",
      image: "/mockup-3.jpg",
    },
  ];

  return (
    <section id="work" className="py-20 bg-neutral-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Our Work
        </h2>
        <p className="text-lg text-[var(--color-neutral-grey)] mb-12">
          A showcase of projects that helped our clients grow.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--color-neutral-grey)]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
