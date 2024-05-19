# Suspense

- `children`(하위 컴포넌트) 의 `loading` 이 완료 될 때 까지, `fallback` UI 를 제공한다.
  - `children` : 렌더링 하고 싶은 실질적 UI
  - `fallback` : loading 이 완료 될때까지만 보여줄 대체 UI
- 로딩 화면을 선언적으로 나타낼 수 있다는 것에도 의미가 있다.

```jsx
<Suspense fallback={fallback}>{children}</Suspense>
```

## 주의 사항

1. 오직 Suspense-enabled 데이터 소스만 Suspense 를 활성화 시킬 수 있음

   1. `Relay` 나 `Next.js`, `react-query` 와 같은 프레임워크 에서 데이터 페칭을 하는 경우
      - 현재 `Suspense` 를 지원하는 프레임워크를 사용하지 않고 직접 데이터 소스를 구현하는 것은 공식적으로 지원되지 않음.
   2. `lazy` 를 사용하여 컴포넌트 코드를 지연로딩 하는 경우
   3. `use` 를 사용하여 Promise 값을 읽는 경우

2. Effect나 이벤트 핸들러 내에서의 데이터 페치 감지 불가

   Suspense는 Effect나 이벤트 핸들러 내에서의 데이터 페칭을 감지 못합니다. Suspense 를 통한 데이터 페치는 주로 컴포넌트 렌더링 단계에서 이루어져야 합니다.

## 동작 원리

- 핵심 원리는 **하위 컴포넌트 에서 Promise 를 throw 하는 것** 이다.
- 하위 컴포넌트 에서 처리하는 비동기 로직의 `Promise` 상태가 `pending`, `error` 상태이면, 상위로 `Promise` 를 다시 Throw 한다.

https://codesandbox.io/p/sandbox/react-custom-suspense-forked-f52xd9?file=%2Fsrc%2FSuspense.tsx%3A42%2C18-42%2C23

https://velog.io/@seeh_h/suspense%EC%9D%98-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC
