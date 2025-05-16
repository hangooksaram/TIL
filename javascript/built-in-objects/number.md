# Number

## Number.isSafeInteger()

- 전달된 값이 안전한 정숫값인지 확인
- 확인 할 값을 매개변수로 받고, 그 결과를 Boolean 값으로 반환

```js
function warn(x) {
  if (Number.isSafeInteger(x)) {
    return "Precision safe.";
  }
  return "Precision may be lost!";
}

console.log(warn(Math.pow(2, 53)));
// Expected output: "Precision may be lost!"

console.log(warn(Math.pow(2, 53) - 1));
// Expected output: "Precision safe."
```
