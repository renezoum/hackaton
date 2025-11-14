'use client'

import React, { useState } from 'react'

interface Message {
  id: number
  type: 'user' | 'eva'
  content: string
  time?: string
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'eva',
      content: 'Bonjour! Je suis EVA, votre assistant IA. Comment puis-je vous aider aujourd\'hui?',
      time: '14:32'
    },
    {
      id: 2,
      type: 'user',
      content: 'Comment payer ma facture d\'électricité ?',
      time: '14:33'
    },
    {
      id: 3,
      type: 'eva',
      content: '"Factures" de votre tableau de bord. Vous pouvez payer par Orange Money, MTN Money, Moov Money ou carte bancaire. Tous les paiements sont sécurisés et traités instantanément.',
      time: '14:34'
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      const userMessage: Message = {
        id: messages.length + 1,
        type: 'user',
        content: inputValue,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, userMessage])

      // Clear input
      setInputValue('')

      // Simulate EVA response
      setTimeout(() => {
        const evaMessage: Message = {
          id: messages.length + 2,
          type: 'eva',
          content: 'Je comprends votre question. Malheureusement, je rencontre un problème technique avec l\'IA. Veuillez réessayer dans quelques instants. Pour les questions sur Guinea Smart Electricity, je peux vous aider avec les factures, les pannes, la consommation et le support client.',
          time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        }
        setMessages((prev) => [...prev, evaMessage])
      }, 500)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating Chat Button - Only show when chatbox is closed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-15 h-15 rounded-full shadow-2xl flex items-center justify-center text-4xl hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-40"
          style={{
            background: 'linear-gradient(135deg, #ff9a56 0%, #ffd56f 50%, #56d896 100%)'
          }}
        >
          🤖
          {/* Green dot indicator */}
          <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-lg"></div>
        </button>
      )}

      {/* Chat Box - Only show when opened */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-48px)] bg-white rounded-3xl shadow-2xl flex flex-col max-h-[calc(100vh-120px)] h-[600px] border-2 border-green-100 z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-green-500 rounded-t-3xl p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🤖</div>
              <div>
                <h4 className="font-bold text-lg">EVA - Assistant IA</h4>
                <p className="text-xs text-green-100">En ligne - Disponible 24/7</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-2xl transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-green-600 text-white rounded-br-none'
                      : 'bg-white border-2 border-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  {message.time && (
                    <p
                      className={`text-xs mt-2 ${
                        message.type === 'user' ? 'text-green-100' : 'text-gray-400'
                      }`}
                    >
                      {message.time}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-gray-200 p-4 space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Posez votre question à EVA..."
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-full focus:border-green-500 focus:outline-none text-sm placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full  px-3 flex items-center justify-center transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                ➤  
              </button>
            </div>
            <p className="text-xs text-gray-500 px-2">
              ✓ EVA utilise l'IA pour répondre à vos questions
            </p>
          </div>
        </div>
      )}
    </>
  )
}
