# React Testing Library (RTL)

# `render` / `screen`

[Common mistakes with React Testing Library](https://seongry.github.io/2021/06-20-common-mistakes-with-rty/)

- `render` 사용 보다 `screen` 사용을 권장함
  - `testing-library/prefer-screen-queries` : `render` 의 결과 에서 구조 분해하여 메서드를 사용하지말고 `screen` 사용을 권장하는 rule. [링크](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md)
- `screen` 을 사용하면 쿼리를 추가/제거 할 때 `render` 를 호출해 최신 상태로 구조 분해할 필요 없음.
- 3가지 정도의 예외 케이스에서 `render` 메서드를 사용하라고함
  - `withtin` 메서드 내에서 호출 할 때
  - 커스텀 쿼리를 사용하는 경우
  - container 나 baseElement 를 사용하는 경우


# Hooks
- react 18 이후 부터는 `@testing-library/react-hooks` 패키지를 별도 설치할 필요없이, `@testing-library` 에 포함되어 있음
  - 컴포넌트 에서 한번만 사용되는 hooks 를 테스트하기 위해 해당 패키지를 사용하는 것은 추천하지 않는 다고함.
  - 재사용 되는 hook 에 사용되는 것을 추천함.

> *it is not recommended to test single-use custom hooks in isolation from the components where it's being used. It's better to test the component that's using the hook rather than the hook itself. The React Hooks Testing Library is intended to be used for reusable hooks/libraries.*

## `renderHook`
```tsx
import useCustomHook from '@/hooks/useCustomHook'

test("custom hook works properly", ()=> {
  const result = renderHook(()=> useCustomHook());
  
})
```

### 독립된 환경에서 실행
- renderHook 은 hook 그 자체를 테스트 하는 용도. 해당 hook 이 사용되는 컴포넌트 혹은 페이지 에서의 프로세스를 테스트 하는 것은 불가능 하다. ([React Hook testing with renderHook](https://stackoverflow.com/questions/64287448/react-hook-testing-with-renderhook))
> *Renders a test component that will call the provided callback, including any hooks it calls, every time it renders.*


# `Setup`
rtl 에서는 설정 을 따로 제공하고 있지만, 보일러 플레이트 를 줄일 수 있는 설정을 커스터마이징 할 수 있다.

예를 들어, context api 가 사용 되는 페이지 를 테스트 하려면, Provider 를 wrapper option 에 추가해주어야 하는데, 이 옵션을 부착한 customRender 혹은 customScreen 을 직접 만들어 사용할 수 있다.
```tsx
// customized-setup.tsx

const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <ContextProvider value={{...}}>
        {children}
    </ContextProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

export * from '@testing-library/react'
export {customRender as render}
```
## Errors
### Context API 사용할 때
`use[]Context must be used within a []ContextProvider`

- context api 가 사용되는 페이지 혹은 컴포넌트 를 테스트 할 때는, 해당 context api 의 provider 로 감싸 주어야 한다.

```tsx
// 
test("context api", ()=> {
  render(<PageWithContextAPI/>)
})

test("context api", ()=> {
  render(
    <ContextAPIProvider>
      <PageWithContextAPI/>
    </ContextAPIProvider>
    )
})
```

# queries
- 페이지 내 의 요소를 찾을 수 있게 하는 메서드 들.
- e.g. `get`, `find`, `query`

## ByRole
- 주어진 role 에 따라 요소를 찾는다. 주의 할 점은, 기본적으로 role 이 제공되는 요소에 또다른 role 을 부여하는 것은 불필요하다. 예를 들어 `<button/>` 의 role 은 기본적으로 `button` 이다. `heading` 혹은 `listitem` 과 같은 다른 role 을 부여할 필요가 없다.
- UX 와 가장 닮아있는 query 이다.
- hidden 옵션을 활성화 하는 것으로 성능을 향상할 수있다.

## ByAltText
- 요소 의 `alt` 속성 값으로 요소를 찾는다.

## ByText
- 요소 의 `textContent` 로 요소를 찾는다.

## ByTestId
- 앞선 queries 들로도 요소를 찾을 수 없을 때 사용한다. 
- 라이브러리에서 권장하지 않는 방법이다. 이유는 data-testid 를 사용하는 방식이, 유저가 해당 서비스를 사용하는 방식과 닮아있지 않다. 이유는 data-testid 는 role 과 같이 접근성 api 에 노출되지 않으며, test 할때만 유의미한 속성이기에 그렇지 않나 싶다.

## getBy[ ] vs queryBy[ ]

| 메서드       | 지정한 요소가 없을 시                                                                 |
|--------------|---------------------------------------------------------------------------------------|
| `getBy[ ]`   | 즉시 에러를 throw                                                   |
| `queryBy[ ]` | `null`을  반환                                                            |
                    

**궁금**
- role 에 customize 한 값을 넣어도 괜찮을까? role 의 타입인 `AriaRole` 은 string 과 {} 을 허용한다.
- role 만을 사용하여 단위 테스트 를 하는 것은, 코드의 분리가 작은 단위로 되었을 때 가능 하지 않을 까 싶다. 

# User Event

- 버전 14부터 userEvent의 모든 API 함수가 **비동기 함수** 로 변경됨