import React from "react";
import Link from "next/link";
import Container from "@/components/ui/container";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-16 px-4 border-t border-gray-200">
      <Container className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Логотип і копірайт */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900">
              Remont<span className="text-amber-600">Pro</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Якісний ремонт квартир і будинків з 2010 року
            </p>
            <p className="text-gray-500 text-xs">
              &copy; {year} RemontPro. Всі права захищено.
            </p>
          </div>

          {/* Навігація */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Послуги</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-600 hover:text-amber-600 transition-colors duration-300">
                Головна
              </Link>
              <Link href="/repair" className="block text-gray-600 hover:text-amber-600 transition-colors duration-300">
                Ремонт під ключ
              </Link>
              <Link href="/design" className="block text-gray-600 hover:text-amber-600 transition-colors duration-300">
                Дизайн інтер'єру
              </Link>
              <Link href="/materials" className="block text-gray-600 hover:text-amber-600 transition-colors duration-300">
                Матеріали
              </Link>
            </nav>
          </div>

          {/* Контакти */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Контакти</h4>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                м. Київ, вул. Будівельників, 15
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@remontpro.ua
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +38 (044) 123-4567
              </p>
            </div>
          </div>

          {/* Соцмережі */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Ми в соцмережах</h4>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com" target="_blank" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com" target="_blank" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
                </svg>
              </Link>
              <Link href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 5.1a4.28 4.28 0 001.32 5.71 4.27 4.27 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 004 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.72 8.72 0 0024 5.5a8.5 8.5 0 01-2.54.7z" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com" target="_blank" className="text-gray-600 hover:text-amber-600 transition-colors duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16.1 5 12 5 12 5s-4.1 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.8.1 7.6.1 7.6.1s4.1 0 6.9-.1c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM9.75 15.02v-6.04L15.5 12l-5.75 3.02z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          <p>RemontPro — професійний ремонт квартир і будинків під ключ. Гарантія якості 5 років.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
