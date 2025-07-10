import React, { useState } from 'react';

const TecnicasTextiles = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const tecnicas = [
    {
      nombre: "Bordados",
      subtitulo: "",
      descripcion: "Tecnología de tejido avanzado para máxima durabilidad",
      imagen: "/Imagen/Bordado/p-bordado.webp"
    },
    {
      nombre: "Serigrafía",
      subtitulo: "",
      descripcion: "Materiales ultraligeros para máximo rendimiento",
      imagen: "/Imagen/Bordado/serigrafia.jpg"
    },
    {
      nombre: "Sublimación",
      subtitulo: "",
      descripcion: "Técnica de tejido transpirable para confort superior",
      imagen: "/Imagen/Bordado/sublimacion.png"
    },
    {
      nombre: "Poliflex",
      subtitulo: "",
      descripcion: "Técnica de tejido transpirable para confort superior",
      imagen: "/Imagen/Bordado/poliflex.jpg"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2 md:mb-4">TÉCNICAS DE ESTAMPADO</h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-green-700 mb-4 md:mb-6">Ayudamos a impulsar tu marca</h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Las mejores técnicas textiles para conseguir la mejor calidad de tu marca.
          </p>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-300 w-16 md:w-24 mx-auto mb-8 md:mb-16"></div>

        {/* Contenedor de tarjetas unidas - Versión móvil (vertical) */}
        <div className="md:hidden flex flex-col items-center h-[70vh] space-y-4">
          {tecnicas.map((tecnica, index) => (
            <div
              key={index}
              className={`relative w-full transition-all duration-500 ease-in-out overflow-hidden
                ${hoveredIndex === index ? 'h-[60%]' : 'h-[20%]'}
                group`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Imagen */}
              <img
                src={tecnica.imagen}
                alt={`Técnica ${tecnica.nombre}`}
                className="w-full h-full object-cover"
              />

              {/* Overlay de texto */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300
                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-white">{tecnica.nombre}</h3>
                <p className="text-lg md:text-xl text-white mb-1 md:mb-2">{tecnica.subtitulo}</p>
                <p className="text-white text-sm md:text-base mt-2 md:mt-4">{tecnica.descripcion}</p>
              </div>

              {/* Texto mínimo visible siempre */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                text-center transition-opacity duration-300
                ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-xl md:text-2xl font-bold text-white">{tecnica.nombre.charAt(0)}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Contenedor de tarjetas unidas - Versión desktop (horizontal) */}
        <div className="hidden md:flex justify-center">
          <div className="relative flex flex-row items-center h-[500px]">
            {tecnicas.map((tecnica, index) => (
              <div
                key={index}
                className={`relative h-full transition-all duration-500 ease-in-out overflow-hidden
                  ${hoveredIndex === index ? 'w-[400px]' : 'w-[200px]'}
                  ${index !== 0 ? '-ml-16 md:-ml-28' : ''}
                  group`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Imagen */}
                <img
                  src={tecnica.imagen}
                  alt={`Técnica ${tecnica.nombre}`}
                  className="w-full h-full object-cover"
                />

                {/* Overlay de texto */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent 
                  flex flex-col justify-end p-6 transition-opacity duration-300
                  ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <h3 className="text-3xl font-bold text-white">{tecnica.nombre}</h3>
                  <p className="text-xl text-white mb-2">{tecnica.subtitulo}</p>
                  <p className="text-white mt-4">{tecnica.descripcion}</p>
                </div>

                {/* Texto mínimo visible siempre */}
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                  text-center transition-opacity duration-300
                  ${hoveredIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                  <h3 className="text-2xl font-bold text-white">{tecnica.nombre.charAt(0)}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TecnicasTextiles;