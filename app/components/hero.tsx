"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/shawl1.jpg" // 👉 put your Kashmiri shawl image in public/shawl.jpg
          alt="Kashmiri Shawl"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Brand */}
          <div
            className={`font-bold transition-all duration-300 ${
              scrolled ? "text-lg text-gray-800" : "text-2xl text-white"
            }`}
          >
            Kashmir
          </div>

         {/* Desktop Links */}
<div className="hidden md:flex space-x-6">
  {[
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
  ].map((link) => (
    <Link
      key={link.name}
      href={link.href}
      className={`relative group transition-colors duration-300 ${
        scrolled ? "text-gray-800" : "text-white"
      }`}
    >
      {link.name}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}
</div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-lg py-4 space-y-4 animate-fadeIn">
            {["Home", "About", "Products"].map((name) => (
            <Link
                key={name}
                href={`/${name.toLowerCase()}`}
                className="text-gray-800 hover:underline transition-transform duration-300 hover:scale-105"
            >
                {name}
            </Link>
            ))}
        </div>
)}

      </nav>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-4 heros">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg font-serif">
         Wrap Yourself in Kashmiri Elegance
        </h1>
        <p className="text-white drop-shadow-lg font-mono">Handcrafted with Love, Inspired by Nature</p>
      </div>
    </div>
  );
}
