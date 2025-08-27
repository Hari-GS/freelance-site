export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-3 text-sm tracking-wide text-gray-500">Freelance Team</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          We build reliable websites & apps that grow your business.
        </h1>
        <p className="mt-4 max-w-2xl text-gray-600">
          Modern, fast and SEO-friendly. On-time delivery. Clear communication.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-xl bg-black px-5 py-3 text-white transition hover:opacity-90"
          >
            Start Your Project
          </a>
          <a
            href="#services"
            className="rounded-xl border border-gray-300 px-5 py-3 text-gray-800 hover:bg-gray-50"
          >
            View Services
          </a>
        </div>
      </section>
    </main>
  );
}
