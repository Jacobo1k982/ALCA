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
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Somos una empresa de confecciones textil conformada por un equipo de trabajo con alto grado de profesionalismo y competitividad, dedicados a ofrecer la producción de prendas de vestir y complementos a pedido que demanda el mercado textil, basado en técnicas innovadoras, contando con maquinaria moderna y especializada en costura, contribuyendo a la mejora continua en la elaboración y control de cada proceso garantizando la calidad del producto para satisfacción de nuestros clientes.
                            <br /><br />
                            Las instalaciones principales se encuentran en San José, Pavas centro, donde contamos con máquinas de corte automático, corte manual, impresoras, máquinas de confección y por supuesto una zona de repasado, almacenaje y envío. Nos encargamos de todo el proceso.
                        </p>
                    </div>

                    {/* Sección de video (placeholder) */}
                    <div className="lg:w-1/2 w-full aspect-video bg-gray-600 rounded-lg overflow-hidden">
                        {/* Espacio reservado para video - reemplazar con tu componente de video */}
                        <div className="w-full h-full flex items-center justify-center bg-gray-300">
                            <p className="text-gray-500">Espacio para video</p>
                            <video className="w-full h-full" controls>
                                <source src="/Imagen/QuienesSomos/Fabrica-ALCA.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuienesSomos;