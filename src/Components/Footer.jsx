import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaWhatsapp, FaChevronUp } from 'react-icons/fa6';
import { motion } from 'framer-motion'; // Necesitarás instalar framer-motion

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 3000);
        }
    };

    const socialLinks = [
        { icon: <FaFacebookF />, url: "#", color: "hover:text-[#1877F2]" },
        { icon: <FaInstagram />, url: "#", color: "hover:text-[#E4405F]" },
        { icon: <FaXTwitter />, url: "#", color: "hover:text-[#000000]" },
        { icon: <FaYoutube />, url: "#", color: "hover:text-[#CD201F]" },
        { icon: <FaWhatsapp />, url: "https://wa.me/50670799463", color: "hover:text-[#25D366]" }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white font-sans w-full overflow-hidden">
            {/* Efecto de partículas */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-[#00e0c7] rounded-full"
                        style={{
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%'
                        }}
                        animate={{
                            y: [0, (Math.random() * 100) - 50],
                            x: [0, (Math.random() * 40) - 20],
                            opacity: [0.2, 1, 0.2]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10">
                {/* Sección de suscripción */}
                <div className="bg-gradient-to-r from-[#03b532] to-[#0099e0] py-8 px-4 md:px-10">
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900">¡Mantente actualizado!</h3>
                            <p className="text-gray-800">Suscríbete para recibir nuestras promociones y novedades</p>
                        </div>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Tu correo electrónico"
                                className="px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 w-full"
                                required
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium whitespace-nowrap"
                            >
                                {subscribed ? '¡Gracias!' : 'Suscribirme'}
                            </motion.button>
                        </form>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                        {/* Logo y descripción */}
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                className="flex items-center gap-3"
                            >
                                <div className="">
                                    <img href="/logo.png" src="/logo.png" alt="Logo ALCA" className="h-8 w-auto" />
                                </div>
                            </motion.div>
                            <p className="text-gray-400">Expertos en bordados de alta calidad y personalización textil en Costa Rica.</p>

                            {/* Redes sociales */}
                            <div className="flex gap-4 text-xl pt-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-2 bg-gray-800 rounded-full ${social.color} transition-colors`}
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Enlaces rápidos */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-[#00e0c7]">Enlaces Rápidos</h3>
                            <ul className="space-y-3">
                                {['Inicio', 'Servicios', 'Galería', 'Nosotros', 'Contacto'].map((item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{ x: 5 }}
                                    >
                                        <a href="#" className="hover:text-[#00e0c7] transition-colors">{item}</a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Servicios */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-[#00e0c7]">Nuestros Servicios</h3>
                            <ul className="space-y-3">
                                {['Bordado digital', 'Serigrafía', 'Sublimación', 'Uniformes', 'Merchandising'].map((service) => (
                                    <motion.li
                                        key={service}
                                        whileHover={{ x: 5 }}
                                    >
                                        <a href="#" className="hover:text-[#00e0c7] transition-colors">{service}</a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Contacto */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-[#00e0c7]">Contacto</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#00e0c7] mt-1">📍</span>
                                    <span>Pavas, San José, Costa Rica</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#00e0c7]">📞</span>
                                    <a href="tel:+50640312474" className="hover:text-[#00e0c7] transition-colors">(+506) 4031-2474</a>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-[#00e0c7]">✉️</span>
                                    <a href="mailto:info@bordadosalca.com" className="hover:text-[#00e0c7] transition-colors">info@bordadosalca.com</a>
                                </li>
                                <li className="flex items-center gap-3 pt-4">
                                    <a
                                        href="https://wa.me/50670799463"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#25D366] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#128C7E] transition-colors"
                                    >
                                        <FaWhatsapp /> WhatsApp
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pie inferior */}
                <div className="border-t border-gray-700 pt-6 pb-8 px-4 md:px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <span className="text-gray-400 text-sm">© {new Date().getFullYear()} Bordados ALCA. Todos los derechos reservados.</span>

                        <div className="flex gap-4 text-sm">
                            <a href="#" className="hover:text-[#00e0c7] transition-colors">Términos de servicio</a>
                            <a href="#" className="hover:text-[#00e0c7] transition-colors">Política de privacidad</a>
                            <a href="#" className="hover:text-[#00e0c7] transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botón flotante de WhatsApp */}
            <motion.a
                href="https://wa.me/50670799463"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <FaWhatsapp className="text-2xl" />
            </motion.a>
        </footer>
    );
};

export default Footer;