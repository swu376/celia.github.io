// 'use client'
import React from 'react'
import { motion } from "framer-motion";
import { Dancing_Script, Shadows_Into_Light, Kaushan_Script } from 'next/font/google';

const dance = Shadows_Into_Light( {
    weight: "400",
    subsets: ["latin"],
});

const kaushan = Kaushan_Script({
    weight: "400",
    subsets: ["latin"],
})

type Props = {}

const SiyanwuName = () => {
    return (
        <div 
            className={`${kaushan.className} text-4xl font-extrabold text-center text-primary hover:scale-110 transition duration-250`}
            // whileTap={{ scale: 0.9 }}
            // whileHover={{ scale: 1.1 }}
        >
            Siyan Wu
        </div>
    );
};

export default SiyanwuName