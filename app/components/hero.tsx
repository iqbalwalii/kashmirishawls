"use client";
import { useState, useEffect } from "react";
import Navbar from './navbar';

export default function Hero() {
 

 
  return (
    <div className="relative h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/shawl1.jpg" // 👉 put your Kashmiri shawl image in public/shawl.jpg
          alt="Kashmiri Shawl"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navbar */}
      <Navbar/>

      {/* Hero Text */}
      <div className="relative z-10 flex flex-col h-full items-center justify-center text-center px-4 heros">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg font-serif">
         Wrap Yourself in Kashmiri Elegance
        </h1>
        <p className="text-white drop-shadow-lg font-mono">Handcrafted with Love, Inspired by Nature</p>
      </div>
    </div>
  );
}
