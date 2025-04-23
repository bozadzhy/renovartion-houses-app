"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./swiper-custom.css"; // Создайте этот файл для кастомных стилей

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

const SwiperSlider = () => {
  return (
    <section className="relative bg-gray-50 py-12">
      <Container className="max-w-7xl mx-auto">
        <div className="relative group">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
              bulletClass: "custom-swiper-bullet",
              bulletActiveClass: "custom-swiper-bullet-active",
            }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative h-[500px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-12">
                    <div className="text-white max-w-2xl transition-all duration-500 transform group-hover:translate-y-0 translate-y-6">
                      <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            <button
              className="custom-swiper-button-prev absolute left-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="custom-swiper-button-next absolute right-6 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm p-3 rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Custom Pagination */}
            <div className="custom-swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10" />
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default SwiperSlider;
