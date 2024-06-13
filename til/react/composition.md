# Composition (합성)

- 컴포넌트 내부에서 다른 컴포넌트 를 사용하는 것을 의미한다.
- React 는 이러한 합성을 상속 대신 사용한다. 강력한 합성 모델을 가지고 있는 것이 React 의 장점이다.

```js
<SomeComponent>
  <OtherComponent />
</SomeComponent>;

const SomeComponent = (props) => {
  return <div>{props.children}</div>;
};
```

```js
<SomeComponent left={<LeftComponent />} right={<RightComponent />} />;

const SomeComponent = (props) => {
  return (
    <>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </>
  );
};
```

## 합성 컴포넌트

- 하나의 컴포넌트를 여러 가지 집합체로 분리한 뒤, 분리된 각 컴포넌트를 사용하는 쪽에서 조합해 사용하는 컴포넌트 패턴의 일종이다.
- 높은 재사용성이 장점이다.
- 간단한 예시로 html의 select를 볼 수 있다. 각각 독립적으로 큰 의미가 없는 <select>와 <option>은 사용하는 곳에서 이를 조합해 사용함으로써 화면에 의미 있는 요소가 된다.

```html
<select>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

Reference
[합성 컴포넌트로 재사용성 극대화하기
](https://fe-developers.kakaoent.com/2022/220731-composition-component/)
