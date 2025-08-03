# Dependency Inversion Principle (의존성 역전 법칙)

## 의존성
- _"A 모듈이 B 모듈에 의존한다."_ 라는 문장은 다음과 동일하다. 
    -  `A -> B`
    - ```javascript
        // A.js

        import B from B;
      ```
    - A 모듈은 B 모듈의 변경에 의해 변경될 수 있다.

## 의존성 "역전" 이란

의존성은 추상화 계층이 낮은 곳에서 위로 향해야한다. 이는 추상화 계층이 낮은 코드가 높은 코드에 의존해야 함, 즉 import 문, using 문 등을 통해 사용해야 함을 의미한다. 

예제로 생각해보자.
```
High 클래스의 추상화 계층은 Low 클래스보다 높다. 하지만 High 클래스에서 Low 클래스의 initialize() 라는 메서드를 사용해야한다.
```
`High` 가 `Low` 의 메서드를 사용하면 의존성 법칙을 깨버리게 된다. 하지만 요구사항 상 `High` 가 `Low` 를 불가피하게 사용해야한다면 어떻게 할 수 있을까?

typescript 로 작성된 기존의 코드는 다음 코드와 같다. 의존성 법칙을 깨는 부분은 첫번째 라인인 `initialize` 메서드를 `Low` 클래스로 부터 import 해오는 부분이다.

```typescript
// High.ts
import Low from "Low";

class High {
    constructor(){
        Low.initialize();
    }
}

// Low.ts
class Low {
    initialize(){
        /* 구현사항 */
    }
}
```

우선 해야할 것은 기존의 잘못된 의존성을 끊어내는 것이다. 그러면 기존의 의존성을 대체할 것이 필요한데, 이를 추상 클래스라는 것으로 대체 한다. 이는 클래스의 구체적인 구현사항을 걷어내고 구조만을 인지할 수 있게 한다.

```typescript
// InterfaceLow.ts
class InterfaceLow {
    initialize(){}
}
```

이제 High 는 InterfaceLow 만 의존할 것이다. High 는 Low 의 구체적인 구현사항에 대해서는 전혀 모르지만 구조에 대해서는 알게 된다.

그렇다면 구체적인 메서드를 어떻게 사용할 수 있을 까? constructor, 즉 생성자 함수를 통해 High 메서드를 생성할 때 Low, 즉 구체적인 클래스를 주입한다.

그렇다면 결과적으로 다음과 같은 코드로 변경된다.

```typescript
// InterfaceLow.ts
class InterfaceLow {
    initialize(){}
}

// A.ts
import InterfaceLow from "InterfaceLow";

class High {
    low : InterfaceLow;
    constructor(low:InterfaceLow){
        this.low = low;
    }

    initialize() {
        this.low.initialize();
    }
}


// somewhere
import Low from "Low";

const high = new High(Low);
high.initialize();
// === Low.initialize();
```

이를 다이어그램으로 표현하면 다음과 같다.

_기존의 코드_
![violented-dependency-rule](/assets/images/programming/oop/dip-ex-1.png)

_의존성 역전 법칙이 적용된 코드_
![dip](/assets/images/programming/oop/dip-ex-2.png) 
