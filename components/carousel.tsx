'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Carousel() {
  return (
    <section className='md:px-6 shadow-lg'>
        <div className="relative w-full min-h-screen bg-gradient-to-b from-slate-700 to-slate-800 overflow-hidden mx-auto my-4 md:my-9 md:px-8 rounded-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-50">
            <Image
            src="/1 copy.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
            />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-900/40 rounded-2xl md:rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 space-y-6 md:space-y-8">
            {/* Logo Box - Centered */}
            <div className="bg-white px-2 py-1 md:px-2 md:py-1 shadow-2xl max-w-xs w-full sm:w-auto">
            <div className="flex flex-col items-center text-center space-y-2">
                <Image
                src="/guineaSmart.jpg"
                alt="Guinea Smart Logo"
                width={150}
                height={150}
                className="object-contain"
                />
            </div>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold text-white text-center leading-tight drop-shadow-2xl max-w-4xl uppercase">
            L'IA qui révolutionne le service client EDG
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-gray-100 text-center max-w-2xl leading-relaxed drop-shadow-lg uppercase font-light">
            Guinea Smart Electricity : Votre relation avec EDG transformée par l'intelligence artificielle
            </p>

            {/* Buttons - Desktop: 2 side by side, Mobile: full width stacked */}
            <div className="w-full max-w-2xl space-y-4 md:space-y-0 md:flex gap-6 pt-4 md:pt-8">
            {/* Primary Button - Light gray */}
            <Link
                href="/client"
            >
                <button className="w-full md:flex-1 px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-green-500  text-white font-light  text-center my-2">
                    Espace client EDG (Citoyen / PME)
                </button>
            </Link>

            {/* Secondary Button - Border white */}
            <Link
                href="/team"  
                >
                <button className="w-full md:flex-1 px-6 md:px-8 py-4 md:py-5 rounded-2xl bg-transparent border-1 border-gray-300 hover:bg-white/10 text-white font-light text-center my-2">
                Espace EDG (Technicien / Manager)
                </button>
            </Link>
            </div>
        </div>
        </div>
    </section>
  )
}
