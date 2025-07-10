import React, { useState, useRef } from 'react';

const QuienesSomos = () => {
    // Estados para el video
    const videoRef = useRef(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

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
                            Somos una empresa de confecciones textil conformada por un equipo de trabajo con alto grado de profesionalismo y competitividad, dedicados a ofrecer la producción de prendas de vestir y complementos a pedido que demanda el mercado textil, basado en técnicas innovadoras, contando con maquinaria moderna y especializada en costura, contribuyendo a la mejora continua en la elaboración y control de cada proceso garantizando la calidad del producto para satisfacción de nuestros clientes.
                            <br /><br />
                            Las instalaciones principales se encuentran en San José, Pavas centro, donde contamos con máquinas de corte automático, corte manual, impresoras, máquinas de confección y por supuesto una zona de repasado, almacenaje y envío. Nos encargamos de todo el proceso.
                        </p>
                    </div>

                    {/* Sección de video mejorada */}
                    <div className="lg:w-1/2 w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                        <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900">
                            {/* Video con manejo de estados */}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                controls
                                playsInline
                                muted
                                preload="metadata"
                                poster="/logoverde.jpg"
                                onLoadedData={() => setIsVideoLoaded(true)}
                                onError={() => setHasError(true)}
                            >
                                <source
                                    src="/Imagen/QuienesSomos/Fabrica-ALCA.mp4"
                                    type="video/mp4"
                                />
                                {/*<source
                                    src="/logoverde.jpg"
                                    type="video/jpg"
                                />*/}
                                {/* Mensaje de fallback para navegadores que no soportan video */}
                                <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70">
                                    Tu navegador no soporta videos HTML5.
                                </div>
                            </video>

                            {/* Overlay de carga (solo visible mientras carga) */}
                            {!isVideoLoaded && !hasError && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
                                </div>
                            )}

                            {/* Mensaje de error (si falla la carga) */}
                            {hasError && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white p-4 text-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <p className="font-medium">Error al cargar el video</p>
                                        <p className="text-sm mt-1">Por favor intenta recargar la página.</p>
                                        <a
                                            href="/Imagen/QuienesSomos/Fabrica-ALCA.mp4"
                                            className="inline-block mt-3 px-4 py-2 bg-green-600 hover:bg-green-700 rounded text-sm font-medium transition-colors"
                                            download
                                        >
                                            Descargar video
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;