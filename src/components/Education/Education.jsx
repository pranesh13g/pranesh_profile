import { educations } from "@/utils/education";
import { HiAcademicCap } from "react-icons/hi2";

const Education = () => {
  return (
    <section className="">
      <div id="education" className="pb-20 pt-5 max-w-6xl px-4 sm:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-extrabold text-4xl md:text-5xl text-gray-600 pt-2">
            Education
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-indigo-100" />

          {educations.map((e, idx) => (
            <div key={idx} className="relative flex gap-6 mb-8 last:mb-0">
              {/* Icon dot */}
              <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-200">
                <HiAcademicCap className="text-white text-lg" />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h5 className="font-bold text-gray-900 text-base">
                    {e.degreeName}
                  </h5>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 w-fit">
                    {e.year}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-1">{e.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
