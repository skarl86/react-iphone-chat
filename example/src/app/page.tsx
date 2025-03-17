"use client"

import { useState } from "react"
import { Chat, Message } from "react-iphone-chat"
// import "react-iphone-chat/dist/index.css"

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "안녕하세요!",
      timestamp: new Date().toISOString(),
      type: "other",
    },
  ])

  const handleSendMessage = (msg: string) => {
    const newMsg: Message = {
      id: (messages.length + 1).toString(),
      content: msg,
      timestamp: new Date().toISOString(),
      type: "user",
    }
    setMessages([...messages, newMsg])
  }

  return (
    <div className="h-screen w-screen">
      <Chat
        messages={messages}
        height="500"
        onSendMessage={handleSendMessage}
      />
    </div>
  )
}
