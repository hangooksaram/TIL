# 'try..catch' 문법

- 에러가 발생하면 스크립트는 ‘죽고’(즉시 중단되고), 콘솔에 에러가 출력됨.
- 그러나 try..catch 문법을 사용하면 스크립트가 죽는 걸 방지하고, 에러를 ‘잡아서(catch)’ 더 합당한 무언가를 할 수 있게 됨.

## 프로세스

1. 먼저, try {...} 안의 코드가 실행됨.
2. 에러가 없다면, try 안의 마지막 줄까지 실행되고, catch 블록은 패스.
3. 에러가 있다면, try 안 코드의 실행이 중단되고, catch 블록으로 제어 흐름이 넘어감 . 변수 error 는 에러 정보가 담긴 에러 객체를 포함.

예제

```javascript
let json = "{name : hyunjae}";
try {
  let user = JSON.parse(json);
  alert(user.name); //user 에는 name 이라는 속성이 없으니 error 발생
} catch (error) {
  alert(error); //error object 반환
}
```

## 주의

- 오직 런타임 에러에서만 작동.
- 동기적으로 작동
