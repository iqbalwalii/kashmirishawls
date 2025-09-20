import Link from "next/link";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="mx-auto max-w-7xl px-6 md:flex md:justify-between md:items-start space-y-8 md:space-y-0">
        {/* Brand & Description */}
        <div className="md:w-1/3">
          <h3 className="text-2xl font-bold mb-4 text-white">Kashmir</h3>
          <p className="text-gray-400">
            Bringing the timeless beauty of Kashmiri shawls to your wardrobe. Handwoven, authentic, and full of heritage.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3">
          <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">About</Link>
            </li>
            <li>
              <Link href="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:w-1/3">
          <h4 className="text-xl font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><Instagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-white transition"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="hover:text-white transition"><Twitter className="h-6 w-6" /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kashmir Shawls. All rights reserved.
      </div>
    </footer>
  );
}
