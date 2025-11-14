'use client'

import React from 'react'
import Sidebar from './sidebar'

export default function DashboardOverview() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 w-full">
        <div className="p-4 md:p-6 lg:p-8 lg:ml-64">
          <div className="max-w-5xl mx-auto space-y-8">
          {/* Page Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Vue d'ensemble</h1>

        {/* Top Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tickets ouverts */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Tickets ouverts</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">147</p>
                <p className="text-gray-500 text-xs mt-2">+12 aujourd'hui</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">📋</div>
            </div>
          </div>

          {/* Taux de résolution */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Taux de résolution</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">92%</p>
                <p className="text-gray-500 text-xs mt-2">+1% ce mois</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">✓</div>
            </div>
          </div>

          {/* Temps moyen */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Temps moyen</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">38 min</p>
                <p className="text-gray-500 text-xs mt-2">Temps de résolution</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-xl">⏱️</div>
            </div>
          </div>

          {/* Techniciens actifs */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Techniciens actifs</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">45</p>
                <p className="text-gray-500 text-xs mt-2">Sur 52 agents</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-xl">👤</div>
            </div>
          </div>
        </div>

        {/* Performance des équipes */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance des équipes</h2>
          <div className="space-y-6">
            {[
              { name: 'Équipe Kaloum', percentage: 94 },
              { name: 'Équipe Matam', percentage: 88 },
              { name: 'Équipe Ratoma', percentage: 91 },
              { name: 'Équipe Dixinn', percentage: 85 }
            ].map((team, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900">{team.name}</span>
                  <span className="text-gray-600 font-bold">{team.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${idx % 2 === 0 ? 'bg-green-500' : 'bg-gradient-to-r from-green-500 to-yellow-500'}`}
                    style={{ width: `${team.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity EVA en temps réel */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Activité EVA en temps réel</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
              <div>
                <p className="text-gray-600 text-sm">Conversations actives</p>
                <p className="text-sm text-gray-500">En cours maintenant</p>
              </div>
              <p className="text-2xl font-semibold text-green-600">342</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
              <div>
                <p className="text-gray-600 text-sm">Tickets créés aujourd'hui</p>
                <p className="text-sm text-gray-500">Via EVA</p>
              </div>
              <p className="text-2xl font-semibold text-green-600">87</p>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl">
              <div>
                <p className="text-gray-600 text-sm">Satisfaction moyenne</p>
                <p className="text-sm text-gray-500">Cette semaine</p>
              </div>
              <p className="text-2xl font-semibold text-yellow-500">4.7/5</p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Tickets résolus</p>
            <p className="text-2xl font-semibold text-gray-900 mt-2">1,247</p>
            <p className="text-gray-500 text-xs mt-2">Ce mois</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Alertes en attente</p>
            <p className="text-2xl font-semibold text-gray-900 mt-2">23</p>
            <p className="text-gray-500 text-xs mt-2">Nécessitant action</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Disponibilité réseau</p>
            <p className="text-2xl font-semibold text-gray-900 mt-2">98.5%</p>
            <p className="text-gray-500 text-xs mt-2">24 dernières heures</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            <p className="text-gray-600 text-sm font-medium">Interventions aujourd'hui</p>
            <p className="text-2xl font-semibold text-gray-900 mt-2">67</p>
            <p className="text-gray-500 text-xs mt-2">En cours 12</p>
          </div>
        </div>

        {/* Main Dashboard Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Statistiques EVA */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📊</span>
              <h3 className="font-semibold text-gray-900">Statistiques EVA</h3>
            </div>
            <p className="text-gray-600 text-sm">Performance IA et analytics</p>
          </div>

          {/* Vue par zone */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🗺️</span>
              <h3 className="font-semibold text-gray-900">Vue par zone</h3>
            </div>
            <p className="text-gray-600 text-sm">Carte interactive des régions</p>
          </div>

          {/* Satisfaction client */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">😊</span>
              <h3 className="font-semibold text-gray-900">Satisfaction client</h3>
            </div>
            <p className="text-gray-600 text-sm">Résultats sondages</p>
          </div>

          {/* Alertes critiques */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⚠️</span>
              <h3 className="font-semibold text-gray-900">Alertes critiques</h3>
            </div>
            <p className="text-gray-600 text-sm">Incidents et fraudes</p>
          </div>

          {/* Rapports */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📋</span>
              <h3 className="font-semibold text-gray-900">Rapports</h3>
            </div>
            <p className="text-gray-600 text-sm">Rapports automatiques</p>
          </div>

          {/* Gestion techniciens */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">👨‍🔧</span>
              <h3 className="font-semibold text-gray-900">Gestion techniciens</h3>
            </div>
            <p className="text-gray-600 text-sm">Assigner et gérer</p>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}
