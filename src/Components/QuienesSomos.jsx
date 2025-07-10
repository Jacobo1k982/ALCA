import React from 'react';

const QuienesSomos = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">ALCA TEXTIL</h2>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800">SOBRE NOSOTROS</h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Sección de texto */}
                    <div className="lg:w-1/2">
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Somos una empresa con más de 10 años de experiencia en el mundo textil, desde hace 6 años con unas instalaciones propias, donde se realiza todo el proceso partiendo de la materia prima hasta el empaquetado final e incluso con la posibilidad de envío a cliente final, trabajando con drop-shipping.
                            <br /><br />
                            Las instalaciones principales se encuentran en las proximidades de Zaragoza, donde contamos con máquinas de corte automático, corte manual, impresoras, calandra, máquinas de confección y por supuesto una zona de repasado, almacenaje y envío. Nos encargamos de todo el proceso.
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