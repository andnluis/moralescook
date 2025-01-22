import Image from "next/image";

export default function Catalogo() {
  return (
    <div className="mx-16 py-12" id="catalogo">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Nuestro Catálogo de Productos</h1>
        <p className="mt-4 text-lg text-gray-700">
          Explora nuestras especialidades en cada categoría, diseñadas para hacer que tu evento sea un éxito rotundo.
        </p>
        <p className="mt-4 text-bold text-lg text-rose-700">
        Para consultar el precio de cada producto o servicio, te invitamos a ponerte en contacto con nosotros.<br></br> Estaremos encantados de brindarte toda la información que necesites y ayudarte a elegir la opción perfecta para tu evento.
        </p>
      </div>

      {/* Categoría: Boquitas */}
      <div className="mb-16" id="boquitas">
        <h2 className="text-3xl font-semibold text-gray-900">Boquitas</h2>
        <p className="mt-2 text-gray-700">
          Una variedad de boquitas, perfectas para reuniones y celebraciones. Desde mini hamburguesas hasta opciones clásicas, tenemos algo para cada ocasión.
        </p>
          <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">

          <div className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/minihamburguesa.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Mini Hamburguesa</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Pequeñas hamburguesas gourmet con carne jugosa y acompañamientos frescos. Un bocado que encanta a todos.
            </p>
          </div>
          <div  className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/tartaletas.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Tartaletas</h3>

            <p className="mt-2 max-w-sm text-gray-700">
              Crujientes bases de masa rellenas de crema y frutas frescas. Elegancia y sabor en cada bocado.
            </p>
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/donas.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Donas</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Esponjosas y decoradas con glaseados y toppings irresistibles. Ideales para alegrar cualquier reunión.
            </p>
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/empanada.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Empanadas</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Masa dorada y crujiente rellena con opciones dulces o saladas. Un clásico que nunca pasa de moda.
            </p>
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/minipizza.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Mini Pizzas</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Versión en miniatura de la clásica pizza, con sabores variados y perfectas para compartir.
            </p>
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/roles.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Roles de Canela</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Suaves rollos de canela con glaseado dulce que derrite corazones. El toque perfecto para cualquier ocasión.
            </p>
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/chocoflan.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Chocoflan</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Una irresistible combinación de pastel de chocolate y flan cremoso. La mezcla perfecta de texturas y sabores.
            </p>
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/cupcake.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Cupcakes</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Esponjosos pastelitos decorados con glaseado y detalles personalizados. Ideales para cumpleaños o eventos especiales.
            </p>
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/boquitas/chilenas.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Galletas Chilenas</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Deliciosas galletas rellenas de dulce de leche y espolvoreadas con azúcar glass. Perfectas para endulzar cualquier momento especial.
            </p>
          </div>
        </div>
      </div>

      {/* Categoría: Galletas */}
      <div className="mb-16" id="galletas">
        <h2 className="text-2xl font-semibold text-gray-900">Galletas</h2>
        <p className="mt-2 text-gray-700">
          Deliciosas galletas artesanales, perfectas para acompañar tus eventos o como un dulce detalle para tus invitados.
        </p>
      
        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="block">
            <Image
              alt=""
              src="/catalogo/galletas/b1.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/galletas/b2.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/galletas/b3.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/galletas/b4.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/galletas/b5.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          
        </div>


      </div>

      {/* Categoría: Comidas */}
      <div className="mb-16" id="comidas">
        <h2 className="text-2xl font-semibold text-gray-900">Comidas: Desayunos/Cenas, Almuerzos y Meriendas</h2>
        <p className="mt-2 text-gray-700">
          Platos caseros llenos de sabor y tradición, elaborados con ingredientes frescos para que disfrutes de una experiencia gastronómica única.
        </p>
        <h3 className="text-xl font-semibold my-2">Desayunos y Cenas</h3>
        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/dyc/d1.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Panqueques</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Pequeñas hamburguesas gourmet con carne jugosa y acompañamientos frescos. Un bocado que encanta a todos.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/dyc/d2.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Burritas</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Pequeñas hamburguesas gourmet con carne jugosa y acompañamientos frescos. Un bocado que encanta a todos.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/dyc/d3.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Baleadas</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Pequeñas hamburguesas gourmet con carne jugosa y acompañamientos frescos. Un bocado que encanta a todos.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/dyc/d4.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Cena</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Pequeñas hamburguesas gourmet con carne jugosa y acompañamientos frescos. Un bocado que encanta a todos.
            </p>
          </div>

          {/* Agregar más imágenes según sea necesario */}
        </div>
        <h3 className="text-xl font-semibold my-4">Almuerzos</h3>
        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/albondigas.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Albondigas de res con pasta</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Jugosas albóndigas en salsa de tomate con pasta al dente, acompañadas de una ensalada fresca y ligera.

            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/albondigas2.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Albondigas de res con arroz</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Jugosas albóndigas en salsa de tomate, servidas con arroz esponjoso y una ensalada fresca. 

            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/chuleta.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Chuleta de cerdo con tajadas</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Tiernas chuletas de res sazonadas a la perfección, acompañadas de crujientes tajadas de plátano.

            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/clubs.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Club sándwich</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Delicioso club sándwich con capas de jamón, pollo, queso y vegetales frescos, acompañado de crujientes papas fritas.

            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/espaguetti.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Espaguetti con carne molida</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Espagueti al dente mezclado con una deliciosa salsa de tomate y carne molida bien sazonada. 

            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/filete.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Filete de pescado</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Suave filete de pescado a la plancha, servido con arroz esponjoso y una ensalada fresca.

            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/lasagna.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lasagna tradicional</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Lasagna con ensalada. Capas de pasta rellenas de carne, queso y salsa, acompañadas de una fresca ensalada.

            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/lasagna2.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lasagna de pollo</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Capas de pasta rellenas de pollo desmenuzado, salsa cremosa y queso derretido
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/papahorneada.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Papa al horno</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Papa tierna horneada, cubierta con queso derretido y jamón, una combinación perfecta de sabor y textura.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/papahorneada2.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Papa al horno</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Papa asada acompañada de una ensalada fresca y crujiente, servida con delicioso pan de ajo. Una opción vegetariana sabrosa y ligera.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/pollo1.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Pollo en salsa</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Jugoso pollo cocinado a la perfección en una suave y sabrosa salsa, ideal para acompañar con arroz o papas.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/pollohongos.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Pollo en salsa de hongos</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Delicado pollo bañado en una cremosa salsa de hongos, perfecta para acompañar con arroz o pasta. 
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/polloplancha.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Pollo a la plancha</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Pollo magro cocinado a la plancha, bajo en grasa y lleno de sabor. Ideal para una opción saludable.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/pollorelleno.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Pollo a la plancha</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Piezas de pollo rellena de ingredientes frescos y sabrosos.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/sandwich.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Sandwich de jamón</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Sándwich clásico de jamón, queso y vegetales frescos, acompañado de crujientes papas fritas. Una opción rápida y deliciosa.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/tacos.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Tacos</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Crujientes tacos fritos rellenos de pollo sazonado, acompañados de cebolla, cilantro y salsa fresca. 
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/tipico3.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Carne Asada</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Carne asada acompañada de frijoles negros, queso fresco y un fresco chismol.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/comidas/almuerzos/yuca.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Yuca con chicharrón</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Suave yuca acompañada de crujiente chicharrón, una combinación clásica y sabrosa.
            </p>
          </div>
        </div>
      </div>

      {/* Categoría: Pasteles */}
      <div className="mb-16" id="pasteles">
        <h2 className="text-2xl font-semibold text-gray-900">Pasteles</h2>
        <p className="mt-2 text-gray-700">
          Pasteles personalizados para cumpleaños, bodas y eventos especiales, decorados con estilo y llenos de sabor.
        </p>
        

        <h1 className="mt-2 text-gray-700">Opciones de Pasteles</h1>
  <ol className="mt-2 text-gray-700 list-disc">
    <li>Pastel para 3 personas</li>
    <li>Pastel para 10 personas</li>
    <li>Pastel para 15 personas</li>
    <li>Pastel para 20 personas</li>
    <li>Pastel para 25 personas</li>
    <li>Pastel para 30 personas</li>
    <li>Pastel para 40 personas</li>
    <li>Pastel para 50 personas</li>
  </ol>
        <h3 className="text-xl font-semibold my-2">Pasteles Helados</h3>
        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">

        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/helados/cheesecake.JPEG"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Cheesecake</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Delicioso cheesecake cremoso, disponible en sabores de fresa o maracuyá, con una base crujiente y un toque dulce.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/helados/tresleches.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Tres Leches</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Esponjoso pastel empapado en una mezcla de tres leches.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/helados/chocoflan.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Chocoflan</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Un delicioso pastel de chocolate combinado con flan cremoso, creando una perfecta mezcla de texturas y sabores.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/helados/chvainilla.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Chocoflan de Vainilla</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Un suave pastel de vainilla combinado con flan cremoso.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/helados/chcafe.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Chocoflan de Café</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Un suave pastel con sabor a café combinado con flan cremoso.
            </p>
          </div>

        </div>

        <h3 className="text-xl font-semibold my-2">Pasteles Tradicionales</h3>
        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">
          
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p1.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p2.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p3.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p4.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p5.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p6.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p7.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p8.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p9.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p10.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p11.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p12.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p13.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p14.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
          <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/tradicionales/p15.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        </div>
         
        <h3 className="text-xl font-semibold my-2">Pasteles de Boda</h3>
        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/boda/b1.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/boda/b2.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/boda/b3.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/boda/b4.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/pasteles/boda/b5.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />
          </div>
        </div>
      </div>
      

      <div className="mb-16" id="catering">
        <h2 className="text-2xl font-semibold text-gray-900">Servicio de Catering</h2>
        <p className="mt-2 text-gray-700">
          Servicio profesional de catering que combina presentación, puntualidad y exquisitez, diseñado para hacer de tu evento algo inolvidable.
        </p>
        <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-5">
          
          
        <div className="block">
            <Image
              alt=""
              src="/catalogo/catering/casis.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Catering Asistido</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Este servicio incluye un experto que se encarga de servir la comida a tus invitados, asegurando que cada plato sea entregado de manera impecable. Además, proporcionamos cristalería elegante y calentadores para mantener la comida a la temperatura perfecta durante todo el evento. Ideal para ocasiones especiales donde se busca una experiencia completa y de alta calidad.
            </p>
          </div>
        <div className="block">
            <Image
              alt=""
              src="/catalogo/catering/csolo.jpg"
              width={300}
              height={300}
              className="h-64 w-full object-cover sm:h-80 lg:h-96"
            />

            <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Catering Autogestionado</h3>

            <p className="mt-2 max-w-sm text-gray-700">
            Si prefieres servir las boquitas por ti mismo, este servicio es perfecto para ti. La comida se entrega ya sellada y lista para disfrutar, permitiendo que los anfitriones se encarguen de organizar y servir. Con esta opción, tienes la flexibilidad de controlar cómo se presenta la comida mientras disfrutas de una opción más práctica y conveniente.


            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
