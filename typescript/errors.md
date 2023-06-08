# Property is missing in type 'X' but required in type 'Y'

- type 에 누락되는 속성이 있을 때 발생하는 에러. 모든 속성이 type 에 속하는 지 확인 하거나, optional 하게 바꾸어 주는 작업이 필요.

```typescript
type Person = {
  name: string;
  country: string;
};

// ⛔️ Property 'country' is missing in type
// '{ name: string; }' but required in type 'Person'.ts(2741)
const person: Person = {
  name: "Tom",
};
```
