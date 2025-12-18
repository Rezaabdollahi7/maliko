"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowDownToLine, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "قابلیت‌ها", href: "#features" },
    { name: "چطور کار می‌کنه؟", href: "#how-it-works" },
    { name: "امنیت", href: "#security" },
    { name: "درباره ما", href: "#about" },
    { name: "تماس با ما", href: "#contact" },
  ];

  return (
    <header className="container mx-auto mt-4 rounded-lg lg:rounded-full bg-white/95 backdrop-blur-md shadow-sm">
      <nav className=" px-4 lg:px-5">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#0e60c9] to-[#0a4fa0] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl lg:text-2xl font-bold">
                M
              </span>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-[#404040]">
              مالیکو
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#404040] hover:text-[#0e60c9] transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="#download"
              className="bg-[#0e60c9] text-white flex gap-4 items-center px-6 py-3 rounded-3xl font-bold hover:bg-[#0a4fa0] transition-all hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <span>دانلود مالیکو</span>
              <ArrowDownToLine />
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#404040] hover:text-[#0e60c9] transition-colors"
            aria-label="منوی موبایل"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-gray-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#404040] hover:text-[#0e60c9] transition-colors font-medium py-2 px-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#0e60c9] text-white flex gap-3 items-center justify-center px-6 py-3 rounded-3xl font-bold hover:bg-[#0a4fa0] transition-all mt-2"
              >
                <span>دانلود مالیکو</span>
                <ArrowDownToLine className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
