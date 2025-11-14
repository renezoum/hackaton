'use client'

import React from 'react'

export default function WhyChoose() {
  const reasons = [
    {
      id: 1,
      icon: '💳',
      title: 'Paiement Simplifié',
      description: 'Sécurisé via Mobile Money',
      bgColor: 'bg-green-500'
    },
    {
      id: 2,
      icon: '🔔',
      title: 'Alertes Intelligentes',
      description: 'IA anticipe vos besoins',
      bgColor: 'bg-yellow-400'
    },
    {
      id: 3,
      icon: '✨',
      title: 'EVA Assistant IA',
      description: 'Support 24h/24',
      bgColor: 'bg-green-500'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'EDG Partout',
      description: 'App, SMS, WhatsApp',
      bgColor: 'bg-green-500'
    }
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Pourquoi choisir Guinea Smart Electricity ?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            L'IA au service de votre expérience EDG
          </p>
        </div>

        {/* Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${reason.bgColor} shadow-md`}>
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
