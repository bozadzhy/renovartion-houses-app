import Image from "next/image";
import Button from "../ui/button";

const MainProjects = () => {
  const gridItems = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Жилой комплекс 'Зеленые холмы'",
    },
    {
      id: 2,
      text: "Специализируемся на комплексном строительстве жилых и коммерческих объектов под ключ. Наш опыт - более 15 лет успешной работы на рынке недвижимости.",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/804392/pexels-photo-804392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Офисный центр 'Бизнес Плаза'",
    },
    {
      id: 4,
      text: "Используем инновационные технологии в ремонте и отделке: 3D-визуализация, smart-материалы, экологичные решения и интеллектуальные системы управления.",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/6764263/pexels-photo-6764263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Коттеджный поселок 'Лесная гавань'",
    },
    {
      id: 6,
      text: "Работаем только с сертифицированными материалами от проверенных поставщиков. Гарантия качества на все виды работ - 5 лет.",
    },
    {
      id: 7,
      image:
        "https://images.pexels.com/photos/3887428/pexels-photo-3887428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Реставрация исторического здания",
    },
    {
      id: 8,
      text: "В нашей команде - архитекторы, дизайнеры и строители с профильным образованием и многолетним опытом. Средний стаж специалистов - 8 лет.",
    },
    {
      id: 9,
      image:
        "https://images.pexels.com/photos/8481710/pexels-photo-8481710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Торгово-развлекательный центр 'Галактика'",
    },
  ];

  return (
    <section className="bg-gray-50 py-20 px-4 mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Наши проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реализованные работы и профессиональные решения в строительстве и
            ремонте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridItems.map((item) => (
            <div
              key={item.id}
              className={`
                relative group overflow-hidden rounded-xl shadow-lg transition-all duration-500
                ${
                  item.image
                    ? "aspect-[4/3]"
                    : "flex items-center justify-center bg-white p-8"
                }
                ${
                  item.id === 2 || item.id === 4
                    ? "md:col-span-2 lg:col-span-1"
                    : ""
                }
                hover:shadow-2xl hover:-translate-y-2
              `}
            >
              {item.image ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={item.image}
                    alt={item.title || ""}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {item.title && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                        {item.title}
                      </h3>
                      <div className="w-12 h-1 bg-amber-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200" />
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center">
                  <div className="text-amber-500 text-4xl mb-4">
                    {item.id === 2 && "🏗️"}
                    {item.id === 4 && "⚡"}
                    {item.id === 6 && "🏆"}
                    {item.id === 8 && "👷"}
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button>Показать все проекты</Button>
        </div>
      </div>
    </section>
  );
};

export default MainProjects;
