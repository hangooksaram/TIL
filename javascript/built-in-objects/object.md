# Object

## constructor (생성자)

- `Object` 의 `생성자` 는 주어진 원시값 의 타입 의 객체를 생성

### 반환값

- 만약 입력 값이 `null` 또는 `undefined` 라면, 빈 객체 를 생성하여 반환
- 입력 값이 원시값 이라면, 해당 타입의 객체 반환
- 만약 입력 값이 객체라면, 해당 값을 그대로 반환

```js
new Object("input");
// String {"input"}

new Object(5);
// Number {5}

new Object();
// {}
```

## Object.freeze()

- `Object.freeze` 메서드는 객체를 동결 한다. 동결 이란 새로운 속성의 추가, 제거, 기존의 속성 의 변경 을 방지한다.

- 비슷한 기능으로 `Object.seal` 메서드 가 있다.
  - 둘의 공통점은, 속성의 추가, 제거를 방지한다는 것.
  - 차이점은 `Object.seal` 메서드는 기존의 속성의 변경이 가능하다. 수정 을 시도하면 보통 조용히 실패한다고 한다. 하지만, 예외적으로 엄격 모드 일 때는 TypeError 가 발생한다고 한다.

## Object.keys()

- `Object.keys()` 메서드는 주어진 객체의 `key` 이름들을 열거할 수 있는 (iterable) 배열로 반환

````js
const object1 = {
  a: "string",
  b: 42,
  c: false,
};

console.log(Object.keys(object1));
// Array ["a", "b", "c"]```
````

## Object.getOwnPropertyDescriptor()

- 주어진 객체 자신의 속성 (객체의 프로토타입 체인을 따라 존재하는 덕택에 제공하는 게 아닌) 에 대한 속성 설명자 (descriptor) 를 반환

```js
Object.getOwnPropertyDescriptor(obj, prop);
```

- `obj` : 객체
- `prop` : 속성 명
- 반환값 : 속성 설명자, 없으면 `undefined`

{ configurable: true, enumerable: true, get: /_ getter 함수 _/, set: undefined }

- 속성 설명자

  - `value` : 속성과 관련된 값 (데이터 설명자만).

  - `writable` : 속성과 관련된 값이 변경될 수 있는 경우에만 true (데이터 설명자만).

  - `configurable` : 이 속성 설명자의 유형이 바뀔 수 있는 경우에만 그리고 속성이 해당 객체에서 삭제될 수 있는 경우 true

  - `enumerable` :이 속성이 해당 객체의 속성 열거 중에 나타나는 경우에만 true

  - `get` : 속성에 대한 getter 함수, 없다면 undefined
  - `set` : 속성에 대한 setter 함수, 없다면 undefined
