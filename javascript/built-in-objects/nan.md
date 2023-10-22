# NaN

- Not-A-Number(숫자가 아님) 를 뜻하는 전역 객체의 속성
- JS 개념이 아닌 IEEE 754 에 의해 지정된 것
- falsy 값중 하나

## NaN 을 반환하는 연산들

- 숫자로 변환실패
  - pareInt("string")
  - Number(undefined)
- 결과가 허수인 수학 계산식
  - Math.sqrt(-1)
- 정의할 수 없는 계산식
  - 0 \* Infinity,
  - 1 \*\* Infinity
  - Infinity / Infinity
  - Infinity - Infinity
- 피연산자가 NaN이거나 NaN으로 강제 변환되는 메서드 또는 표현식
  - 7 \*\* NaN
  - 7 \* "blabla"
- 유효하지 않은 값이 숫자로 표시되는 기타 경우
  - 잘못된 날짜 new Date("blabla").getTime()
  - "".charCodeAt(1)

## 주의할 점

- pareInt("string") === NaN 은 성립하지 않는다.
  - Number.isNan 메서드 사용 필요
