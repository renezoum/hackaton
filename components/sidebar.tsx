'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Définir les routes du sidebar
  const navLinks = [
    { label: 'Tableau de bord', icon: '📊' }, // Sera dynamique
    { href: '/', label: 'Accueil', icon: '🏠' },
    { href: '/faq', label: 'FAQ', icon: '❓' },
    { href: '/login', label: 'Déconnexion', icon: '🚪' },
  ]

  // Fonction pour obtenir la route du tableau de bord
  const getDashboardLink = () => {
    if (pathname.startsWith('/pme_space')) {
      return '/pme_space'
    } else if (pathname.startsWith('/manager_dash')) {
      return '/manager_dash'
    }
    return '/pme_space' // défaut
  }

  // Fonction pour vérifier si la route est active
  const isActive = (href: string | undefined) => {
    if (!href) return false // Pour le tableau de bord dynamique
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  // Fonction pour obtenir les classes dynamiques
  const getLinkClasses = (href: string | undefined) => {
    const baseClasses = 'flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium'
    const activeClasses = 'bg-green-100 text-green-700'
    const inactiveClasses = 'text-gray-700 hover:bg-green-50 hover:text-green-700'
    
    return `${baseClasses} ${isActive(href) ? activeClasses : inactiveClasses}`
  }

  // Fonction pour déterminer le bouton Retour selon la page
  const getReturnLink = () => {
    if (pathname.startsWith('/manager_dash')) {
      return '/pme_space'
    } else if (pathname.startsWith('/pme_space')) {
      return '/'
    }
    return '/'
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed lg:fixed left-0 top-0 w-64 h-screen bg-white border-r border-gray-200 p-6 shadow-sm overflow-y-auto">
        {/* Navigation Links */}
        <nav className="space-y-2">
          {/* Tableau de bord dynamique */}
          <Link
            href={getDashboardLink()}
            className={getLinkClasses(getDashboardLink())}
          >
            <span className="text-xl">📊</span>
            <span>Tableau de bord</span>
          </Link>

          {/* Autres liens statiques */}
          {navLinks.map((link) => (
            link.href && (
              <Link
                key={link.href}
                href={link.href}
                className={getLinkClasses(link.href)}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            )
          ))}
        </nav>

        {/* Return Button at Bottom */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link
            href={getReturnLink()}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-100 text-red-500 hover:bg-red-200 transition-all font-medium"
          >
            <span>←</span>
            <span>Retour</span>
          </Link>
        </div>
      </aside>

      {/* Mobile Header with Menu Toggle */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-50">
        {/* Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-all"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Logo */}
        <h2 className="text-lg font-semibold text-gray-900">EDG Smart</h2>

        {/* Spacer */}
        <div className="w-10"></div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Sidebar */}
      <aside className={`lg:hidden fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-white border-r border-gray-200 p-6 shadow-lg overflow-y-auto transition-transform duration-300 z-40 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Navigation Links */}
        <nav className="space-y-2">
          {/* Tableau de bord dynamique */}
          <Link
            href={getDashboardLink()}
            onClick={() => setIsOpen(false)}
            className={getLinkClasses(getDashboardLink())}
          >
            <span className="text-xl">📊</span>
            <span>Tableau de bord</span>
          </Link>

          {/* Autres liens statiques */}
          {navLinks.map((link) => (
            link.href && (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={getLinkClasses(link.href)}
              >
                <span className="text-xl">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            )
          ))}
        </nav>

        {/* Return Button at Bottom */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            href={getReturnLink()}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
          >
            <span>←</span>
            <span>Retour</span>
          </Link>
        </div>
      </aside>
    </>
  )
}
