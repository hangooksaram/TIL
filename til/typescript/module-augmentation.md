# 모듈 보강 ( Module Augmentation )

- `JavaScript` 는 모듈 병합 을 지원하지 않지만, 기존 객체를 가져와 업데이트 하여 패치 할 수 있습니다.

  ```ts
  // observable.ts
  export class Observable<T> {}

  // map.ts
  import { Observable } from "./observable";
  Observable.prototype.map = (f) => {};
  ```

위 코드는 `TypeScript` 에서 잘 동작하지만, 컴파일러 는 `Observable.prototype.map` 에 대해 알지 못함. **이런 경우에 모듈 보강을 통해 컴파일러에게 정보 를 알려줄 수 있음.**

## 제한 사항

- 기존 선언에 대한 패치만 가능
- `default export` 는 모듈 보강 이 될 수 없음. 이름을 갖는 `export` 만 모듈 보강 이 가능.

```ts
export default class Foo {
  hello() {
    console.log("Foo");
  }
}

// ===== file Bar.ts =====
import Foo from "./Foo";

declare module "./Foo" {
  interface Foo {
    add(x, y);
  }
}

// ERROR: 'add' does not exist in type Foo.
Foo.prototype.add = function (x, y) {
  return x + y;
};

let f = new Foo();
f.hello();
f.add(3, 4); // ERROR: 'add' does not exist in type Foo.
```
