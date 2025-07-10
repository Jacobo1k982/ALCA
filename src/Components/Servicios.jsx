import React from 'react';

const Servicios = () => {
    const servicios = [
        {
            titulo: "Ropa Deportiva",
            descripcion: "Especialistas en fabricación de ropa deportiva como equipaciones Ciclistas, Triatlón y Running.",
            boton: "LEER MÁS",
            imagen: "/Imagen/Servicios/1.png"
        },
        {
            titulo: "Ropa Casual",
            descripcion: "Ideal para marcas de ropa que quieren impulsar su proyecto y buscar mayor calidad.",
            boton: "LEER MÁS",
            imagen: "/Imagen/Servicios/2.png"
        },
        {
            titulo: "Catálogo",
            descripcion: "Más de 100 patrones a tu disposición. Podrás escoger entre tejidos de máxima calidad.",
            boton: "LEER MÁS",
            imagen: "/Imagen/Servicios/3.png"
        },
        {
            titulo: "Fabricación a Medida",
            descripcion: "Crea tus propios patrones y diseña desde cero tu marca de ropa.",
            boton: "LEER MÁS",
            imagen: "/Imagen/Servicios/4.png"
        }
    ];

    return (
        <section className="relative py-16 bg-gray-100 px-4 sm:px-6 lg:px-8">
            {/* Imagen de fondo que cubre hasta la mitad de las cards */}
            <div className="absolute inset-x-0 top-0 h-2/3 bg-[url('/Imagen/Servicios/medio_fondo.webp')] bg-cover bg-center z-0"></div>

            {/* Contenido principal */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Título */}
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">NUESTROS SERVICIOS</h2>

                {/* Grid de cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicios.map((servicio, index) => (
                        <div key={index} className="group relative bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">

                            {/* Imagen superior del servicio */}
                            <div className="h-60 overflow-hidden">
                                <img
                                    src={servicio.imagen}
                                    alt={servicio.titulo}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Contenido de la card */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{servicio.titulo}</h3>
                                <p className="text-gray-600 mb-6 flex-grow">{servicio.descripcion}</p>

                                {/* Botón negro */}
                                <button className="w-full py-3 px-4 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-300 font-medium text-center">
                                    {servicio.boton}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;