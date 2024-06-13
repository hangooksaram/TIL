# useCallback

- `useMemo` 와 동일하게 메모이제이션 기법을 활용. 첫번째 파라미터로 콜백함수를 받고, 두번째로 의존성 배열을 받는 구조또한 동일.
- 함수의 반환값(연산값) 을 메모리에 저장했던 `useMemo` 와의 차이점은, 함수자체를 메모리에 저장.
- 사용하지 않는 것이 더 성능상 이점이 있는 오버스펙과 같은 현상이 일어날 수 있으므로 사용시 주의해야 함.

## 사용할만한 때

### 해당 함수가 `memo` 에 감싸진 컴포넌트의 props 로 넘겨질 때

- e.g. `memo` 로 감싼 컴포넌트가 있고, useCallbackFn 이라는 함수를 props 로 내림
  - `memo` 로 한번 감쌌다는 것은, props 가 바뀌지 않는다면 다시 렌더링 하지 않을 것 이라는 뜻
  - 하지만 props 로전달되는 useCallbackFn 의 참조값은 매 렌더링마다 변하기 때문에, props 가 바뀌게 됨
  - 이러한 useCallbackFn 을 useCallback 으로 감싼다면, 의존성 배열 내의 값이 변화할 때만 참조값이 바뀌게 됨.

### 해당 함수가 다른 hook 함수의 의존성 배열에 참조될 때

- 자바스크립트에서 함수는 객체로 취급되기 때문에, 렌더링될때마다 새로운 참조값으로 바뀌게 됨.
  - 만일 `useEffect` 의 의존성 배열에 `useCallbackFn` 이라는 함수가 참조하는 상황. 해당 컴포넌트는 렌더링 될때마다 `useCallbackFn` 이라는 함수를 호출할 것임. 만약 해당 함수 내에서 상태를 변경하고 있다면 무한 루프에 빠지게 됨.

Reference

[React 공식문서](https://react.dev/reference/react/useCallback)

[DaleSeo - React Hooks: useCallback 사용법
](https://www.daleseo.com/react-hooks-use-callback/)
