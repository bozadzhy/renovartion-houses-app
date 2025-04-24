"use client";
import React, { useState } from "react";
import Container from "@/components/ui/container";
import { PaperClipIcon, LocationMarkerIcon, PaperclipIcon, LocateIcon } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Тут можна додати логіку для відправки форми (наприклад, через API)
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <Container className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Зв'язатися з нами
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Маєте запитання чи пропозиції? Залиште повідомлення, і ми
            обов'язково відповімо!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Контактна форма */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            {isSubmitted ? (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Дякуємо за ваше повідомлення!
                </h3>
                <p className="text-gray-600">
                  Ми зв'яжемося з вами найближчим часом.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Ім'я
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Електронна пошта
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Повідомлення
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-amber-600 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-700 transition-colors duration-300"
                  >
                    Надіслати
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Контактна інформація */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Наші Контакти
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <LocateIcon className="w-6 h-6 text-amber-600" />
                <p className="text-gray-600">м. Київ, вул. Будівельників, 15</p>
              </div>
              <div className="flex items-center gap-3">
                <PaperclipIcon className="w-6 h-6 text-amber-600" />
                <p className="text-gray-600">info@remontpro.ua</p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-600">+38 (044) 123-4567</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Ми в соцмережах:
              </h4>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  {/* Facebook */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  {/* Instagram */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="..." /> {/* скорочено для читабельності */}
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  {/* Twitter */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="..." />
                  </svg>
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                >
                  {/* YouTube */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="..." />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactPage;
