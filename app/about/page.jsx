// components/about/AboutSection.tsx
import React from "react";
import Container from "@/components/ui/container";

const AboutUs = () => {
  return (
    <section className="bg-white py-20 px-4 border-t border-b border-gray-200">
      <Container className="max-w-5xl mx-auto">
        <div className="space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Про <span className="text-amber-600">RemontPro</span>
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Ми — команда професіоналів з більш ніж 10-річним досвідом у сфері
            ремонту квартир і будинків. Наша місія — забезпечити кожного клієнта
            комфортним, сучасним та якісним житлом, в якому приємно жити.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Компанія <strong>RemontPro</strong> працює з 2010 року і за цей час
            ми реалізували понад 500 успішних проєктів. Ми пропонуємо комплексні
            послуги — від дизайн-проєкту до оздоблювальних робіт "під ключ".
            Кожен проєкт ми виконуємо з любов’ю до деталей та турботою про ваш
            комфорт.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <h3 className="text-amber-600 text-3xl font-bold">500+</h3>
            <p className="text-gray-600">Успішних проєктів</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-amber-600 text-3xl font-bold">14 років</h3>
            <p className="text-gray-600">Досвіду у сфері ремонту</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-amber-600 text-3xl font-bold">5 років</h3>
            <p className="text-gray-600">Гарантії на всі роботи</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
