import React from 'react';

const Servicios = () => {
    const servicios = [
        {
            titulo: "Uniformes deportivos",
            descripcion: "Especialistas en fabricación de ropa deportiva como equipaciones Ciclistas, Triatlón y Running.",
            boton: "LEER MÁS",
            imagen: "/Imagen/Servicios/1.png"
        },
        {
            titulo: "Uniformes industriales",
            descripcion: "Ideal para marcas de ropa que quieren impulsar su proyecto y buscar mayor calidad.",
            boton: "LEER MÁS",
            imagen: "/Imagen/Servicios/2.png"
        },
        {
            titulo: "Uniformes escolares",
            descripcion: "Más de 100 patrones a tu disposición. Podrás escoger entre tejidos de máxima calidad.",
            boton: "LEER MÁS",
            imagen: "/Imagen/Servicios/3.png"
        },
        {
            titulo: "Promocionales",
            descripcion: "Crea tus propios patrones y diseña desde cero tu marca de ropa.",
            boton: "LEER MÁS",
            imagen: "/Imagen/Servicios/4.png"
        }
    ];

    return (
        <section className="relative py-20 bg-white px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Fondo decorativo moderno */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-80 z-0"></div>

            {/* Elemento gráfico abstracto */}
            <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full bg-green-100 opacity-30 filter blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
            <div className="absolute left-0 bottom-1/3 w-80 h-80 rounded-full bg-emerald-100 opacity-20 filter blur-3xl translate-y-1/2 -translate-x-1/3 z-0"></div>

            {/* Contenido principal */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Encabezado mejorado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700">
                            NUESTROS SERVICIOS
                        </span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Soluciones textiles personalizadas para cada necesidad
                    </p>
                </div>

                {/* Grid de cards modernizado */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicios.map((servicio, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 hover:border-green-100"
                        >
                            {/* Contenedor de imagen con efecto */}
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={servicio.imagen}
                                    alt={servicio.titulo}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay de gradiente */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent"></div>
                            </div>

                            {/* Contenido de la card */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="mb-4">
                                    <div className="w-10 h-1 bg-gradient-to-r from-green-500 to-emerald-600 mb-3"></div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                                        {servicio.titulo}
                                    </h3>
                                </div>

                                <p className="text-gray-600 mb-6 flex-grow">
                                    {servicio.descripcion}
                                </p>

                                {/* Botón moderno */}
                                <button className="mt-auto w-full py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                                    <span>{servicio.boton}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Efecto hover sutil */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-100 rounded-xl pointer-events-none transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* CTA adicional */}
                <div className="text-center mt-16">
                    <button className="px-8 py-3.5 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl inline-flex items-center">
                        <span>Ver todos los servicios</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Servicios;