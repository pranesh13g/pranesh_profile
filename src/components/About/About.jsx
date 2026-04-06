import Link from "next/link";

const activeSkills = [
  "Dart",
  "Flutter",
  "Rest API",
  "State Management",
  "Provider",
  "Riverpod",
  "SharedPreferences",
  "Reusable Widgets",
  "JSON Parsing",
  "Async Programming",
  "JWT Authentication",
  "Hive",
  "Clean Code",
  "Error Handling & Debugging",
  "Git",
  "VS Code",
  "Github",
  "AI-assisted Development",
];

const familiarTech = [
  "JavaScript",
  "React",
  "React Native",
  "Next.js",
  "Express.js",
  "Mongoose",
];

const About = () => {
  return (
    <section className="bg-slate-50">
      <div id="about" className="pb-24 pt-5 max-w-6xl px-4 sm:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-extrabold text-4xl md:text-5xl text-gray-600 pb-2 pt-4">
            About Me
          </h1>
          <p className="text-gray-500 mt-3 text-sm max-w-md mx-auto leading-relaxed">
            A little about me and the technologies I use daily
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left - Bio */}
          <div className="w-full md:w-1/2 space-y-5">
            <h5 className="font-bold text-2xl text-gray-900">
              Want to know me?
            </h5>

            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              I'm{" "}
              <span className="text-indigo-600 font-semibold">
                Pranesh Chakma
              </span>
              , a Flutter Mobile App Developer focused on building responsive,
              user-centric, and production-ready applications. At Softvence
              Agency, I developed and maintained cross-platform Flutter apps
              using Provider and Riverpod for scalable state management,
              integrated REST APIs with JWT authentication, and worked closely
              with backend and design teams to deliver smooth user experiences
              based on real client feedback.
            </p>

            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              I follow clean architecture principles like SOLID and DRY, and I'm
              comfortable working across the stack with Flutter, Node.js,
              Express.js, MongoDB, Firebase, Hive, and SharedPreferences. I also
              use modern AI assistants (ChatGPT, DeepSeek, Cursor) to improve
              productivity and code quality. Passionate about turning
              requirements into polished, scalable, and maintainable apps.
            </p>

            <Link href="#contact">
              <button className="btn btn-primary rounded-full px-8 mt-2">
                Contact Me →
              </button>
            </Link>
          </div>

          {/* Right - Skills */}
          <div className="w-full md:w-1/2 space-y-8">
            {/* Actively using */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block"></span>
                <h5 className="font-bold text-lg text-gray-900">
                  Actively Using
                </h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeSkills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 hover:bg-indigo-600 hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Familiar with */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-gray-400 inline-block"></span>
                <h5 className="font-bold text-lg text-gray-900">
                  Familiar With
                </h5>
              </div>
              <div className="flex flex-wrap gap-2">
                {familiarTech.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
