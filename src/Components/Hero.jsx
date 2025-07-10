import React from 'react';
import heroBackground from '../../public/Imagen/Hero/fondo.jpg';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Contenedor de imagen con relación de aspecto */}
            <div className="absolute inset-0">
                <img
                    src={heroBackground}
                    alt="Fondo textil"
                    className="w-full h-full object-cover object-center"
                />
                {/* Overlay para mejor legibilidad del texto */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            </div>

            {/* Contenido del Hero */}
            <div className="relative z-10 text-center px-4 w-full">
                {/* Texto superior */}
                <p className="text-xs md:text-sm uppercase tracking-[0.5em] mb-8 text-gray-200">
                    FABRICA TEXTIL DEPORTIVA, ESTUDIANTIL Y EMPRESARIAL
                </p>

                {/* Logo principal */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight text-white drop-shadow-[0_2px_2px_rgba(255,255,255,0.4)]">
                    <span className="block font-bonheur">Bordados</span>
                    <span className="block font-bonheur">Alca</span>
                </h1>
                {/* Texto inferior */}
                <p className="text-sm md:text-base uppercase tracking-[0.3em] mt-8 text-gray-200">
                    FABRICACION EN COSTA RICA
                </p>
            </div>
        </div>
    );
};

export default Hero;