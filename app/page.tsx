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

  const backgroundImage = `/boquitas/b${currentImageIndex + 1}.jpg`;

  return (
    <>
      {/*Sección Principal, sección heroe*/ }
       <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="bg-white rounded p-8 max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
            Sabores únicos para <strong className="block font-extrabold text-rose-700"> Momentos especiales. </strong>
            </h1>
            <p className="text-left mt-4 max-w-lg sm:text-xl/relaxed">
            Morales Cook es tu aliado perfecto para todo tipo de eventos en Tegucigalpa. Permítenos deleitarte con nuestras deliciosas boquitas y pasteles.
            </p>
            <div className="mt-8 flex flex-wrap gap-1 text-center content-evenly">
              <a
                href="https://wa.link/bs28ik"
                className="flex items-center w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                <Image 
                  src="/wa-logo.png"
                  alt="Whatsapp Logo"
                  width={20}
                  height={20}
                  className="mr-2" // Espaciado entre la imagen y el texto
                />
                <strong>Contactanos</strong>
              </a>
            </div>
          </div>
        </div>
      </section>

    {/*  Promesa de Calidad*/}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-6 bg-yellow-300 lg:flex-row lg:items-start">
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
        <div className="grid grid-cols-4 gap-4 w-full max-w-3xl">
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
            src="/catering/c10.jpg"
            alt="Promesa 3"
            width={200}
            height={200}
            className="object-cover rounded shadow-lg"
          />
          <Image
            src="/catering/c5.jpg"
            alt="Promesa 4"
            width={200}
            height={200}
            className="object-cover rounded shadow-lg"
          />
        </div>
      </div>

    {/**Sección de Servicios */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100 lg:flex-row lg:items-start">
      <section className="px-6 py-12 bg-gray-100">
        {/* Section Title */}
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-8">
          Nuestros Servicios
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <a href="#" className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              alt="Servicio 1"
              src="/catering/c6.jpg"
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Servicio de Catering
              </h3>
              <p className="mt-2 text-gray-700">
                Boquitas elegantes y prácticas para impresionar a tus invitados.
              </p>
            </div>
          </a>

          {/* Service 2 */}
          <a href="#" className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              alt="Servicio 2"
              src="/comidas/a2.jpg"
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Almuerzos y Desayunos.
              </h3>
              <p className="mt-2 text-gray-700">
                Sabores irresistibles. Cada platillo no solo es delicioso, sino también visualmente atractivo.
              </p>
            </div>
          </a>

          {/* Service 3 */}
          <a href="#" className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <Image
              alt="Servicio 3"
              src="/pasteles/p33.jpg"
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Respostería
              </h3>
              <p className="mt-2 text-gray-700">
                Una experiencia culinaria que complementa tu día especial. Diseñados a tu medida.
              </p>
            </div>
          </a>
        </div>
      </section>  
      </div>
    
    {/**Sección de FAQ */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gray-100">
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-6">
          <Image
            src={`/boquitas/b${currentImageIndex + 1}.jpg`}
            width={350}
            height={350}
            alt={`Boquita ${currentImageIndex + 1}`}
            className="rounded shadow-lg"
          />          
          <div className="flex flex-col items-center py-8 px-4 bg-gray-100">
            {/* Título de la sección */}
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">Preguntas Frecuentes</h1>
            {/* Contenedor de las preguntas */}
            <div className="space-y-4 w-full max-w-3xl">
              <details className="group border border-gray-200 rounded-lg [&_summary::-webkit-details-marker]:hidden" open>
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">¿Con cuánta anticipación debo hacer mi pedido?</h2>
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  Todos los pedidos deben realizarse con al menos <strong>dos días de anticipación</strong>.
                </p>
              </details>          
              <details className="group border border-gray-200 rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary
                  className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                  <h2 className="font-medium">¿Cuál es el área de cobertura para sus servicios de catering?</h2>
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                Ofrecemos nuestro servicio únicamente en Tegucigalpa, Honduras.
                </p>
              </details>          
              <details className="group border border-gray-200 rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">¿Cómo puedo hacer un pedido?</h2>
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  Puedes hacer tu pedido a través de nuestro formulario web o por WhatsApp.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
