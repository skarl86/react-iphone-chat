import React, { useEffect, useRef, useState } from "react"

export interface Message {
  id: string
  content: string
  timestamp: string
  type: "other" | "user" // other: 상대방 메시지, false: 사용자가 보낸 메시지
}

export interface ChatProps {
  messages: Message[]
  onSendMessage?: (message: string) => void
  /** 컴포넌트의 높이 (예: "500px" 또는 "100%") */
  height?: string
}

/**
 * iPhone 메시지 스타일의 채팅 컴포넌트
 */
function Chat({ messages, onSendMessage, height = "100%" }: ChatProps) {
  const [newMessage, setNewMessage] = useState("")
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const [isComposition, setIsComposition] = useState(false)

  // 메시지가 추가될 때마다 스크롤을 최하단으로 이동
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = () => {
    if (newMessage.trim() === "") return
    if (onSendMessage) {
      onSendMessage(newMessage.trim())
    }
    setNewMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isComposition) return
    // Enter 키 (Shift 없이)를 누르면 전송
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div
      className="flex flex-col border border-gray-200 rounded-lg overflow-hidden"
      style={{ height }}
    >
      {/* 메시지 리스트 */}
      <div
        ref={chatContainerRef}
        className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg shadow ${
                message.type
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-300 text-black rounded-bl-none"
              }`}
            >
              <p className="text-sm whitespace-pre-wrap break-words">
                {message.content}
              </p>
              <span
                className={`block text-xs text-right mt-1 opacity-75 ${
                  message.type === "user" ? "text-end" : "text-start"
                }`}
              >
                {new Date(message.timestamp as string).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 입력 영역 */}
      <div className="flex space-x-2 p-4 border-t border-gray-200">
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 resize-none"
          placeholder="메시지 입력..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposition(true)}
          onCompositionEnd={() => setIsComposition(false)}
          rows={2}
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSend}
            className="px-4 py-2 whitespace-nowrap bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            전송
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat
