'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='md:px-6 sticky backdrop-blur-md  top-0 z-50'>
        <header className="bg-white  shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18 md:h-30 py-3 md:py-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <Image
                        src="/guineaSmart.jpg"
                        alt="Guinea Smart"
                        width={70}
                        height={70}
                        className="object-contain"
                    />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-6">
                    {/* FAQ Button - Circle */}
                    <Link href="/faq" className="w-9 h-9 rounded-full border-2 border-green-500 hover:bg-green-50 transition flex items-center justify-center text-green-600">
                        <button className="w-10 h-10 rounded-full border-2 border-green-500 hover:bg-green-50 transition flex items-center justify-center text-green-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </Link>

                    {/* Connexion Button */}
                    <Link
                    href="/login"
                    className="flex items-center gap-2 px-5 py-2.5 text-green-700 border-2 border-green-500 rounded-lg hover:bg-green-50 transition font-semibold text-sm"
                    >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h12m-12-6v12" />
                    </svg>
                    Connexion
                    </Link>

                    {/* S'inscrire Button */}
                    <Link
                    href="/prev_inscription"
                    className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-semibold text-sm shadow-md"
                    >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                    </svg>
                    S'inscrire
                    </Link>
                </nav>

                {/* Mobile Actions */}
                <div className="md:hidden flex items-center gap-3">
                    
                    <button className="w-9 h-9 rounded-full border-2 border-green-500 hover:bg-green-50 transition flex items-center justify-center text-green-600">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <Link href="/login" className="w-9 h-9 rounded-lg border-2 border-green-500 hover:bg-green-50 transition flex items-center justify-center text-green-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h12m-12-6v12" />
                    </svg>
                    </Link>
                    <Link href="/signup" className="w-9 h-9 rounded-lg bg-green-500 text-white hover:bg-green-600 transition flex items-center justify-center">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                    </svg>
                    </Link>
                </div>
                </div>
            </div>
       </header>
    </div>
    
  )
}
