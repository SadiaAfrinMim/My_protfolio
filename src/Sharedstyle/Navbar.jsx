import React, { useState, useEffect } from "react";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import resume from "../../src/assets/sadia CV Resume.pdf";
import sadia from "../../src/assets/sadia.png";
import { Home, User, BookOpen, Target, Briefcase, Mail, Sparkles, ChevronRight } from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Update theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Track scroll for navbar style and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { icon: <Home size={18} />, text: "Home", href: "#home" },
    { icon: <User size={18} />, text: "About", href: "#about" },
    { icon: <Target size={18} />, text: "Skills", href: "#skills" },
    { icon: <BookOpen size={18} />, text: "Projects", href: "#project" },
    { icon: <Briefcase size={18} />, text: "Education", href: "#education" },
    { icon: <Mail size={18} />, text: "Contact", href: "#contact" },
  ];

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-base-100/80 backdrop-blur-xl shadow-2xl py-2"
          : "bg-base-100/50 backdrop-blur-sm shadow-lg py-3"
      }`}
    >
      {/* Subtle animated background line */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>

      <nav className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Section: Logo & Mobile Menu Button */}
        <div className="navbar-start flex items-center gap-2">
          {/* Mobile Menu Button with animated icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle lg:hidden relative overflow-hidden group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-300"></div>
            {isMenuOpen ? (
              <IoCloseOutline className="text-2xl text-primary relative z-10" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl text-primary relative z-10" />
            )}
          </button>

          {/* Premium Logo with 3D hover effect */}
          <a href="/" className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-60 group-hover:opacity-100 animate-pulse group-hover:animate-none transition-all duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-spin-slow opacity-0 group-hover:opacity-30"></div>
            <img
              className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-primary relative transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
              src={sadia}
              alt="Sadia Afrin Mim"
            />
          </a>

          {/* Brand Name with animated underline */}
          <div className="hidden md:block ml-2">
            <h2 className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sadia Afrin Mim
            </h2>
            <p className="text-xs text-base-content/60 flex items-center gap-1 relative">
              <Sparkles size={12} className="text-primary animate-pulse" />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                Web Developer
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </p>
          </div>
        </div>

        {/* Center Section: Navigation for larger screens */}
        <div className="navbar-center hidden lg:block">
          <div className="flex items-center gap-1 bg-base-200/30 backdrop-blur-sm p-1 rounded-2xl border border-base-300/20">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative group px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                      : "hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:shadow-lg hover:shadow-primary/25"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span
                      className={`transition-colors ${
                        isActive ? "text-white" : "text-primary group-hover:text-white"
                      }`}
                    >
                      {item.icon}
                    </span>
                    {item.text}
                  </span>
                  {!isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  )}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Section: Theme Toggle & Resume Download */}
        <div className="navbar-end flex items-center gap-3">
          {/* Premium Theme Toggle with 3D rotation */}
          <button
            onClick={toggleTheme}
            className="relative w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-secondary p-0.5 group hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Toggle theme"
          >
            <div className="w-full h-full rounded-xl bg-base-100 flex items-center justify-center overflow-hidden">
              <div
                className={`transform transition-transform duration-500 ${
                  theme === "light" ? "rotate-0" : "rotate-180"
                }`}
              >
                {theme === "light" ? (
                  <FiMoon className="text-xl text-primary group-hover:rotate-12 transition-transform duration-300" />
                ) : (
                  <FiSun className="text-xl text-primary group-hover:rotate-90 transition-transform duration-300" />
                )}
              </div>
            </div>
          </button>

          {/* Premium Resume Button with animated glow */}
          <a href={resume} download className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-60 group-hover:opacity-100 group-hover:blur-xl transition-all duration-300 animate-pulse group-hover:animate-none"></div>
            <button className="relative flex items-center gap-2 bg-base-100 hover:bg-gradient-to-r hover:from-primary hover:to-secondary text-primary hover:text-white px-5 py-2.5 rounded-full font-medium transition-all duration-300 border border-primary/20 hover:border-transparent hover:shadow-xl hover:shadow-primary/25 group-hover:scale-105 active:scale-95">
              <span className="hidden sm:inline">Resume</span>
              <RiDownloadCloud2Line className="text-xl group-hover:translate-y-0.5 group-hover:animate-bounce transition-transform duration-300" />
              <ChevronRight
                size={16}
                className="hidden sm:inline opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
              />
            </button>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown with staggered animations */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-base-100/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-8 invisible pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 hover:from-primary hover:to-secondary hover:text-white group transition-all duration-300 border border-primary/20 hover:border-transparent hover:shadow-xl hover:shadow-primary/25 transform hover:scale-105 active:scale-95"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? "fadeInUp 0.5s ease-out forwards" : "none",
                  opacity: 0, // start invisible, then fade in via animation
                }}
              >
                <span className="text-primary group-hover:text-white transition-colors group-hover:rotate-12 transform transition-transform">
                  {item.icon}
                </span>
                <span className="font-medium">{item.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Global animation keyframes – add to your global CSS if not present */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Navbar;