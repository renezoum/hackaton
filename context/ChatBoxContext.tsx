'use client'

import React, { createContext, useContext, useState } from 'react'

interface ChatBoxContextType {
  isOpen: boolean
  openChatBox: () => void
  closeChatBox: () => void
  toggleChatBox: () => void
}

const ChatBoxContext = createContext<ChatBoxContextType | undefined>(undefined)

export function ChatBoxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openChatBox = () => setIsOpen(true)
  const closeChatBox = () => setIsOpen(false)
  const toggleChatBox = () => setIsOpen(!isOpen)

  return (
    <ChatBoxContext.Provider value={{ isOpen, openChatBox, closeChatBox, toggleChatBox }}>
      {children}
    </ChatBoxContext.Provider>
  )
}

export function useChatBox() {
  const context = useContext(ChatBoxContext)
  if (!context) {
    throw new Error('useChatBox doit être utilisé dans ChatBoxProvider')
  }
  return context
}
