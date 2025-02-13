import { useState } from "react"
import { Chat, Message } from "react-iphone-chat"

const App = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "안녕하세요!",
      timestamp: new Date().toISOString(),
      isUser: false,
    },
  ])

  const handleSendMessage = (msg: string) => {
    const newMsg: Message = {
      id: (messages.length + 1).toString(),
      content: msg,
      timestamp: new Date().toISOString(),
      isUser: true,
    }
    setMessages([...messages, newMsg])
  }

  return (
    <div className="h-screen w-screen">
      <Chat messages={messages} onSendMessage={handleSendMessage} />
    </div>
  )
}

export default App
