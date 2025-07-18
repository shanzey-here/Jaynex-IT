"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "../lib/hooks/useScrollPosition";

export default function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = useScrollPosition();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg"
          : "bg-white/95 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
        >
          JAYNEX IT
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="/"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t border-gray-100`}
      >
        <div className="px-4 py-6 space-y-4">
          <Link
            href="/"
            className="block text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="#services"
            className="block text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="#about"
            className="block text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            onClick={closeMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

