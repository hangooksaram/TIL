# Hoisting

- 인터프리터가 코드를 실행하기 전에 함수, 변수, 클래스 또는 임포트(import)의 선언문을 해당 범위의 맨 위로 끌어올리는 것처럼 보이는 현상을 뜻함.



```tsx
// test.js

let a;
const b = 1;
a = 2;
```

- `test.js` 라는 스크립트는 실행과 동시에 전역 실행 컨텍스트가 생기고, 그 안에는 렉시컬 환경, 그리고 그 안의 환경 레코드에는 변수 a 와 b 에 대한 정보가 수집되게 된다.
- 실제 변수에 값이 선언, 할당되거나, 사용되기 전에 `환경 레코드` 에는 변수에 대한 정보가 저장되는 것이다.
- 그렇기 때문에 변수가 선언되기 전에 해당 변수에 접근할 수 있게 되는 것. var, let, const 모두 호이스팅이 일어난다.

### 변수의 3가지 단계

1. **선언 단계(Declaration phase)**
   - 변수 객체(Variable Object)를 생성하고 변수를 등록한다.
   - 스코프는 해당 변수 객체를 참조한다.
2. **초기화 단계(Initialization phase)**
   - 변수 객체(Variable Object)에 등록된 변수를 메모리에 할당한다.
   - 변수는 undefined로 초기화된다.
3. **할당 단계(Assignment phase)**
   - undefined로 초기화된 변수에 실제값을 할당한다.

- `var` 는 선언과 초기화 단계가 동시에 진행된다.
- undefined 라는 값이 찍히는 것이고, var 는 그렇지 않기 때문에, 값이 찍히는 것이다.
- 다만 let, const 는 [TDZ](https://ui.toast.com/weekly-pick/ko_20191014)(변수 선언 직전의 단계) 에 영향을 받는다. 즉, 변수 선언전에, 해당 변수를 사용하려고 하면 에러가 발생한다.
- 하지만 var 는 그렇지 않다. TDZ 에 영향을 받지 않기 때문에, 변수 선언 전에, 해당 변수를 참조할 수 있다. 그리고 var 는 변수 선언과 초기화 단계가 동시에 진행된다.
- 그렇기 때문에, 선언 단계에서 undefined 값이 메모리에 이미 할당되있는 것이고, 선언 전에 `console.log`와 같은 도구를 통해 확인하면 undefined 라는 값을 확인할 수 있는 현상이 발생하는 것이다.
- 여기서 중요한 점은 호이스팅은 선언에만 일어난다. 변수에 값을 할당하더라도 할당된 값은 호이스팅이 일어나지 않는다. 그렇기 때문에 let, const 는 undefined 가 찍히게 된다.


Reference
[MDN Hoisting](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)