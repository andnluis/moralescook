import Image from "next/image";

export default function Catalogo() {
  return (
    <div className="py-12 bg-gray-50" id="catalogo">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Nuestro Catálogo de Productos</h1>
        <p className="mt-4 text-lg text-gray-700">
          Explora nuestras especialidades en cada categoría, diseñadas para hacer que tu evento sea un éxito rotundo.
        </p>
      </div>

      {/* Categoría: Boquitas */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Boquitas</h2>
        <p className="mt-2 text-gray-700">
          Una variedad de boquitas, perfectas para reuniones y celebraciones. Desde mini hamburguesas hasta opciones clásicas, tenemos algo para cada ocasión.
        </p>
        <div className="mt-4 space-x-4 overflow-x-auto flex">
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/boquitas1.JPEG"
              alt="Boquitas 1"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/boquitas2.JPEG"
              alt="Boquitas 2"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          {/* Agregar más imágenes según sea necesario */}
        </div>
      </div>

      {/* Categoría: Galletas */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Galletas</h2>
        <p className="mt-2 text-gray-700">
          Deliciosas galletas artesanales, perfectas para acompañar tus eventos o como un dulce detalle para tus invitados.
        </p>
        <div className="mt-4 space-x-4 overflow-x-auto flex">
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/galletas1.JPEG"
              alt="Galletas 1"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/galletas2.JPEG"
              alt="Galletas 2"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          {/* Agregar más imágenes según sea necesario */}
        </div>
      </div>

      {/* Categoría: Comidas */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Comidas: Desayunos/Cenas, Almuerzos y Meriendas</h2>
        <p className="mt-2 text-gray-700">
          Platos caseros llenos de sabor y tradición, elaborados con ingredientes frescos para que disfrutes de una experiencia gastronómica única.
        </p>
        <div className="mt-4 space-x-4 overflow-x-auto flex">
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/comidas1.JPEG"
              alt="Comidas 1"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/comidas2.JPEG"
              alt="Comidas 2"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          {/* Agregar más imágenes según sea necesario */}
        </div>
      </div>

      {/* Categoría: Catering */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Catering</h2>
        <p className="mt-2 text-gray-700">
          Servicio profesional de catering que combina presentación, puntualidad y exquisitez, diseñado para hacer de tu evento algo inolvidable.
        </p>
        <div className="mt-4 space-x-4 overflow-x-auto flex">
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/catering1.jpg"
              alt="Catering 1"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/catering2.jpg"
              alt="Catering 2"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          {/* Agregar más imágenes según sea necesario */}
        </div>
      </div>

      {/* Categoría: Pasteles */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-900">Pasteles</h2>
        <p className="mt-2 text-gray-700">
          Pasteles personalizados para cumpleaños, bodas y eventos especiales, decorados con estilo y llenos de sabor.
        </p>
        <div className="mt-4 space-x-4 overflow-x-auto flex">
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/pasteles1.JPEG"
              alt="Pasteles 1"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          <span className="inline-block w-64 h-64 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/services/pasteles2.JPEG"
              alt="Pasteles 2"
              width={256}
              height={256}
              className="object-cover w-full h-full"
            />
          </span>
          {/* Agregar más imágenes según sea necesario */}
        </div>
      </div>
    </div>
  );
}
