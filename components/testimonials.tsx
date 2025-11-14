'use client'

import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Mariama Diallo',
      role: 'Commerçante - Matam',
      rating: 5,
      text: '"Avant, j\'attendais des heures au guichet EDG. Avec EVA, je paie mes factures en 2 minutes depuis ma boutique. Le service client a vraiment changé !"'
    },
    {
      id: 2,
      name: 'Ibrahima Sow',
      role: 'Gérant PME - Kaloum',
      rating: 5,
      text: '"EVA a détecté une anomalie sur notre compteur qui nous coûtait 150 000 GNF par mois. L\'IA EDG m\'a fait économiser une fortune !"'
    },
    {
      id: 3,
      name: 'Aïssatou Bah',
      role: 'Enseignante - Ratoma',
      rating: 5,
      text: '"Je reçois mes alertes par SMS avant même d\'ouvrir l\'application. Plus de surprise sur les factures. EDG est devenu vraiment transparent !"'
    },
    {
      id: 4,
      name: 'Mamadou Kouyaté',
      role: 'Restaurateur - Dixinn',
      rating: 5,
      text: '"L\'IA prédit ma consommation avec une précision incroyable. Je planifie maintenant mon budget restaurant sans stress. Merci Guinea Smart !"'
    },
    {
      id: 5,
      name: 'Fatoumata Camara',
      role: 'Infirmière - Kipé',
      rating: 5,
      text: '"Payer avec Orange Money en quelques clics, parler à EVA la nuit quand j\'ai une question... EDG a enfin compris ses clients !"'
    },
    {
      id: 6,
      name: 'Moussa Sacko',
      role: 'Entrepreneur - Landréah',
      rating: 5,
      text: '"J\'ai signalé une panne via l\'app, le technicien EDG est arrivé en 2h avec tout l\'historique. Un service client digne du 21ème siècle !"'
    }
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-green-50 py-12 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Ils ont transformé leur expérience EDG
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Découvrez comment l'IA améliore le quotidien des clients EDG en Guinée
          </p>
        </div>

        {/* Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Name & Role */}
              <div className="mb-3">
                <h3 className="text-lg font-bold text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {testimonial.role}
                </p>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm md:text-base text-gray-700 italic flex-1">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
