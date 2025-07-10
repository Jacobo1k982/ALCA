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




const Loader = () => (
    <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 border-4 border-[#00e0c7] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#00e0c7] text-sm">Cargando contenido...</p>
        </div>
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
