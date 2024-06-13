# state 구조화 하기

1. 연관된 state 그룹화하기.
   - 두 개 이상의 state 변수를 항상 동시에 업데이트한다면, 단일 state 변수로 병합하는 것을 고려하자.
2. State의 모순 피하기.
   - 여러 state 조각이 서로 모순되고 “불일치”할 수 있는 방식으로 state를 구성하는 것은 실수가 발생할 여지를 만들 수 있으니, 조심하자.
3. 불필요한 state 피하기.
   - 렌더링 중에 컴포넌트의 props나 기존 state 변수에서 일부 정보를 계산할 수 있다면, 컴포넌트의 state에 해당 정보를 넣지 않아야 한다.
4. State의 중복 피하기.
   - 여러 상태 변수 간 또는 중첩된 객체 내에서 동일한 데이터가 중복될 경우 동기화를 유지하기가 어렵다. 가능하다면 중복을 줄이자.
5. 깊게 중첩된 state 피하기.
   - 깊게 계층화된 state는 업데이트하기 쉽지 않다. 가능하면 state를 평탄한 방식으로 구성하는 것이 좋다.