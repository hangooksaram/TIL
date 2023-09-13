# 연산자

## typeof 연산자

- 피연산자의 타입을 문자열 로 반환
- undefined, null, boolean, number, symbol, string, object 총 7가지 있음
- `typeof null` 을 찍어보면 object 가 나오는 버그가 있음

## 비트 연산자

- 32비트 숫자에서 작동. 연산의 숫자 피연산자는 32비트 숫자로 변환됨. 결과는 JavaScript 숫자로 다시 변환됨.

- & : AND. e.g. 5 & 1 = 0101 & 0001 = 0001 = 1
- | : OR. e.g. 5 | 2 = 0101 | 0010 = 0111 = 7

## void

- 피연산자를 평가한 후 `undefined` 를 반환
- 실무에서 거의 사용하지 않음
