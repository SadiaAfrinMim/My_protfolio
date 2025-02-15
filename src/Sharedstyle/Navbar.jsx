import React, { useState, useEffect } from "react";
import { RiDownloadCloud2Line } from "react-icons/ri";
import resume from "../../src/assets/SADIA AFRIN MIM cv.pdf";
import sadia from "../../src/assets/sadia.png";
import { Home, User, BookOpen, Target, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  // localStorage থেকে থিম লোড করা
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // থিম টগল করার ফাংশন
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { icon: <Home size={20} />, text: "Home", href: "#home" },
    { icon: <User size={20} />, text: "About", href: "#about" },
    { icon: <Target size={20} />, text: "Skills", href: "#skills" },
    { icon: <BookOpen size={20} />, text: "Projects", href: "#project" },
    { icon: <Briefcase size={20} />, text: "Education", href: "#education" },
    { icon: <Mail size={20} />, text: "Contact", href: "#contact" },
  ];

  return (
    <header className="shadow-md sticky top-0 z-50">
      <nav className="navbar bg-base-100 font-bold">
        {/* Left Section: Logo & Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 space-y-2 w-52 p-2 shadow"
            >
              {navItems.map((item, index) => (
                <li key={index} className="bg-purple-600 text-white rounded-full">
                  <a
                    href={item.href}
                    className="flex items-center justify-center gap-2 px-3 text-center"
                  >
                    {item.icon} {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo */}
          <a href="/" className="inline-flex text-purple-600">
            <img className="w-20 rounded-md" src={sadia} alt="Logo" />
          </a>
        </div>

        {/* Center Section: Navigation for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4">
            {navItems.map((item, index) => (
              <li key={index} className="bg-purple-600 text-white rounded-full">
                <a href={item.href} className="flex items-center gap-2">
                  {item.icon} {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Theme Toggle & Resume Download */}
        <div className="navbar-end flex items-center gap-4">
          {/* Theme Toggle */}
          <label className="grid cursor-pointer place-items-center">
  <input
    type="checkbox"
    value="synthwave"
    onChange={toggleTheme} checked={theme === "dark"}
    className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
  <svg
    className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <svg
    className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

          {/* Resume Download Button */}
          <a href={resume} download>
            <button className="border items-center justify-center gap-2 inline-flex border-purple-700 text-purple-700 py-1 rounded-full px-4">
              Resume <RiDownloadCloud2Line className="text-2xl" />
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
