"use client";

const experiences = [
  {
    title: "Jr Flutter Developer",
    company: "Softvence Agency",
    period: "2024 — 2025",
    description:
      "Built cross-platform Flutter apps with responsive UI and smooth UX. Used Provider for scalable state management, integrated REST APIs with JWT authentication, and collaborated with backend, design, and clients to deliver user-focused solutions.",
  },
  {
    title: "Junior Web Developer (Intern)",
    company: "Skyland Web",
    period: "Mar 2024 — Sep 2024",
    description:
      "Designed and built a user-centric web application with a focus on performance. Wrote clean, maintainable code to ensure long-term quality and easy team collaboration.",
  },
];

const Experience = () => {
  return (
    <section className="bg-slate-50" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            My <span className="text-indigo-600">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-px bg-indigo-100" />

          {experiences.map((exp, index) => (
            <div
              key={`exp-${index}`}
              className={`relative ${index < experiences.length - 1 ? "mb-8 sm:mb-10" : ""}`}
            >
              {/* Dot */}
              <div className="absolute -left-[21px] sm:-left-[27px] top-6 w-4 h-4 rounded-full bg-indigo-600 border-4 border-indigo-100 z-10" />

              {/* Card */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-5 sm:p-7">
                {/* Top row — title + period */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">
                    {exp.title}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 w-fit whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {/* Company */}
                <p className="text-indigo-500 text-sm font-semibold mb-3">
                  {exp.company}
                </p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
