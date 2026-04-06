import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { TbHexagonLetterP } from "react-icons/tb";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100010448315616",
    icon: <FaFacebook />,
    label: "Facebook",
    color:
      "hover:text-[#1877F2] hover:bg-[#1877F2]/10 hover:border-[#1877F2]/30",
  },
  {
    href: "https://mail.google.com/mail/u/0/#inbox?compose=jrjtXJVBDsWnPMxfNfmSvlbngNBQzmCbwzQzbXkdQqRpNcRWjBpMhlbWzmQSBNMvFgSFQQSH",
    icon: <SiGmail />,
    label: "Gmail",
    color:
      "hover:text-[#EA4335] hover:bg-[#EA4335]/10 hover:border-[#EA4335]/30",
  },
  {
    href: "https://www.linkedin.com/in/pranesh-chakma/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    color:
      "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30",
  },
  {
    href: "https://github.com/pranesh13g",
    icon: <FaSquareGithub />,
    label: "GitHub",
    color: "hover:text-gray-900 hover:bg-gray-100 hover:border-gray-300",
  },
];

const Footer = () => {
  return (
    <section className="bg-white border-t border-gray-100 ">
      <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {/* Top: logo + tagline + socials */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left — branding */}
          <div className="text-center md:text-left space-y-3 max-w-sm">
            <div className="text-4xl text-indigo-600">
              <TbHexagonLetterP />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Thanks for visiting my portfolio.{" "}
              <span className="text-indigo-600 font-semibold">
                I'm currently open for work
              </span>{" "}
              — let's build something great together.
            </p>
            <p className="text-xs text-gray-400 font-medium">
              praneshck7@gmail.com
            </p>
          </div>

          {/* Right — contact */}
          <div className="text-center md:text-right space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Find me on
            </p>
            <div className="flex items-center justify-center md:justify-end gap-3">
              {socialLinks.map(({ href, icon, label, color }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  aria-label={label}
                  className={`text-xl text-gray-400 border border-gray-200 rounded-xl p-2.5 transition-all duration-200 ${color}`}
                >
                  {icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Pranesh Chakma. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="text-indigo-500 font-medium">Next.js</span> &{" "}
            <span className="text-indigo-500 font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
