// Hero Component
import { HousePlus, MoveRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/container";

const Hero = () => {
  return (
    <section className="w-full bg-gray-50">
      <Container className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Ремонтно-Будівельна компанія <br />
              <span className="text-amber-500">PRO Remont</span>
            </h1>

            <ul className="space-y-6">
              {[
                "Співпрацюємо з безліччю архітектурних бюро та дизайн студій на постійній основі",
                "Маємо свій постійний штат профільного персоналу",
                "Виконуємо повний цикл робіт 'під ключ'",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-amber-500 text-2xl mr-4">+</span>
                  <p className="text-lg text-gray-700">{item}</p>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-lg bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors group"
              >
                <HousePlus className="transition-transform group-hover:scale-110" />
                <span>Залишити заявку</span>
              </Link>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden shadow-xl group">
            <Image
              src="https://www.vidbydova.com.ua/wp-content/uploads/2023/05/115_1_11zon-scaled-1.webp"
              alt="Будівельні роботи"
              width={800}
              height={600}
              className="object-cover w-full aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              priority
            />

            <Link href="/about" className="absolute inset-x-0 bottom-0">
              <div className="bg-gradient-to-t from-black/60 to-transparent h-32 flex items-end p-6">
                <div className="flex items-center group cursor-pointer">
                  <div className="bg-amber-500 w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 group-hover:w-52 overflow-hidden">
                    <MoveRight className="text-white transition-transform group-hover:translate-x-48" />
                    <span className="absolute text-white font-medium uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100 ml-1 whitespace-nowrap">
                      Детальніше про нас
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
