# TDZ (Temporal Dead Zone)

- 변수가 속한 스코프의 맨 위 부터 변수의 초기화 완료 시점 까지 를 의미 

## Temporal 의 의미

- Temporal(일시적인) 한 인 이유는, Dead Zone 이  코드의 작성 순서(위치)가 아니라 코드의 실행 순서(시간)에 의해 형성되기 때문. 

- 예를 들어 아래 코드의 경우 let 변수 선언 코드가 그 변수에 접근하는 함수보다 아래에 위치하지만, 함수의 호출 시점이 Dead Zone 밖이므로 정상 동작함.

```js
{
  // TDZ가 스코프 맨 위에서부터 시작
  const func = () => console.log(letVar); // OK

  // TDZ 안에서 letVar에 접근하면 ReferenceError

  let letVar = 3; // letVar의 TDZ 종료
  func(); // TDZ 밖에서 호출함
}
```

## let

- let 변수는 초기화하기 전에는 읽거나 쓸 수 없다. 초기화 전에 접근을 시도하면 ReferenceError가 발생. 
    - 이 부분이 var 변수와 다른 점으로, var의 경우 선언 전에 접근할 시 undefined 이다.

```js
function do_something() {
  console.log(bar); // undefined
  console.log(foo); // ReferenceError
  var bar = 1;
  let foo = 2;
}
```




Reference
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz