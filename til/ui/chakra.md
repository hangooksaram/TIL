# chakra

# V3
- DOCS 의 예제를 따라가려면, 아래의 커맨드를 꼭 입력하자.
```
npx @chakra-ui/cli snippet add
```
- 아래 의 `Provider` 를 import 한 디렉토리 는 위의 커맨드를 입력하면 받아오는 snippet component 들이 담겨 있는 디렉토리 이다.


```tsx
import { Provider } from "@/components/ui/provider"

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
```

- `Provider` 는 이러하게 생겼다.

## Theming
- `defineConfig` 로 theme 에 관한 설정을 만들 수 있다.
- **중요한 점은, defaultConfig 를 가져와서 system 을 생성할 때 꼭 넣어줘야한다.**
```ts
import { createSystem,defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { 
          main : {
            value: "#1E2938" , 

          },
          
        },
        white: {
          value : '#ffffff'
        }
      },
    },
  },
})



export const system = createSystem(defaultConfig, config);
```

- 이렇게 사용할 수 있다.

```tsx
'use client';

import { Box } from '@chakra-ui/react';

export default function App() {
  return <Box color={{ base: 'primary.main', _dark: '#ffffff' }}>Hello World</Box>;
}

```