import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null); // Cerrar submenús al abrir/cerrar el menú móvil
    };

    const handleSubmenuHover = (menuName) => {
        setActiveSubmenu(menuName);
    };

    const handleSubmenuLeave = () => {
        setActiveSubmenu(null);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Datos del menú con submenús
    const menuItems = [
        {
            name: "Uniformes",
            submenu: [
                { name: "Deportivo", url: "#deportiva" },
                { name: "Estudiantil", url: "#estudiantil" },
                { name: "Industrial", url: "#empresarial" },
                { name: "Promocionales", url: "#promocionales" }
            ]
        },
        {
            name: "Técnicas",
            submenu: [
                { name: "Bordado", url: "#bordado" },
                { name: "Serigrafía", url: "#serigrafia" },
                { name: "Sublimación", url: "#sublimacion" },
                { name: "Poliflex", url: "#poliflex" },
                { name: "DTF", url: "#dtf" }
            ]
        },
        {
            name: "Catálogos",
            url: "#catalogos"
        },
        {
            name: "Contacto",
            url: "/contact"
        }
    ];

    return (
        <header className="w-full relative">
            {/* Barra superior de contacto con iconos */}
            <div className="bg-black text-[#00e0c7] py-1 px-0 flex flex-wrap justify-center md:justify-between items-center border-b border-green-800 gap-2 md:gap-0">
                <div className="flex items-center space-x-1 text-xs sm:text-xm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-[#00e0c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Pavas, Centro</span>
                </div>

                <div className="flex items-center space-x-1 text-xs sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-[#00e0c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(+506) 4031-2474</span>
                </div>

                <div className="flex items-center space-x-1 text-xs sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-[#00e0c7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@alca.com</span>
                </div>

                {/* Iconos de redes sociales */}
                <div className="flex space-x-3 ml-auto md:ml-0">
                    <a href="#" className="text-[#00e0c7] hover:text-amber-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                        </svg>
                    </a>
                    <a href="#" className="text-[#00e0c7] hover:text-amber-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                    <a href="https://wa.me/50670799463" target="_blank" rel="noopener noreferrer" className="text-[#00e0c7] hover:text-amber-400 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.515 5.132 1.521 3.453.005 6.259-2.806 6.263-6.26.005-3.453-2.811-6.259-6.265-6.262-3.451-.003-6.257 2.808-6.26 6.262-.001 1.898.66 3.738 1.865 5.168l-1.122 4.178 4.187-1.107zm-3.582-6.397c-.156-.25-.244-.54-.244-.834 0-.155.048-.31.154-.434.206-.232.547-.326.869-.262.005.043 1.475 1.73 1.475 1.73.204.25.34.555.34.885 0 .33-.136.635-.34.886-.003.003-1.393 1.606-1.47 1.692-.09.103-.2.182-.322.232-.168.068-.353.075-.525.022-.173-.053-.33-.162-.44-.312-.003-.005-1.39-1.707-1.39-1.707-.18-.25-.28-.56-.28-.885 0-.324.1-.634.28-.885l1.383-1.596c.168-.194.453-.26.7-.14.04.02.075.042.105.07.03.028.055.06.075.095l1.17 1.996c.22.38.206.85-.036 1.21-.07.11-.16.2-.263.27l-.17.11c-.02.013-.03.02-.04.03-.01.005-.02.01-.028.015-.105.07-.22.125-.34.165h-.006c-.01 0-.02.003-.028.008-.173.053-.35.075-.53.062-.173-.01-.34-.06-.49-.148l-.01-.005c-.02-.015-.04-.025-.06-.04-.075-.05-.14-.11-.19-.18-.01-.015-.01-.03-.02-.045l-.38-.65c-.075-.13-.12-.28-.12-.43 0-.155.045-.31.135-.44l.12-.17c.64-.89 1.61-1.43 2.66-1.43.18 0 .36.02.53.06l.17.06c.01 0 .02.01.03.01.17.07.32.17.44.3l1.13 1.37c.07.08.12.19.16.29.01.03.03.06.03.09.01.05.01.1.01.15-.01.2-.08.4-.19.55z" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Navbar principal */}
            <nav className={`z-50 w-full transition-all duration-300 ${isScrolled
                ? "fixed top-0 left-0 bg-gray-900/90 shadow-lg backdrop-blur-md"
                : "bg-gray-900"
                } flex justify-between items-center px-4 py-3 md:px-8 lg:px-12`}>

                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" onClick={() => window.location.reload()}>
                        <img
                            src="/logo.png"
                            alt="Bordados ALCA Logo"
                            className="h-8 md:h-10 cursor-pointer transition-transform hover:scale-105"
                        />
                    </a>
                </div>

                {/* Menú de navegación (desktop) con submenús */}
                <div className="hidden md:flex space-x-6 lg:space-x-8 relative">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="relative group"
                            onMouseEnter={() => handleSubmenuHover(item.name)}
                            onMouseLeave={handleSubmenuLeave}
                        >
                            {item.submenu ? (
                                <>
                                    <button
                                        className="text-gray-200 text-xs uppercase font-medium hover:text-white transition-colors duration-200 relative py-2"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                    <div
                                        className={`absolute left-0 mt-0 w-48 bg-gray-800 rounded-md shadow-xl z-50 py-2 transition-all duration-300 origin-top transform ${activeSubmenu === item.name ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
                                        style={{ minWidth: '200px' }}
                                    >
                                        {item.submenu.map((subItem, subIndex) => (
                                            <a
                                                key={subIndex}
                                                href={subItem.url}
                                                className="block px-4 py-2 text-xs text-gray-200 hover:bg-gray-700 hover:text-white transition-colors duration-150"
                                            >
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                item.url.startsWith('/') ? (
                                    <Link
                                        to={item.url}
                                        className="text-gray-200 text-xs uppercase font-medium hover:text-white transition-colors duration-200 relative py-2 block"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 hover:w-full"></span>
                                    </Link>
                                ) : (
                                    <a
                                        href={item.url}
                                        className="text-gray-200 text-xs uppercase font-medium hover:text-white transition-colors duration-200 relative py-2 block"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 hover:w-full"></span>
                                    </a>
                                )
                            )}
                        </div>
                    ))}
                </div>

                {/* Menú móvil */}
                <button
                    className="md:hidden text-white focus:outline-none transition-transform hover:scale-110"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>

            {/* Menú móvil desplegable con submenús */}
            {isMenuOpen && (
                <>
                    {/* Fondo translúcido */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={toggleMenu}
                    ></div>

                    {/* Menú lateral */}
                    <div className="fixed inset-y-0 right-0 w-64 bg-gray-800 bg-opacity-95 z-50 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl">
                        <div className="flex flex-col h-full p-4">
                            {/* Encabezado del menú */}
                            <div className="flex justify-between items-center border-b border-gray-700 pb-4">
                                <a href="/" onClick={() => window.location.reload()}>
                                    <img
                                        src="/logo.png"
                                        alt="Bordados ALCA Logo"
                                        className="h-6 md:h-8 cursor-pointer"
                                    />
                                </a>
                                <button
                                    className="text-white focus:outline-none transition-transform hover:rotate-90"
                                    onClick={toggleMenu}
                                    aria-label="Close menu"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Opciones del menú con submenús */}
                            <nav className="flex-1 flex flex-col space-y-2 mt-6 overflow-y-auto">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="flex flex-col">
                                        {item.submenu ? (
                                            <>
                                                <button
                                                    onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                                                    className="flex justify-between items-center text-gray-200 text-sm uppercase font-medium hover:text-white transition-colors py-3 px-2 focus:outline-none rounded hover:bg-gray-700"
                                                    aria-expanded={activeSubmenu === item.name}
                                                >
                                                    <span>{item.name}</span>
                                                    <svg
                                                        className={`w-4 h-4 transition-transform ${activeSubmenu === item.name ? 'transform rotate-180' : ''}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                    </svg>
                                                </button>

                                                {activeSubmenu === item.name && (
                                                    <div className="ml-4 flex flex-col space-y-1 border-l border-gray-700 pl-3 py-1">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <a
                                                                key={subIndex}
                                                                href={subItem.url}
                                                                className="text-gray-300 text-sm uppercase font-medium hover:text-white transition-colors py-2 pl-2 rounded hover:bg-gray-700"
                                                                onClick={toggleMenu}
                                                            >
                                                                {subItem.name}
                                                            </a>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        ) : (
                                            item.url.startsWith('/') ? (
                                                <Link
                                                    to={item.url}
                                                    className="text-gray-200 text-sm uppercase font-medium hover:text-white transition-colors py-3 px-2 rounded hover:bg-gray-700"
                                                    onClick={toggleMenu}
                                                >
                                                    {item.name}
                                                </Link>
                                            ) : (
                                                <a
                                                    href={item.url}
                                                    className="text-gray-200 text-sm uppercase font-medium hover:text-white transition-colors py-3 px-2 rounded hover:bg-gray-700"
                                                    onClick={toggleMenu}
                                                >
                                                    {item.name}
                                                </a>
                                            )
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Redes sociales en el menú */}
                            <div className="flex justify-center space-x-6 pt-6 pb-4 border-t border-gray-700">
                                <a href="#" className="text-green-500 hover:text-amber-400 transition-colors transform hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-green-500 hover:text-amber-400 transition-colors transform hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://wa.me/50670799463" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-amber-400 transition-colors transform hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.515 5.132 1.521 3.453.005 6.259-2.806 6.263-6.26.005-3.453-2.811-6.259-6.265-6.262-3.451-.003-6.257 2.808-6.26 6.262-.001 1.898.66 3.738 1.865 5.168l-1.122 4.178 4.187-1.107zm-3.582-6.397c-.156-.25-.244-.54-.244-.834 0-.155.048-.31.154-.434.206-.232.547-.326.869-.262.005.043 1.475 1.73 1.475 1.73.204.25.34.555.34.885 0 .33-.136.635-.34.886-.003.003-1.393 1.606-1.47 1.692-.09.103-.2.182-.322.232-.168.068-.353.075-.525.022-.173-.053-.33-.162-.44-.312-.003-.005-1.39-1.707-1.39-1.707-.18-.25-.28-.56-.28-.885 0-.324.1-.634.28-.885l1.383-1.596c.168-.194.453-.26.7-.14.04.02.075.042.105.07.03.028.055.06.075.095l1.17 1.996c.22.38.206.85-.036 1.21-.07.11-.16.2-.263.27l-.17.11c-.02.013-.03.02-.04.03-.01.005-.02.01-.028.015-.105.07-.22.125-.34.165h-.006c-.01 0-.02.003-.028.008-.173.053-.35.075-.53.062-.173-.01-.34-.06-.49-.148l-.01-.005c-.02-.015-.04-.025-.06-.04-.075-.05-.14-.11-.19-.18-.01-.015-.01-.03-.02-.045l-.38-.65c-.075-.13-.12-.28-.12-.43 0-.155.045-.31.135-.44l.12-.17c.64-.89 1.61-1.43 2.66-1.43.18 0 .36.02.53.06l.17.06c.01 0 .02.01.03.01.17.07.32.17.44.3l1.13 1.37c.07.08.12.19.16.29.01.03.03.06.03.09.01.05.01.1.01.15-.01.2-.08.4-.19.55z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Navbar;