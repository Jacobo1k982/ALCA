import React, { useState } from 'react';

const TejidosTecnicos = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const tejidos = [
        {
            nombre: "Poliéster",
            descripcion: "Resistente y elástica, ideal para deportes de alto rendimiento",
            imagen: "/Imagen/Telas/poliester.webp"
        },
        {
            nombre: "Elastano",
            descripcion: "Suave y transpirable, con certificación ecológica",
            imagen: "/Imagen/Telas/elastano.webp"
        },
        {
            nombre: "Poliamida",
            descripcion: "Sostenible y duradero, fabricado con materiales reciclados",
            imagen: "/Imagen/Telas/poliamida.webp"
        },
        {
            nombre: "Sion",
            descripcion: "Antibacteriano natural y termorregulador",
            imagen: "/Imagen/Telas/sion.jpg"
        }
    ];

    return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-white overflow-hidden">

            <div className="max-w-7xl mx-auto relative">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-700">
                            TEJIDOS TÉCNICOS
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto mb-6">
                        Los mejores tejidos técnicos para tu marca de ropa
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto"></div>
                </div>

                {/* Descripción */}
                <p className="text-center text-lg text-gray-500 max-w-4xl mx-auto mb-16 leading-relaxed">
                    Trabajamos con los mejores tejidos del mercado para asegurar una fabricación textil de máxima calidad
                </p>

                {/* Grid de tejidos - Versión mejorada */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tejidos.map((tejido, index) => (
                        <div
                            key={index}
                            className="relative aspect-square rounded-xl shadow-lg overflow-hidden"
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                            onTouchStart={() => setActiveIndex(activeIndex === index ? null : index)}
                        >
                            {/* Imagen de fondo */}
                            <img
                                src={tejido.imagen}
                                alt={tejido.nombre}
                                className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                            />

                            {/* Overlay oscuro */}
                            <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${activeIndex === index ? 'opacity-40' : 'opacity-20'}`}></div>

                            {/* Contenido */}
                            <div className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${activeIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{tejido.nombre}</h3>
                                <p className="text-white/90 drop-shadow-md">{tejido.descripcion}</p>
                            </div>

                            {/* Nombre siempre visible (versión mínima) */}
                            <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'opacity-0' : 'opacity-100'}`}>
                                <h3 className="text-2xl font-bold text-white text-center px-4 drop-shadow-lg">{tejido.nombre}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-16 flex justify-center">
                    <button className="mt-auto w-50 py-3 px-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-800 transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center justify-center space-x-2">
                        Conoce más sobre nuestros tejidos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TejidosTecnicos;