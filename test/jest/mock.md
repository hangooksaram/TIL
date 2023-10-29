# mock

- 단위 테스트를 작성할 때, 해당 코드가 의존하는 부분을 가짜(mock)로 대체하는 기법. 일반적으로 테스트하려는 코드가 의존하는 부분을 직접 생성하기가 너무 부담스러운 경우 mocking이 많이 사용됨.

## 사용법

- 생성

```js
const mockFn = jest.fn();
```

- 매개변수

```js
mockFn(1);
mockFn("1");
mockFn([1, 2]);
```

- 반환값

```js
mockFn.mockReturnValue("mock return value");
```
