// AppRoutes.jsx
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Contactanos from "../Components/Contactanos.jsx";

// 👇 Lazy import
const Hero = lazy(() => import("../Components/Hero.jsx"));
const QuienesSomos = lazy(() => import("../Components/QuienesSomos.jsx"));
const Servicios = lazy(() => import("../Components/Servicios.jsx"));
const TecnicasTextiles = lazy(() => import("../Components/TecnicasTextiles.jsx"));
const TejidosTecnicos = lazy(() => import("../Components/TejidosTecnicos.jsx"));

const Loader = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/90 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-6">
            {/* Spinner mejorado con gradiente y animación suave */}
            <div className="relative w-16 h-16">
                {/* Anillo exterior */}
                <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>

                {/* Spinner animado con gradiente */}
                <div className="absolute inset-0 border-4 border-transparent rounded-full animate-spin border-t-[#00e0c7] border-r-[#00e0c7]"
                    style={{
                        animation: 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
                        background: 'conic-gradient(transparent 0deg, transparent 90deg, rgba(0, 224, 199, 0.1) 90deg, rgba(0, 224, 199, 0.1) 360deg)'
                    }}>
                </div>

                {/* Punto central */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#00e0c7] rounded-full animate-pulse"></div>
                </div>
            </div>

            {/* Texto con animación */}
            <div className="text-center space-y-2">
                <p className="text-[#00e0c7] text-lg font-medium tracking-wider animate-pulse" style={{ animationDuration: '2s' }}>
                    Cargando contenido
                </p>
                <div className="flex justify-center gap-1">
                    {[...Array(3)].map((_, i) => (
                        <span key={i} className="h-1 w-1 bg-[#00e0c7] rounded-full animate-bounce"
                            style={{
                                animationDelay: `${i * 0.15}s`,
                                animationDuration: '1.5s'
                            }}>
                        </span>
                    ))}
                </div>
            </div>
        </div>

        {/* Estilos de animación personalizados */}
        <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
);

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layout>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <QuienesSomos />
                            <Servicios />
                            <TecnicasTextiles />
                            <TejidosTecnicos />
                        </>
                    } />
                    <Route path="/hero" element={<Hero />} />
                    <Route path="/contact" element={<Contactanos />} />
                </Routes>
            </Layout>
        </Suspense>
    );
};

export default AppRoutes;
