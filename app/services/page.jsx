import React from "react";
import Container from "@/components/ui/container";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Ремонт під ключ",
    description:
      "Повний комплекс будівельних та ремонтних робіт для вашого дому чи офісу.",
    icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 2,
    title: "Дизайн інтер'єру",
    description:
      "Створення стильних і функціональних інтер'єрів для будь-яких приміщень.",
    icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 3,
    title: "Екстер'єрні роботи",
    description:
      "Оздоблення фасадів, ландшафтні роботи та інші зовнішні ремонти.",
    icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 4,
    title: "Котеджне будівництво",
    description:
      "Проектування та будівництво котеджів за індивідуальними проектами.",
    icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 5,
    title: "Сантехнічні роботи",
    description: "Встановлення та ремонт сантехніки будь-якої складності.",
    icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
  },
  {
    id: 6,
    title: "Електромонтажні роботи",
    description:
      "Монтаж електричних мереж та обладнання згідно з усіма стандартами.",
    icon: <CheckCircle className="w-8 h-8 text-amber-600" />,
  },
];

const ServicesPage = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <Container className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Наші послуги
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Ми надаємо широкий спектр послуг для будь-якого типу ремонту і
            будівництва. Ось лише деякі з них:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-2xl shadow-md text-center"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-amber-600 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-700 transition-colors duration-300"
          >
            Зв'язатися з нами
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesPage;
