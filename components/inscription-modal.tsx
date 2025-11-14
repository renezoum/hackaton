'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

interface InscriptionProfile {
  id: string
  icon: string
  title: string
  description: string
  color: 'red' | 'yellow' | 'green'
}

export default function InscriptionModal() {
  const router = useRouter()
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null)
  const [isOpen, setIsOpen] = useState(true)

  const handleProfileSelect = (profileId: string) => {
    setSelectedProfile(profileId)
    // Rediriger vers la page inscription après une courte pause
    setTimeout(() => {
      router.push('/inscription')
    }, 300)
  }

  const profiles: InscriptionProfile[] = [
    {
      id: 'citizen',
      icon: '👥',
      title: 'Citoyen',
      description: 'Particulier résidentiel',
      color: 'red'
    },
    {
      id: 'pme',
      icon: '🏢',
      title: 'PME',
      description: 'Petite et moyenne entreprise',
      color: 'yellow'
    },
    {
      id: 'technician',
      icon: '🔧',
      title: 'Technicien EDG',
      description: 'Équipe technique terrain',
      color: 'yellow'
    },
    {
      id: 'manager',
      icon: '📊',
      title: 'Manager EDG',
      description: 'Gestion et supervision',
      color: 'green'
    },
    {
      id: 'state',
      icon: '🌍',
      title: 'État',
      description: 'Institutions gouvernementales',
      color: 'green'
    }
  ]

  const getHoverClasses = (color: 'red' | 'yellow' | 'green') => {
    const colors = {
      red: 'hover:shadow-lg hover:shadow-red-100 hover:bg-red-50',
      yellow: 'hover:shadow-lg hover:shadow-yellow-100 hover:bg-yellow-50',
      green: 'hover:shadow-lg hover:shadow-green-100 hover:bg-green-50'
    }
    return colors[color]
  }

  const getColorClasses = (color: 'red' | 'yellow' | 'green') => {
    const colors = {
      red: 'border-red-400',
      yellow: 'border-yellow-400',
      green: 'border-green-500'
    }
    return colors[color]
  }

  const getTextColorClasses = (color: 'red' | 'yellow' | 'green') => {
    const colors = {
      red: 'text-red-500',
      yellow: 'text-yellow-500',
      green: 'text-green-500'
    }
    return colors[color]
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="bg-white  p-1 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between mb-2 px-3">
          <div>
            <h2 className="text-4xl md:text-2xl font-bold text-gray-900">Inscription</h2>
            <p className="text-gray-700 text-base md:text-sm mt-2 font-medium">Sélectionnez votre profil</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-red-400 hover:text-red-600 text-sm ml-4 flex-shrink-0 font-medium cursor-pointer"
          >
            ⤴ Quitter
          </button>
        </div>
        <hr className='text-gray-200'/>

        {/* Profile Grid */}
        <div className="grid grid-cols-2 md:grid-col-2 gap-6 mb-8 mt-4">
          {profiles.slice(0, 5).map((profile) => (
            <button
              key={profile.id}
              onClick={() => handleProfileSelect(profile.id)}
              className={`border-1 rounded-2xl p-4 md:p-4 text-center transition-all duration-300 shadow-lg cursor-pointer ${getColorClasses(profile.color)} ${getHoverClasses(profile.color)} ${
                selectedProfile === profile.id ? 'ring-3 ring-offset-2 ring-green-500 scale-105' : ''
              }`}
            >
              <div className="text-6xl md:text-4xl mb-5">{profile.icon}</div>
              <h3 className={`text-2xl md:text-2xl font-bold ${getTextColorClasses(profile.color)} mb-3`}>
                {profile.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base font-medium">{profile.description}</p>
            </button>
          ))}
        </div>

        
        

        
      </div>
    </div>
  )
}