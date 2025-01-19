"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from "swiper/modules";

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
      {/*Sección Principal, sección heroe*/}
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:max-h-screen lg:items-center lg:px-8">
          <div className="bg-white rounded p-8 max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Sabores únicos para{" "}
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Momentos especiales.{" "}
              </strong>
            </h1>
            <p className="text-left mt-4 max-w-lg sm:text-xl/relaxed">
              <strong>Morales Cook</strong> es tu aliado perfecto para todo tipo
              de eventos en Tegucigalpa. Permítenos deleitarte con nuestras
              deliciosas boquitas y pasteles.
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
      <div
        className="flex flex-col items-center justify-center px-6 py-6 bg-yellow-200 lg:flex-row lg:items-start"
        id="promesa"
      >
        {/* Left Side: Text Content */}
        <div className="w-full max-w-lg mb-8 text-left mt-6 lg:mb-0 lg:mr-8">
          <h1 className="text-4xl font-bold font-extrabold text-gray-800 mb-4">
            Nuestra Promesa de Calidad
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Desde 2019, en Morales Cook nos especializamos en convertir cada
            evento en una experiencia inolvidable. Con recetas caseras y un
            compromiso inquebrantable con la excelencia, trabajamos para superar
            tus expectativas en cada bocado. Tu evento es nuestra prioridad, y
            estamos aquí para asegurarnos de que cada detalle sea perfecto.
          </p>
          <p className="text-lg text-gray-700">
            Tu evento es nuestra prioridad, y nuestra misión es superar tus
            expectativas en cada bocado.
          </p>
          <Image
            src="/firma.png"
            alt="Firma de Dueña"
            width={300}
            height={300}
            className="ml-auto"
          />
        </div>

        {/* Right Side: Image Grid */}
        <div className="mt-12 grid grid-cols-4 gap-4 w-full max-w-3xl">
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

      {/** Sección de Servicios usando snap*/}

      <div className="my-8 px-4 border-x-8 px-8" id="servicios">
        <h2 className="text-4xl font-bold font-extrabold text-gray-800 mb-4 text-center my-8">
          Nuestros Servicios
        </h2>

        <Swiper
          modules={[Navigation]} // Import Navigation module
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default: show one slide on small screens
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1, // Show 1 slide on small screens (mobile)
            },
            768: {
              slidesPerView: 2, // Show 2 slides on medium screens (tablet)
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on large screens (desktop)
            },
          }}
          className="!px-4"
          navigation={true} // Enable navigation buttons
        >
          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/catering/c7.jpg"
                alt="Catering"
                className="w-full h-auto object-cover rounded-lg p-4"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold">Catering</h3>
                <p className="text-sm">
                  Servicio completo de catering para tu evento.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/comidas/a2.jpg"
                alt="Comidas"
                className="w-full h-auto object-cover rounded-lg p-4"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold">Comidas</h3>
                <p className="text-sm">
                  Platos exquisitos para todo tipo de ocasión.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/boquitas/b3.jpg"
                alt="Boquitas"
                className="w-full h-auto object-cover rounded-lg p-4"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold">Boquitas</h3>
                <p className="text-sm">
                  Las mejores boquitas para tus eventos.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/pasteles/p33.jpg"
                alt="Pasteles"
                className="w-full h-auto object-cover rounded-lg p-4"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-xl font-bold">Pasteles</h3>
                <p className="text-sm">
                  Pasteles frescos y deliciosos para tu celebración.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/** Sección de Referencias */}

      <div
        className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
        id="referencias"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Confianza y calidad comprobadas
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            En Morales Cook, nuestra trayectoria nos respalda.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-rose-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Reseñas en Facebook
            </dt>

            <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">
              100%
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-rose-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Años de Experiencia
            </dt>

            <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">
              6
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-rose-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Seguidores en Redes Sociales
            </dt>

            <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">
              2,900
            </dd>
          </div>

          <div className="flex flex-col rounded-lg bg-rose-50 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">
              Eventos atendidos
            </dt>

            <dd className="text-4xl font-extrabold text-rose-600 md:text-5xl">
              100+
            </dd>
          </div>
        </dl>
      </div>

      {/**Sección de FAQ */}
      <div className="flex flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-6">
          <Image
            src={`/boquitas/b${currentImageIndex + 1}.jpg`}
            width={350}
            height={350}
            alt={`Boquita ${currentImageIndex + 1}`}
            className="rounded shadow-lg"
          />
          <div className="flex flex-col items-center py-8 px-4">
            {/* Título de la sección */}
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Preguntas Frecuentes
            </h1>
            {/* Contenedor de las preguntas */}
            <div className="space-y-4 w-full max-w-3xl">
              <details
                className="group border border-gray-200 rounded-lg [&_summary::-webkit-details-marker]:hidden"
                open
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">
                    ¿Con cuánta anticipación debo hacer mi pedido?
                  </h2>
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  Todos los pedidos deben realizarse con al menos{" "}
                  <strong>dos días de anticipación</strong>.
                </p>
              </details>
              <details className="group border border-gray-200 rounded-lg [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                  <h2 className="font-medium">
                    ¿Cuál es el área de cobertura para sus servicios de
                    catering?
                  </h2>
                  <svg
                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  Ofrecemos nuestro servicio únicamente en Tegucigalpa,
                  Honduras.
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 px-4 leading-relaxed text-gray-700">
                  Puedes hacer tu pedido a través de nuestro formulario web o
                  por WhatsApp.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
