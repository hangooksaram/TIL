# useMemo

- [memoization](https://github.com/hangooksaram/TIL/blob/main/cs/memoization.md) 의 개념을 가짐
- 기존에는 렌더링이 될 때마다 컴포넌트 내의 함수들이 실행됨. 하지만 useMemo 로 감싼 함수의 반환 값은 메모리에 저장되어있기 때문에, 함수를 다시 실행할 필요 없이 메모리에 있는 값을 재사용할 수 있게 되는 것
- 첫 번째 파라미터로 연산 함수가 콜백함수로 들어가고, 두 번째 파라미터로 의존성 배열이 들어간다.
  - 의존성 배열 내의 값이 바뀔 때 에만 콜백함수가 다시 실행됨.

```jsx
import { useMemo } from "react";

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```

Reference

[Velog - [React] useMemo란?
](https://velog.io/@jinyoung985/React-useMemo%EB%9E%80)

[React 공식 문서](https://react.dev/reference/react/useMemo)
