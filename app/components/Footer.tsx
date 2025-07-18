import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left side: Logo and contact info */}
        <div className="md:w-1/3">
          <Link href="/" className="inline-block mb-6">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              JaynexIT
            </div>
          </Link>
          <div className="text-slate-400 space-y-2">
            <p>Phone: <a href="tel:+92 319 0409030" className="hover:underline">+92 319 0409030</a></p>
            <p>Email: <a href="mailto:jaynex.tech28@gmail.com" className="hover:underline">jaynex.tech28@gmail.com</a></p>
          </div>
        </div>

        {/* Right side: Grids */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/web-development" className="hover:underline">Web Development</Link></li>
              <li><Link href="/ui-ux" className="hover:underline">UI/UX Design</Link></li>
              <li><Link href="/digital-media-managing" className="hover:underline">Digital Marketing</Link></li>
              <li><Link href="/web-content-writing" className="hover:underline">Content Writing</Link></li>
              <li><Link href="/buisness-development" className="hover:underline">Business Development</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="#about" className="hover:underline">About Us</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-slate-400">
              <li><Link href="/terms-of-service" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright and social icons */}
      <div className="max-w-6xl mx-auto px-8 mt-10 border-t border-slate-700 pt-6 text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 JaynexIT. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/jaynexit" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/company/jaynexit" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-white transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/jaynexit" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
