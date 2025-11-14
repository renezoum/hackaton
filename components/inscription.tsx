'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function InscriptionComponent() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Inscription data:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Link href={"/"}>
           <div className="flex items-center justify-between pb-6 border-b border-gray-200 ">
                <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors cursor-pointer">
                <span className="text-2xl">←</span> Retour
                </button>
                <button className="text-gray-400 hover:text-gray-600 text-2xl transition-colors cursor-pointer">
                ✕
                </button>
           </div>
          </Link>
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 space-y-8">

          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-4 border-green-200 flex items-center justify-center bg-green-50 shadow-lg">
                <div className="text-6xl">📊</div>
              </div>
              <div className="absolute bottom-0 right-0 w-10 h-10 rounded-full border-4 border-white bg-green-100 flex items-center justify-center shadow-lg">
                <div className="text-lg">👤</div>
              </div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="text-center space-y-3">
            <h1 className="text-xl md:text-2xl text-green-600 font-bold">
              Guinea Smart Electricity
            </h1>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Inscription Manager
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Créez votre compte de gestion EDG
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nom Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">👤</span>
                <span className="text-blue-600">Nom</span>
              </label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
                placeholder="Sidibé"
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base"
                required
              />
            </div>

            {/* Prenom Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">👤</span> Prénom
              </label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleChange}
                placeholder="Mamadou Aliou"
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base"
                required
              />
            </div>

            {/* Email Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">✉️</span> Email professionnel
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="prenom.nom@edg.gn"
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base"
                required
              />
            </div>

            {/* Telephone Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">📞</span> Téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                placeholder="+224 XXX XX XX XX"
                className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base"
                required
              />
            </div>

            {/* Password Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">🔒</span> Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-lg transition-colors"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 text-gray-900 font-bold text-base">
                <span className="text-xl">♂️</span> Confirmer le mot de passe
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-green-500 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 text-lg transition-colors"
                >
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-2xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-3 mt-8"
            >
              <span>👤</span> S'inscrire
            </button>
          </form>

          {/* Login Links */}
          <div className="space-y-4 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-700 text-base">
              Déjà un compte ? 
              <button className="text-green-600 hover:text-green-700 font-bold ml-2 transition-colors">
                Se connecter
              </button>
            </p>
            <button className="text-gray-600 hover:text-gray-900 font-semibold text-base transition-colors">
              Retour à l'accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
