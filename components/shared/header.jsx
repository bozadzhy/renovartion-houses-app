"use client";
import React from "react";
import Link from "next/link";
import { HousePlus} from "lucide-react";
import Container from "@/components/ui/container";

// Header Component
const Header = () => {
  const navLinks = [
    { name: "Головна", href: "/" },
    { name: "Про нас", href: "/about" },
    { name: "Галерея", href: "/gallery" },
    { name: "Послуги", href: "/services" },
    { name: "Контакти", href: "/contacts" },
    { name: "Розрахувати ремонт", href: "/calculator" },
  ];

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <Container className="px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-amber-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <HousePlus className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-bold text-gray-900 hidden md:inline-block">
              <span className="text-amber-500">PRO</span> Remont
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 mx-1 text-sm font-medium rounded-lg transition-all duration-300 text-gray-700 hover:bg-gray-100/50 hover:text-gray-900"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/contacts"
            className="hidden md:flex items-center gap-2 px-6 py-3 text-sm bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors"
          >
            <HousePlus className="w-4 h-4" />
            <span>Зв'язатися</span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;