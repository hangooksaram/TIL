# styled-component

# rest parameter 로 넘길 때 주의사항

- 해당 styled component 에 children 이 할당되어 있고, rest parameter 로 props 를 넘기려 한다면, children 을 명시해줘야함.

```js
<MyButton width='100%'>
    this is children
</MyButton>


// ❌
const MyButton = styled.div(({ width, ...rest }) => {
    width,
    ...rest
});

// -> [Error] Cannot convert a Symbol value to a string

// ✅
const MyButton = styled.div(({ width, children ...rest }) => {
    width,
    children,
    ...rest
});
```
