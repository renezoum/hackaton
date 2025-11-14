'use client'

import React from 'react'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '👜',
      title: 'EVA : Votre Conseiller IA Personnel',
      subtitle: '95% de satisfaction',
      color: 'green'
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Détection Intelligente d\'Anomalies',
      subtitle: 'Résolution 3x plus rapide',
      color: 'green'
    },
    {
      id: 3,
      icon: '📈',
      title: 'Réduction de Vos Factures',
      subtitle: 'Économies moyennes : 30%',
      color: 'green'
    },
    {
      id: 4,
      icon: '👜',
      title: 'EVA : Votre Conseiller IA Personnel',
      subtitle: '95% de satisfaction',
      color: 'green'
    },
    {
      id: 5,
      icon: '💬',
      title: 'Support Multicanal Unifié',
      subtitle: 'Disponible 24h/24',
      color:  'yellow'
    },
    {
      id: 6,
      icon: '📊',
      title: 'Prédictions de Consommation',
      subtitle: 'Précision de 92%',
      color:  'yellow'
    },
    {
      id: 7,
      icon: '🛡️',
      title: 'Paiements Sécurisés Simplifiés',
      subtitle: '100% sécurisé',
      color:  'yellow'
    },
    {
      id: 8,
      icon: '💬',
      title: 'Support Multicanal Unifié',
      subtitle: 'Disponible 24h/24',
      color: 'yellow'
    }
  ]

  

  return (
    <section className="bg-white py-12 md:py-20 px-4 md:px-8 bg-gradient-to-b from-white to-green-100 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            L'innovation EDG au service de votre quotidien
          </h2>
          <p className="text-base md:text-lg text-gray-500">
               Découvrez comment l’IA transforme votre expérience
          </p>
        </div>

        {/* Grid - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-b from-green-100 to-yellow-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col space-y-4"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                service.color === 'green' ? 'bg-green-600' : 'bg-yellow-500'
              }`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-light text-gray-900">
                {service.title}
              </h3>

              {/* Subtitle Badge */}
              <div className={`inline-flex items-center w-fit px-4 py-2 rounded-full text-sm md:text-xs font-semibold ${
                service.color === 'green'
                  ? 'bg-green-200 text-green-700'
                  : 'bg-yellow-200 text-yellow-700'
              }`}>
                <span className="mr-2">⚡</span>
                {service.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
