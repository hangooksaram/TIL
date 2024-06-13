# 생성자

- 생성자(생성자 메서드) !== 생성자 함수. 그니까 예를 들면 class 의 constructor() 를 생성자라 부르지 생성자 함수라고 부르진 않지만 (둘이 아예 똑같은 건 아니지만) 둘은 정확하게 같은 동작을 한다.
- 자바스크립트에서 클래스는 function 이다. 당장 클래스를 하나 만들어서 typeof 로 타입을 확인해보면 function 이 나옴.

  ![](/assets/images/js/class1.png)

  그리고 아까 js 에서 클래스는 function 이라고 했는 데 정확히 말하면 생성자 메서드와 동일함

  ![d](/assets/images/js/class2.png)

- js 에서 class 가 동작하는 방식을 아래 User Class 의 예제를 보며 동작 방식을 확인해보자

  ```jsx
  class User {
    constructor(name) {
      this.name = name;
    }
    sayHi() {
      alert(this.name);
    }
  }
  // typeof User = function

  const user = new User("hj");
  // typeof user = object
  ```

  1. `User` 라는 이름을 가진 함수를 만든다. 함수 본문은 생성자 `constructor`에서 가져온다. 생성자가 없으면 본문이 비워진 채로 함수가 만들어집니다.
  2. `sayHi`같은 클래스 내에서 정의한 메서드를 `User.prototype`에 저장한다.
  3. `new User` 를 호출해 객체를 만들고, 객체의 메서드를 호출하면 메서드를 prototype 프로퍼티를 통해 가져온다. → 함수의 prototype 에 대해 공부 필요

- 이것들을 통틀어서 class 기능을 하는 순수함수를 생성자 함수를 통해 만들어 보자.

  ```jsx
  // 1. 생성자 함수를 생성
  function User(name) {
    this.name = name;
  }
  // 모든 함수의 프로토타입은 'constructor' 프로퍼티를 기본으로 갖고 있기 때문에
  // constructor 프로퍼티를 명시적으로 만들 필요가 없다.

  // 2. prototype에 메서드를 추가
  User.prototype.sayHi = function () {
    alert(this.name);
  };

  // 사용법: class 와 동일함.
  let user = new User("John");
  user.sayHi();
  ```
