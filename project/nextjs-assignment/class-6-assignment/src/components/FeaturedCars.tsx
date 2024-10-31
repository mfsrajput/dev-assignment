// components/FeaturedCars.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cars } from "./CarData";

export default function FeaturedCars() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Popular");

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-orange-400 ${i < rating ? "" : "opacity-50"}`}
      >
        ★
      </span>
    ));
  };

  const handleCarClick = (route: string) => {
    router.push(`/cars/${route}`);
  };

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Featured New Cars</h2>

        <div className="flex justify-center space-x-4 mb-8">
          {["Popular", "Upcoming", "Newly Launched"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cars.map((car) => (
            <div
              key={car.route}
              className="p-4 bg-white border border-gray-200 rounded-lg text-left cursor-pointer"
              onClick={() => handleCarClick(car.route)}
            >
              <Image
                src={car.imageUrl}
                alt={car.name}
                width={300}
                height={200}
                className="w-full h-36 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{car.name}</h3>
              <p className="text-green-500 font-semibold">{car.price}</p>
              <div className="flex items-center mt-2">
                {renderStars(car.rating)}
                <span className="text-gray-500 ml-2">
                  {car.reviews} Reviews
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="#" className="text-blue-600 hover:underline">
            View All New Cars
          </a>
        </div>
      </div>
    </section>
  );
}
