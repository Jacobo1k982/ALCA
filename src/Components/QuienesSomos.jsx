import React from 'react';

const QuienesSomos = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-green-600 mb-4">BORDADOS ALCA</h2>
                    <h3 className="text-2xs sm:text-3xl font-semibold text-green-800">SOBRE NOSOTROS</h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Sección de texto */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-700 text-lg leading-relaxed text-justify">
                            Somos una empresa de confecciones textil conformada por un equipo de trabajo con alto grado de profesionalismo y competitividad, dedicados a ofrecer la producción de prendas de vestir y complementos a pedido que demanda el mercado textil, basado en técnicas innovadoras, contando con maquinaria moderna y especializada en costura, contribuyendo a la mejora continua en la elaboración y control de cada proceso garantizando la calidad del producto para satisfacción de nuestros clientes.
                            <br /><br />
                            Las instalaciones principales se encuentran en San José, Pavas centro, donde contamos con máquinas de corte automático, corte manual, impresoras, máquinas de confección y por supuesto una zona de repasado, almacenaje y envío. Nos encargamos de todo el proceso.
                        </p>
                    </div>

                    {/* Sección de video */}
                    <div className="lg:w-1/2 w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                        {/* Contenedor de video con placeholder mientras carga */}
                        <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                            {/* Video real */}
                            <video
                                className="w-full h-full object-cover"
                                controls
                                playsInline
                                muted
                                preload="metadata"
                                poster="/Imagen/QuienesSomos/video-poster.jpg" // Añade una imagen miniatura
                            >
                                <source
                                    src="/Imagen/QuienesSomos/Fabrica-ALCA.mp4"
                                    type="video/mp4"
                                />
                                <source
                                    src="/Imagen/QuienesSomos/Fabrica-ALCA.webm"
                                    type="video/webm"
                                />
                                {/* Mensaje de fallback */}
                                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70">
                                    <div className="text-center p-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                                        </svg>
                                        <p className="font-medium">Tu navegador no soporta el elemento de video.</p>
                                        <p className="text-sm mt-1">Te recomendamos actualizar tu navegador.</p>
                                        <a
                                            href="/Imagen/QuienesSomos/Fabrica-ALCA.mp4"
                                            className="inline-block mt-3 px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded text-sm font-medium transition-colors"
                                            download
                                        >
                                            Descargar video
                                        </a>
                                    </div>
                                </div>
                            </video>

                            {/* Overlay de carga */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 video-loading-overlay">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;