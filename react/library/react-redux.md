# react-redux

## 사용가능한 데이터

- 기본적으로 직렬화가 가능한 데이터 만 react-redux 로 관리할 수 있다.
- 직렬화가 지원되지 않는 데이터를 액션의 payload 로 전송하려 한다면, 다음과 같은 에러가 발생한다. 저장이 되지 않는 것은 아니지만 버그를 야기할 수 있다.
  - > A non-serializable value was detected in an action, ~~~
