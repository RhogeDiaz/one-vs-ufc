import { useEffect, useState } from "react"
import Home from "./components/Home.jsx";
import Flyweight from "./components/Flyweight.jsx";
import Bantamweight from "./components/Bantamweight.jsx";
import Featherweight from "./components/Featherweight.jsx";
import Footer from "./components/Footer.jsx"
import supabase from "./api/supabaseClient.js";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { GiFly } from "react-icons/gi";
import { GiRooster } from "react-icons/gi";
import { GiFeather } from "react-icons/gi";
import { FaHome } from "react-icons/fa";

function App() {

    return (
        <>
            <BrowserRouter>
                <div className='w-full bg-[#D9D9D9] p-3'>
                    <ul className='flex justify-around'>
                        <Link className='font-bold hidden md:block text-black' to="/">HOME</Link>
                        <Link className='font-bold hidden md:block text-black' to="/flyweight">FLYWEIGHT</Link>
                        <Link className='font-bold hidden md:block text-black' to="/featherweight">FEATHERWEIGHT</Link>
                        <Link className='font-bold hidden md:block text-black' to="/bantamweight">BANTAMWEIGHT</Link>
                        <Link className='font-bold md:hidden text-black' to="/"><FaHome /></Link>
                        <Link className='font-bold md:hidden text-black' to="/flyweight"><GiFly /></Link>
                        <Link className='font-bold md:hidden text-black' to="/featherweight"><GiFeather /></Link>
                        <Link className='font-bold md:hidden text-black' to="/bantamweight"><GiRooster /></Link>
                    </ul>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/flyweight" element={<Flyweight />} />
                    <Route path="/featherweight" element={<Featherweight />} />
                    <Route path="/bantamweight" element={<Bantamweight />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
