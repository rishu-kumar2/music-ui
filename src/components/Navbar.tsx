'use client';

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Our Courses", href: "/courses" },
    { name: "Contact Us", href: "/contact" },
  ];

  const courseSubMenu = [
    { name: "All Courses", href: "/courses" },
    { name: "Basic Music Theory", href: "/interface-design" },
    { name: "Advanced Composition", href: "/seo" },
  ];

  return (
    <div
      className={cn(
        "fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[90%] max-w-5xl bg-opacity-40 backdrop-blur-lg p-4 rounded-xl shadow-lg z-50 bg-slate-900/[1] transition-all duration-300",
        className,
        isMenuOpen ? "rounded-b-xl" : "rounded-xl"
      )}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-extrabold text-2xl tracking-wide hover:text-teal-400 transition-colors">
          MusicArts
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "text-white text-lg font-medium transition-all duration-300 hover:text-teal-200",
                  {
                    "text-teal-400 font-bold": active === item.name,
                  }
                )}
                onMouseEnter={() => setActive(item.name)}
                onMouseLeave={() => setActive(null)}
              >
                {item.name}
              </Link>

              {/* Dropdown for Our Courses */}
              {item.name === "Our Courses" && (
                <div className="absolute top-full left-0 bg-slate-800 bg-opacity-95 backdrop-blur-md rounded-lg shadow-xl py-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 pointer-events-none group-hover:pointer-events-auto min-w-[200px]">
                  {courseSubMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-6 py-2 text-white text-sm hover:bg-slate-700 hover:text-teal-300 transition-all"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Call to Action */}
        <Link
          href="/sing"
          className="hidden md:block bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-teal-400 hover:scale-105 transition-all duration-300"
        >
          Get Started
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 border-t border-slate-700 pt-4 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <Link
                    href={item.href}
                    className="text-white text-lg font-medium hover:text-teal-400 transition-colors px-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {/* Mobile Submenu for Our Courses */}
                  {item.name === "Our Courses" && (
                    <div className="pl-4 mt-2 border-l-2 border-slate-700 ml-2 flex flex-col space-y-2">
                      {courseSubMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="text-slate-300 text-sm hover:text-teal-300 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Link
                  href="/sing"
                  className="block w-full text-center bg-teal-500 text-white px-5 py-3 rounded-xl text-md font-bold shadow-md hover:bg-teal-400 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
