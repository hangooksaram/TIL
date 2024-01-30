# Promise

## .then()

- 즉시 동일한 `Promise` 객체를 반환하여, 또 다른 `promise` 호출을 연속적으로 가능하게 함.

- `Promise` 의 상태가 `fulfilled` 일 때 실행, `rejected` 일 때 실행되는 콜백 함수 를 각각 인자로 받음

```js
const promise = new Promise((resolve, reject) => {
  resolve("on fulfilled");
  reject("on rejected");
});

promise.then(
  (value) => {
    console.log(value);
    // Expected output: "on fulfilled"
  },
  (error) => {
    console.log(error);
    // Expected output: "on rejected"
  }
);
```
