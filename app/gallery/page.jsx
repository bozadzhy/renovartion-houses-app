"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import { X } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg",
    title: "Якісний ремонт під ключ",
    description: "Повний комплекс будівельних та ремонтних робіт",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    title: "Сучасні дизайнерські рішення",
    description: "Реалізуємо найсміливіші дизайн-проекти",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    title: "Професійна команда",
    description: "Досвідчені майстри з багаторічним стажем",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg",
    title: "Екстер'єрні роботи",
    description: "Якісне оздоблення фасадів та територій",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg",
    title: "Внутрішнє оздоблення",
    description: "Елітні матеріали для інтер'єрних робіт",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg",
    title: "Котеджне будівництво",
    description: "Індивідуальні проекти замовників",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg",
    title: "Офісні приміщення",
    description: "Сучасні рішення для бізнесу",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    title: "Дизайн інтер'єрів",
    description: "Авторські проекти від наших дизайнерів",
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg",
    title: "Сантехнічні роботи",
    description: "Монтаж комунікацій будь-якої складності",
  },
  {
    id: 10,
    image:
      "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg",
    title: "Генпідряд",
    description: "Комплексне будівництво об'єктів",
  },
  {
    id: 11,
    image:
      "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
    title: "Ремонт під ключ",
    description: "Від чорнової до чистової обробки",
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg",
    title: "Електромонтаж",
    description: "Безпечні та сучасні електричні мережі",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <section className="bg-gray-50 py-20 px-4">
      <Container className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Галерея <span className="text-amber-600">проєктів</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Оберіть ідеї для свого ремонту серед наших прикладів.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {slides.map(({ id, image, title, description }) => (
            <div
              key={id}
              className="rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button
                className="absolute top-2 right-2 text-white hover:text-amber-400"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage}
                  alt="Selected"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Gallery;
