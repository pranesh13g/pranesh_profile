"use client";

import { useState } from "react";
import { projects } from "@/utils/project";
import Link from "next/link";

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section className="bg-slate-50">
      <div id="projects" className="pb-16 pt-5 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-extrabold text-4xl md:text-5xl pb-2 pt-4 text-gray-600">
            Projects
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            A collection of things I built to sharpen my skills and solve real
            problems.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image - compact height */}
              <div className="relative overflow-hidden h-44">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.image}
                  alt={project.name}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-5">
                <h2 className="font-bold text-lg text-gray-900 mb-1">
                  {project.heading}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.detail}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link button */}
                <Link target="_blank" href={project.source}>
                  <button className="btn btn-primary btn-sm px-6 rounded-full">
                    View Project →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Less */}
        {projects.length > 2 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline btn-primary rounded-full px-10"
            >
              {showAll
                ? "Show Less ↑"
                : `Show More (${projects.length - 2} more) ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
