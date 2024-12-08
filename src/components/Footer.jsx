import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const links = [
  {
    href: "https://www.instagram.com/ambarsrivastava_/",
    icon: <FaInstagram />,
  },
  { href: "https://x.com/AmbarSri_0027", icon: <FaXTwitter /> },
  { href: "https://github.com/ambar-srivastava", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/ambar-srivastava27/",
    icon: <FaLinkedinIn />,
  },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; 2025, Gaming Zone. All rights reserved | Ambar Srivastava
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
          {links.map(({ href, icon }) => {
            return (
              <a
                href={href}
                key={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black transition-colors duration-300 ease-in-out hover:text-white"
              >
                {icon}
              </a>
            );
          })}
        </div>

        <a href="#privacy-policy" className="text-center text-sm !text-black transition-colors duration-300 ease-in-out hover:!text-white nav-hover-btn">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
