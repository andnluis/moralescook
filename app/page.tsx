"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 50;

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000); // 5 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [totalImages]);

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-50">
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-6">
        {/* Imagen dinámica */}
        <Image
          src={`/boquitas/b${currentImageIndex + 1}.jpg`}
          width={500}
          height={500}
          alt={`Boquita ${currentImageIndex + 1}`}
          className="rounded shadow-lg"
          />
        {/* Contenido */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 md:text-4xl">
            Sabores Únicos para momentos especiales
          </h1>
          <h2 className="mt-4 text-lg text-gray-600 md:text-xl">
            Morales Cook es tu aliado perfecto para todo tipo de eventos en Tegucigalpa.
          </h2>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-yellow-300 lg:flex-row lg:items-start">
      {/* Left Side: Text Content */}
      <div className="w-full max-w-lg mb-8 text-left lg:mb-0 lg:mr-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nuestra Promesa de Calidad
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          En Morales Cook trabajamos con ingredientes frescos y recetas caseras.
        </p>
        <p className="text-lg text-gray-700">
          Tu evento es nuestra prioridad, y nuestra misión es superar tus expectativas en cada bocado.
        </p>
      </div>

      {/* Right Side: Image Grid */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-3xl">
        {/* Example images: Replace with your image paths */}
        <Image
          src="/catering/c2.jpg"
          alt="Promesa 1"
          width={200}
          height={200}
          className="object-cover rounded shadow-lg"
        />
        <Image
          src="/catering/c7.jpg"
          alt="Promesa 2"
          width={200}
          height={200}
          className="object-cover rounded shadow-lg"
        />
        <Image
          src="/catering/c6.jpg"
          alt="Promesa 3"
          width={200}
          height={200}
          className="object-cover rounded shadow-lg"
        />
        <Image
          src="/catering/c10.jpg"
          alt="Promesa 4"
          width={100}
          height={200}
          className="object-cover rounded shadow-lg"
        />
      </div>
    </div>
    </>
  );
}
