"use client";
import React, { useState } from "react";

const RepairCalculator = () => {
  // Состояния для каждого поля калькулятора
  const [roomType, setRoomType] = useState("living-room");
  const [area, setArea] = useState(20); // Площадь в м²
  const [material, setMaterial] = useState("standard");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [totalCost, setTotalCost] = useState(0);

  // Цены для разных типов помещений и материалов
  const prices = {
    roomTypes: {
      "living-room": 300, // цена за м² для жилой комнаты
      kitchen: 350,
      bathroom: 400,
      bedroom: 280,
    },
    materials: {
      standard: 1000, // Цена за использование стандартных материалов
      premium: 1500, // Цена за использование премиум материалов
      luxury: 2000, // Цена за использование люксовых материалов
    },
  };

  // Функция для расчета общей стоимости
  const calculateCost = () => {
    const roomCost = prices.roomTypes[roomType] * area;
    const materialCost = prices.materials[material];
    const total = roomCost + materialCost;
    setTotalCost(total);
    setIsSubmitted(true);
  };

  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Калькулятор ремонта
        </h2>

        <div className="mb-4">
          <label htmlFor="roomType" className="block text-gray-700">
            Тип помещения
          </label>
          <select
            id="roomType"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none"
          >
            <option value="living-room">Гостиная</option>
            <option value="kitchen">Кухня</option>
            <option value="bathroom">Ванная</option>
            <option value="bedroom">Спальня</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="area" className="block text-gray-700">
            Площадь помещения (м²)
          </label>
          <input
            type="number"
            id="area"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            min="1"
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="material" className="block text-gray-700">
            Тип материалов
          </label>
          <select
            id="material"
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none"
          >
            <option value="standard">Стандартные</option>
            <option value="premium">Премиум</option>
            <option value="luxury">Люкс</option>
          </select>
        </div>

        <div className="text-center">
          <button
            onClick={calculateCost}
            className="bg-amber-600 text-white px-6 py-3 rounded-full text-lg hover:bg-amber-700 transition-colors duration-300"
          >
            Рассчитать
          </button>
        </div>

        {isSubmitted && (
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              Общая стоимость ремонта:
            </h3>
            <p className="text-lg text-gray-700">{totalCost} грн</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepairCalculator;
