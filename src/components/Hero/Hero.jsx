"use client";

import Image from "next/image";

import Link from "next/link";

const Hero = () => {
  return (
    <section className=" overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(99,102,241,0.4); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 18px rgba(99,102,241,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(99,102,241,0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .animate-float      { animation: float 4s ease-in-out infinite; }
        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .animate-fade-up    { animation: fadeSlideUp 0.7s ease both; }
        .animate-fade-up-1  { animation: fadeSlideUp 0.7s 0.1s ease both; }
        .animate-fade-up-2  { animation: fadeSlideUp 0.7s 0.25s ease both; }
        .animate-fade-up-3  { animation: fadeSlideUp 0.7s 0.4s ease both; }
        .animate-pulse-ring { animation: pulse-ring 2.5s ease-out infinite; }
        .cursor-blink       { animation: blink 1s step-end infinite; }

        .code-badge {
          backdrop-filter: blur(8px);
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(99,102,241,0.15);
        }
      `}</style>

      <div id="top" className="max-w-6xl px-4 sm:px-6 mx-auto pt-16 md:pt-0 ">
        <div className="flex flex-col md:flex-row md:h-dvh items-center gap-10 md:gap-0">
          {/* Left — Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
            <p className="animate-fade-up text-indigo-500 font-semibold text-sm tracking-widest uppercase">
              Hello, I am
            </p>

            <h1 className="animate-fade-up-1 font-extrabold text-5xl md:text-6xl text-gray-900 leading-tight">
              Pranesh <span className="text-indigo-600">Chakma</span>
              <span className="cursor-blink text-indigo-400">_</span>
            </h1>

            <p className="animate-fade-up-2 text-gray-500 text-base leading-relaxed max-w-md mx-auto md:mx-0">
              A passionate{" "}
              <span className="text-indigo-600 font-medium">app developer</span>{" "}
              focused on creating interactive, scalable, and responsive mobile
              applications that provide an exceptional user experience.
            </p>

            <div className="animate-fade-up-3 flex gap-4 justify-center md:justify-start pt-2">
              <Link href="#projects">
                <button className="btn btn-primary rounded-full px-7">
                  See My Work →
                </button>
              </Link>
              <Link
                href="https://drive.google.com/file/d/11O-EaCKcl3hMS2DtdnC4bOWuWTpNc5QN/view?usp=sharing"
                target="_blank"
              >
                <button className="btn btn-outline btn-primary rounded-full px-7">
                  View Resume
                </button>
              </Link>
            </div>
          </div>

          {/* Right — Image with floating + decorative badges */}
          <div className="w-full md:w-1/2 flex justify-center items-center relative">
            {/* Soft glow blob behind image */}
            <div className="absolute w-72 h-72 rounded-full bg-indigo-200 opacity-30 blur-3xl" />

            {/* Floating image */}
            <div className="animate-float relative z-10">
              <div className="animate-pulse-ring rounded-full">
                <img
                  width={256}
                  height={256}
                  src="https://res.cloudinary.com/dxjg6mzbq/image/upload/v1775539298/ok_wjv6ew.webp"
                  alt="Pranesh Chakma"
                  className="rounded-full md:w-80 md:h-80 object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>

            {/* Floating badge — top left */}
            <div className="animate-float-slow absolute top-6 left-4 md:left-8 z-20 code-badge rounded-xl px-3 py-2 shadow-md text-xs font-mono text-indigo-700">
              <span className="text-pink-500">const</span>{" "}
              <span className="text-indigo-600">dev</span>{" "}
              <span className="text-gray-500">=</span>{" "}
              <span className="text-green-600">&quot;Pranesh&quot;</span>
            </div>

            {/* Floating badge — bottom right */}
            <div
              className="absolute bottom-8 right-2 md:right-6 z-20 code-badge rounded-xl px-3 py-2 shadow-md text-xs font-mono text-indigo-700"
              style={{ animation: "floatSlow 5s 1s ease-in-out infinite" }}
            >
              <span className="text-pink-500">flutter</span>{" "}
              <span className="text-gray-400">run</span>{" "}
              <span className="text-green-500">✓</span>
            </div>

            {/* Floating badge — bottom left */}
            <div
              className="absolute bottom-16 left-2 md:left-4 z-20 code-badge rounded-xl px-3 py-2 shadow-md text-xs font-mono"
              style={{ animation: "floatSlow 7s 0.5s ease-in-out infinite" }}
            >
              <span className="text-yellow-500">⚡</span>{" "}
              <span className="text-gray-600">Open to work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
