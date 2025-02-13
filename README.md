````markdown
# react-iphone-chat

iPhone 메시지 스타일의 채팅 컴포넌트를 React와 TypeScript로 구현한 라이브러리입니다.

## 주요 특징

- iPhone 메시지 UI와 유사한 깔끔한 디자인
- 사용자와 상대방 메시지를 구분하여 표시
- 자동 스크롤 기능
- Tailwind CSS 유틸리티 클래스를 활용한 스타일링

## 설치

```bash
npm install react-iphone-chat
```
````

또는

```bash
yarn add react-iphone-chat
```

## 필수 의존성

이 컴포넌트는 **Tailwind CSS**를 사용합니다.
사용하는 프로젝트에 Tailwind CSS가 사전에 설치 및 설정되어 있어야 합니다.

Tailwind CSS 설치 및 설정 방법은 [Tailwind CSS 공식 문서](https://tailwindcss.com/docs/installation)를 참고하세요.

## 사용 예시

```tsx
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
```

## API 문서

### `Chat` 컴포넌트 Props

- **`messages`**: `Message[]`  
  채팅 메시지 배열입니다. 각 메시지는 다음의 인터페이스를 따릅니다:

  ```ts
  export interface Message {
    id: string
    content: string
    timestamp: Date | string
    isUser: boolean // 사용자가 보낸 메시지인지 여부
  }
  ```

- **`onSendMessage`** (선택): `(message: string) => void`  
  메시지 전송 시 호출되는 콜백 함수입니다.

- **`height`** (선택): `string`  
  채팅 컴포넌트의 높이를 지정합니다. (예: `"500px"`, `"100%"`)

## 개발 및 빌드

프로젝트를 빌드하려면 Rollup을 사용합니다.

```bash
npm run build
```

자세한 빌드 설정은 `rollup.config.js` 파일을 참고하세요.

## 라이선스

MIT License

```

---

이와 같이 README 파일을 포함하면, 사용자들이 패키지의 설치, 사용법, 그리고 Tailwind CSS 설정 방법 등을 쉽게 확인할 수 있어 보다 원활한 사용 경험을 제공할 수 있습니다.
```
