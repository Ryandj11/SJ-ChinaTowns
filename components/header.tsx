"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-chinese-red flex items-center justify-center mr-2">
              <span className="text-white font-bold">SJ</span>
            </div>
            <span
              className={`text-xl font-serif font-bold ${
                isScrolled ? "text-chinese-red" : "text-chinese-red"
              }`}
            >
              SJ Chinatowns
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#about-chinatowns"
              className={`font-medium hover:text-chinese-red transition-colors ${
                isScrolled ? "text-gray-700" : "text-chinese-red"
              }`}
            >
              About
            </Link>
            <Link
              href="#map"
              className={`font-medium hover:text-chinese-red transition-colors ${
                isScrolled ? "text-gray-700" : "text-chinese-red"
              }`}
            >
              Map
            </Link>
            <Link
              href="#timeline"
              className={`font-medium hover:text-chinese-red transition-colors ${
                isScrolled ? "text-gray-700" : "text-chinese-red"
              }`}
            >
              Timeline
            </Link>
            <Link
              href="#chinatowns"
              className={`font-medium hover:text-chinese-red transition-colors ${
                isScrolled ? "text-gray-700" : "text-chinese-red"
              }`}
            >
              The Five Chinatowns
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? "text-gray-700" : "text-chinese-red"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-3 bg-white rounded-lg mt-2 shadow-lg">
            <Link
              href="#about-chinatowns"
              className="block text-gray-700 hover:text-chinese-red transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#map"
              className="block text-gray-700 hover:text-chinese-red transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Map
            </Link>
            <Link
              href="#timeline"
              className="block text-gray-700 hover:text-chinese-red transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </Link>
            <Link
              href="#chinatowns"
              className="block text-gray-700 hover:text-chinese-red transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              The Five Chinatowns
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
