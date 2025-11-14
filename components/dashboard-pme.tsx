'use client'

import React from 'react'
import Sidebar from './sidebar'

export default function DashboardPME() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 w-full">
        <div className="p-4 md:p-6 lg:p-8 lg:ml-64">
          <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-2xl text-white">🏢</div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Tableau de bord PME</h1>
            <p className="text-gray-600 text-sm">Enterprise SARL - PRO-1234567890</p>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Consommation ce mois */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Consommation ce mois</p>
                <p className="text-2xl font-semibold text-gray-900 mt-3">3,450 kWh</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">⚡</div>
            </div>
          </div>

          {/* Évolution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Évolution</p>
                <p className="text-2xl font-semibold text-gray-900 mt-3">-12%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">📈</div>
            </div>
          </div>

          {/* Montant à payer */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Montant à payer</p>
                <p className="text-2xl font-semibold text-gray-900 mt-3">1,250,000 GNF</p>
              </div>
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">💳</div>
            </div>
          </div>
        </div>

        {/* Consommation mensuelle */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Consommation mensuelle</h2>
          
          {/* Month Selector */}
          <div className="mb-6">
            <p className="text-gray-600 font-medium mb-3">Janvier 2025</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gradient-to-r from-green-500 to-yellow-500 h-4 rounded-full"></div>
              <span className="text-gray-600 text-sm font-medium">3,450 kWh / 4,000 kWh</span>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-green-600 text-2xl font-semibold">3,450</p>
              <p className="text-gray-600 text-sm mt-1">kWh ce mois</p>
            </div>
            <div>
              <p className="text-red-600 text-2xl font-semibold">-12%</p>
              <p className="text-gray-600 text-sm mt-1">vs mois dernier</p>
            </div>
            <div>
              <p className="text-yellow-600 text-2xl font-semibold">362 GNF</p>
              <p className="text-gray-600 text-sm mt-1">Prix moyen/kWh</p>
            </div>
            <div>
              <p className="text-gray-900 text-2xl font-semibold">550</p>
              <p className="text-gray-600 text-sm mt-1">kWh restants</p>
            </div>
          </div>
        </div>

        {/* Objectifs d'économie */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Objectifs d'économie</h2>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">Objectif mensuel</span>
                <span className="text-gray-600 text-sm">68%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-yellow-500" style={{ width: '68%' }}></div>
              </div>
              <p className="text-gray-600 text-sm mt-2">Économies: 540,000 GNF</p>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-green-700 font-semibold">✓ Excellent !</p>
              <p className="text-green-600 text-sm mt-1">Vous êtes en bonne voie pour atteindre votre objectif</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Actions rapides</h2>
          <div className="space-y-3">
            {[
              { icon: '💳', label: 'Payer ma facture', color: 'gray' },
              { icon: '⚠️', label: 'Signaler un problème', color: 'gray' },
              { icon: '📊', label: 'Voir mes statistiques', color: 'gray' },
              { icon: '📋', label: 'Mes factures', color: 'gray' },
              { icon: '🔔', label: 'Notifications', color: 'gray' }
            ].map((action, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left group"
              >
                <span className="text-2xl">{action.icon}</span>
                <span className="font-medium text-gray-900 group-hover:text-green-700">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Puissance souscrite */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚡</span>
              <h3 className="font-semibold text-gray-900">Puissance souscrite</h3>
            </div>
            <p className="text-2xl font-semibold text-gray-900">15 kVA</p>
          </div>

          {/* Heures de pointe */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🕐</span>
              <h3 className="font-semibold text-gray-900">Heures de pointe</h3>
            </div>
            <p className="text-2xl font-semibold text-gray-900">08h-12h</p>
          </div>

          {/* Économies totales */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💰</span>
              <h3 className="font-semibold text-gray-900">Économies totales</h3>
            </div>
            <p className="text-2xl font-semibold text-gray-900">2.4M GNF</p>
          </div>
        </div>

        {/* Informations entreprise */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Informations entreprise</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600 text-sm">Secteur d'activité</p>
              <p className="font-semibold text-gray-900">Commerce</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Responsable</p>
              <p className="font-semibold text-gray-900">Aissatou Bella Bah</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Adresse</p>
              <p className="font-semibold text-gray-900">Kaloum, Conakry</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Téléphone</p>
              <p className="font-semibold text-gray-900">+224 622 123 456</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Email</p>
              <p className="font-semibold text-gray-900">contact@entreprisesarl.gn</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
