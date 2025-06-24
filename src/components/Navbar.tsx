'use client';

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Our Courses", href: "/courses" },
    { name: "Contact Us", href: "/contact" },
    // { name: "Sign Up", href: "/sing" },
  ];

  const courseSubMenu = [
    { name: "All Courses", href: "/courses" },
    { name: "Basic Music Theory", href: "/interface-design" },
    { name: "Advanced Composition", href: "/seo" },
    // { name: "Song Writing", href: "/branding" },
    // { name: "Music Production", href: "/production" },
  ];

  return (
    <div
      className={cn(
        "fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-opacity-40 backdrop-blur-lg p-4 rounded-xl shadow-lg z-50 bg-slate-900/[1]"  ,
        className
      )}
      // style={{ background: "rgba(0, 0, 0, 0.6)" }} // Transparent background
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white font-extrabold text-2xl">
          MusicArts
        </Link>

        {/* Menu */}
        <nav className="flex items-center space-x-6">
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
                <div className="absolute top-full left-0 bg-slate-800 bg-opacity-90 rounded-lg shadow-lg py-3 opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transform transition-all duration-300 ">
                  {courseSubMenu.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.href}
                      className="block px-6 py-2 text-white text-sm hover:bg-slate-700 transition-all"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Call to Action */}
        <Link
          href="/sing"
          className="bg-teal-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-teal-400 transition-all"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
