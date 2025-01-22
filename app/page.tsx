"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next'

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = 10;

  // Cambiar la imagen cada 5 segundos
  useEffect(() => {    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000); // 5 segundos
    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [totalImages]);

  const backgroundImage = `/hero/h${currentImageIndex + 1}.jpg`;

 

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
            Nuestra promesa de calidad
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Desde 2019, en Morales Cook nos especializamos en convertir cada
            evento en una experiencia inolvidable. Con recetas caseras y un
            compromiso inquebrantable con la excelencia, trabajamos para superar
            tus expectativas en cada bocado. Tu evento es nuestra prioridad, y
            estamos aquí para asegurarnos de que cada detalle sea perfecto.
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
            src="/promesa/p1.jpg"
            alt="Promesa 1"
            width={200}
            height={200}
            className="object-cover rounded shadow-lg"
          />
          <Image
            src="/promesa/p2.jpg"
            alt="Promesa 2"
            width={200}
            height={200}
            className="object-cover rounded shadow-lg"
          />
          <Image
            src="/promesa/p3.jpg"
            alt="Promesa 3"
            width={200}
            height={200}
            className="object-cover rounded shadow-lg"
          />
          <Image
            src="/promesa/p4.jpg"
            alt="Promesa 4"
            width={200}
            height={200}
            className="object-cover rounded shadow-lg"
          />
        </div>
      </div>


{/** Sección de servicios */}
<div className="px-6 py-12" id="servicios">
  {/* Título y descripción */}
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
      Nuestros servicios
    </h2>
    <p className="text-lg text-gray-700 my-4">
      Descubre nuestras especialidades, diseñadas para hacer de tu evento algo inolvidable.<br></br>
      Desde deliciosos platillos hasta presentaciones impecables, tenemos algo para todos.
    </p>
  </div>

  {/* Contenedor de tarjetas */}
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
    {/* Tarjeta 1 */}
    <a
      href="/catalogo/#boquitas"
      className="relative block rounded-tr-3xl border border-gray-100 bg-white shadow-sm"
    >
      <Image
        src="/services/boquitas.JPEG"
        alt="Boquitas"
        className="h-80 w-full rounded-tr-3xl object-cover"
        width={1200}
        height={640}
      />
      <div className="p-4 text-center">
        <strong className="text-xl font-medium text-gray-900">Boquitas</strong>
        <p className="mt-2 text-gray-700">
          Una variedad de boquitas, ideales para reuniones y celebraciones. 
        </p>
        <span className="mt-4 block rounded-md border border-rose-900 bg-rose-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-rose-900">
          Ver catálogo
        </span>
      </div>
    </a>

    {/* Tarjeta 2 */}
    <a
      href="/catalogo/#comidas"
      className="relative block rounded-tr-3xl border border-gray-100 bg-white shadow-sm"
    >
      <Image
        src="/services/comidas.JPEG"
        alt="Comidas"
        className="h-80 w-full rounded-tr-3xl object-cover"
        width={1200}
        height={640}
      />
      <div className="p-4 text-center">
        <strong className="text-xl font-medium text-gray-900">Comidas</strong>
        <p className="mt-2 text-gray-700">
          Platos caseros llenos de sabor y tradición, elaborados con ingredientes frescos.
        </p>
        <span className="mt-4 block rounded-md border border-rose-900 bg-rose-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-rose-900">
          Ver catálogo
        </span>
      </div>
    </a>

    {/* Tarjeta 3 */}
    <a
      href="/catalogo/#pasteles"
      className="relative block rounded-tr-3xl border border-gray-100 bg-white shadow-sm"
    >
      <Image
        src="/services/pasteles.JPEG"
        alt="Pasteles"
        className="h-80 w-full rounded-tr-3xl object-cover"
        width={1200}
        height={640}
      />
      <div className="p-4 text-center">
        <strong className="text-xl font-medium text-gray-900">Pasteles</strong>
        <p className="mt-2 text-gray-700">
          Personalizados para cumpleaños, bodas y eventos especiales.
        </p>
        <span className="mt-4 block rounded-md border border-rose-900 bg-rose-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-rose-900">
          Ver catálogo
        </span>
      </div>
    </a>

    {/* Tarjeta 4 */}
    <a
      href="/catalogo/#catering"
      className="relative block rounded-tr-3xl border border-gray-100 bg-white shadow-sm"
    >
      <Image
        src="/services/catering.jpg"
        alt="Catering"
        className="h-80 w-full rounded-tr-3xl object-cover"
        width={1200}
        height={640}
      />
      <div className="p-4 text-center">
        <strong className="text-xl font-medium text-gray-900">Catering</strong>
        <p className="mt-2 text-gray-700">
          Servicio profesional que combina presentación, puntualidad y exquisitez.
        </p>
        <span className="mt-4 block rounded-md border border-rose-900 bg-rose-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-rose-900">
          Ver catálogo
        </span>
      </div>
    </a>

    {/* Tarjeta 5 */}
    <a
      href="/catalogo/#galletas"
      className="relative block rounded-tr-3xl border border-gray-100 bg-white shadow-sm col-span-1 md:col-span-2 lg:col-span-1 justify-self-stretch"
    >
      <Image
        src="/services/galletas.JPEG"
        alt="Galletas"
        className="h-80 w-full rounded-tr-3xl object-cover"
        width={1200}
        height={640}
      />
      <div className="p-4 text-center">
        <strong className="text-xl font-medium text-gray-900">Galletas</strong>
        <p className="mt-2 text-gray-700">
          Deliciosas galletas artesanales, perfectas para eventos o detalles especiales.
        </p>
        <span className="mt-4 block rounded-md border border-rose-900 bg-rose-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-rose-900">
          Ver catálogo
        </span>
      </div>
    </a>
  </div>
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
              Reseñas en <strong><a href="https://www.facebook.com/moralescook22/reviews">Facebook</a></strong>
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

      {/** Sección de FAQ */}
<div className="flex flex-col items-center justify-center px-4 text-center">
  <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-6">
    <Image
      src={`/faq/faq${currentImageIndex + 1}.jpg`}
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
        {[
          {
            question: "¿Con cuánta anticipación debo hacer mi pedido?",
            answer:
              "Todos los pedidos deben realizarse con al menos dos días de anticipación.",
          },
          {
            question: "¿Cuál es el área de cobertura para sus servicios de catering?",
            answer: "Ofrecemos nuestro servicio únicamente en Tegucigalpa, Honduras.",
          },
          {
            question: "¿Cómo puedo hacer un pedido?",
            answer:
              "Puedes hacer tu pedido a través de WhatsApp o por cualquiera de nuestras redes sociales.",
          },
          {
            question: "¿Ofrecen opciones para dietas específicas (sin gluten, veganas, etc.)?",
            answer:
              "Sí contamos con opciones vegetarianas. Nuestro enfoque sigue siendo brindar comida casera con los mejores ingredientes tradicionales.",
          },
          {
            question: "¿Qué métodos de pago se aceptan?",
            answer:
              "Efectivo y transferencias bancarias en BAC y Banco de Occidente.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-lg bg-gray-50 p-4 w-full max-w-2xl mx-auto"
          >
            <button
              type="button"
              className="flex items-center justify-between w-full text-left"
            >
              <h2 className="font-medium text-gray-900">{item.question}</h2>
              <svg
                className="h-5 w-5 text-gray-500 transform group-focus:-rotate-180 transition"
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
            </button>
            <div className="mt-4 hidden group-focus-within:block">
              <p className="leading-relaxed text-gray-700">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

</>);
}
