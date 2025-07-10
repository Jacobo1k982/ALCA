import React, { useState } from "react";
import { FaWhatsapp, FaUser, FaEnvelope, FaHeading, FaComment, FaPhone } from "react-icons/fa";

const Contactanos = () => {
    const [enviado, setEnviado] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const nombre = e.target.nombre.value;
        const email = e.target.email.value;
        const asunto = e.target.asunto.value;
        const mensaje = e.target.mensaje.value;

        const telefono = "50670799463"; // Número actualizado según tu proyecto
        const texto = `Hola, soy *${nombre}*.\nMi correo es: ${email}\nAsunto: ${asunto}\nMensaje: ${mensaje}`;
        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

        // Simulamos un pequeño delay para mejor UX
        setTimeout(() => {
            window.open(url, "_blank");
            e.target.reset();
            setEnviado(true);
            setIsLoading(false);

            setTimeout(() => setEnviado(false), 4000);
        }, 1000);
    };

    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00e0c7] to-emerald-600"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#00e0c7] rounded-full filter blur-3xl opacity-10"></div>
            <div className="absolute top-20 left-1/4 w-40 h-40 bg-emerald-500 rounded-full filter blur-3xl opacity-5"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00e0c7] to-emerald-400">
                            Agendar asesoría gratuita
                        </span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Completa el formulario y te redireccionaremos a WhatsApp para continuar con tu consulta
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Información de contacto (opcional) */}
                    <div className="space-y-6">
                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-[#00e0c7] mb-4">Información de contacto</h3>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-3">
                                    <FaWhatsapp className="text-[#00e0c7] mt-1" />
                                    <span>(+506) 7079-9463</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaPhone className="text-[#00e0c7] mt-1" />
                                    <span>(+506) 4031-2474</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <FaEnvelope className="text-[#00e0c7] mt-1" />
                                    <span>info@alca.com</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-semibold text-[#00e0c7] mb-4">Horario de atención</h3>
                            <p className="text-gray-300">Lunes a Viernes: 7:30 AM - 5:00 PM</p>
                        </div>
                    </div>

                    {/* Formulario mejorado */}
                    <form onSubmit={handleSubmit} className="bg-gray-800/70 border border-gray-700 p-6 rounded-xl space-y-5 shadow-xl backdrop-blur-sm">
                        {enviado && (
                            <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white px-4 py-3 rounded-lg text-center animate-fade-in">
                                ¡Mensaje preparado para enviar por WhatsApp!
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="text-gray-400 text-sm" />
                                </div>
                                <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Nombre completo"
                                    required
                                    className="bg-gray-900/50 border border-gray-600 focus:border-[#00e0c7] px-4 py-3 pl-9 rounded-lg text-white text-sm outline-none w-full transition-colors"
                                />
                            </div>

                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="text-gray-400 text-sm" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    required
                                    className="bg-gray-900/50 border border-gray-600 focus:border-[#00e0c7] px-4 py-3 pl-9 rounded-lg text-white text-sm outline-none w-full transition-colors"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <FaHeading className="text-gray-400 text-sm" />
                            </div>
                            <input
                                type="text"
                                name="asunto"
                                placeholder="Asunto"
                                required
                                className="bg-gray-900/50 border border-gray-600 focus:border-[#00e0c7] px-4 py-3 pl-9 rounded-lg text-white text-sm outline-none w-full transition-colors"
                            />
                        </div>

                        <div className="relative">
                            <div className="absolute top-3 left-3">
                                <FaComment className="text-gray-400 text-sm" />
                            </div>
                            <textarea
                                rows="5"
                                name="mensaje"
                                placeholder="Tu mensaje..."
                                required
                                className="bg-gray-900/50 border border-gray-600 focus:border-[#00e0c7] px-4 py-3 pl-9 rounded-lg text-white text-sm outline-none w-full resize-none transition-colors"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-gradient-to-r from-[#00e0c7] to-emerald-600 hover:from-[#00d0b7] hover:to-emerald-500 px-6 py-3 text-white font-semibold rounded-lg text-sm flex items-center gap-2 justify-center transition-all duration-300 transform hover:scale-[1.02] shadow-lg ${isLoading ? 'opacity-80' : ''}`}
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span>Preparando mensaje...</span>
                                </>
                            ) : (
                                <>
                                    <FaWhatsapp className="text-lg" />
                                    <span>Enviar por WhatsApp</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Animaciones CSS */}
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </section>
    );
};

export default Contactanos;