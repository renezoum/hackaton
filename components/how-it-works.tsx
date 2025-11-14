'use client'

import React from 'react'

export default function HowItWorks() {
  const features = [
    {
      id: 1,
      icon: '👤',
      title: 'Pour les Citoyens',
      items: [
        'Consultez et payez vos factures en 2 clics',
        'Signalez des pannes instantanément',
        'Discutez avec EVA, votre assistant IA 24h/24'
      ],
      bgIcon: 'bg-green-100'
    },
    {
      id: 2,
      icon: '🏢',
      title: 'Pour les PME',
      items: [
        'Gérez plusieurs compteurs professionnels',
        'Analysez votre consommation avec l\'IA',
        'Recevez des recommandations d\'économie'
      ],
      bgIcon: 'bg-yellow-100'
    },
    {
      id: 3,
      icon: '🔧',
      title: 'Pour les Techniciens',
      items: [
        'Recevez des tickets géolocalisés',
        'Optimisez vos trajets avec l\'IA',
        'Historique complet de vos interventions'
      ],
      bgIcon: 'bg-green-100'
    },
    {
      id: 4,
      icon: '📊',
      title: 'Pour les Managers',
      items: [
        'Tableau de bord en temps réel',
        'Suivez les performances des techniciens',
        'Analysez la satisfaction client avec l\'IA'
      ],
      bgIcon: 'bg-green-100'
    },
    {
      id: 5,
      icon: '🏛️',
      title: 'Pour l\'État',
      items: [
        'Vue nationale des performances EDG',
        'Statistiques régionales en temps réel',
        'Rapports prédictifs alimentés par l\'IA'
      ],
      bgIcon: 'bg-yellow-100'
    }
  ]

  return (
    <section className="bg-gradient-to-b from-green-50 to-gray-50 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Comment ça marche ?
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Une plateforme adaptée à chaque utilisateur
          </p>
        </div>

        {/* Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.slice(0, 3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${feature.bgIcon}`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row - 2 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-6 md:mt-8">
          {features.slice(3).map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${feature.bgIcon}`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Items */}
              <ul className="space-y-3">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
