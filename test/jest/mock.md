# mock

- 단위 테스트를 작성할 때, 해당 코드가 의존하는 부분을 가짜(mock)로 대체하는 기법. 일반적으로 테스트하려는 코드가 의존하는 부분을 직접 생성하기가 너무 부담스러운 경우 mocking이 많이 사용됨.

## jest.fn()

```js
const mockFn = jest.fn();
```

## 반환값

```js
const mockFn = jest.fn();
console.log(mockFn()); // undefined
// mocking 함수의 반환값은 undefined
```

- 특정 값 반환

```js
mockFn.mockReturnValue("mock return value");
```

## jest.spyOn()

- 특정함수를 대체하는 mock 함수까지 필요하지 않고, 그 함수의 호출 여부와 어떻게 호출되었는 지만 알 필요가 있을 때

## jest.mock()

- jest.fn() 함수 하나를 mocking 한다면, jest.mock() 은 모듈 내에 있는 모든 메서드와 함수를 mocking. Module mocking 을 좀 더 편하게 해줌.

## Methods

### mockResolvedValueOnce

- `mockFn.mockResolvedValueOnce(value)`
- 여러 비동기 호출에 대한 resolve 값을 지정해줌

```js
test("async test", async () => {
  const asyncMock = jest
    .fn()
    .mockResolvedValue("default")
    .mockResolvedValueOnce("first call")
    .mockResolvedValueOnce("second call");

  await asyncMock(); // first call
  await asyncMock(); // second call
  await asyncMock(); // default
  await asyncMock(); // default
});
```
