"use client";
import React, { useState, useEffect } from "react";
import { TbHexagonLetterP } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-violet-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-violet-50 text-gray-500 hover:text-violet-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"
                }
              />
            </svg>
          </button>

          <a
            href="https://www.linkedin.com/in/pranesh-chakma/"
            target="_blank"
            className="hidden md:flex text-2xl text-gray-400 hover:text-violet-600 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <AiFillApi />
          </a>
        </div>

        {/* Center — desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative group text-sm font-semibold text-gray-500 hover:text-violet-600 transition-colors duration-200 py-1"
            >
              {label}
              {/* Underline that slides in on hover */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-violet-600 rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right — logo */}
        <a
          href="#contact"
          className="text-3xl text-gray-700 hover:text-violet-600 transition-colors duration-200"
          aria-label="Contact"
        >
          <TbHexagonLetterP />
        </a>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-violet-50 px-4 pb-4 pt-2 shadow-lg">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-violet-50 hover:text-violet-600 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
