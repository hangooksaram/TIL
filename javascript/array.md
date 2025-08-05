# Array(배열)

- 리스트와 비슷한 객체.
- 순회, 변형 작업을 수행하는 메서드를 가짐

## Array.prototype.reduce()

- reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

- 예시

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

## Array.prototype.join()

- 배열의 모든 요소를 지정한 문자를 포함하게 하여 연결한, 새로운 **문자열** 반환

```js
const array = [1,2,3];
array.join(','); // "1,2,3"
```

## Array.prototype.slice()

- begin 부터 end 까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환. 
- 원본 배열은 바뀌지 않는다.

```js
const array = [1,2,3,4,5];
array.slice(0,2); // [1, 2, 3]
array.slice(1); // [2, 3, 4, 5, 6] end 미포함
```

## Array.prototype.shift()

- 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환. 
- 원본 배열 또한 바뀐다.

```js
const array = [1, 2, 3];

const firstElement = array1.shift();

console.log(array); // [2, 3]
```
