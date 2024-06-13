# Errors with Typescript

## Property is missing in type 'X' but required in type 'Y'

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

## ES Lint "no-unused-vars" 규칙 을 사용하며 Arrow Function 의 매개변수 type 지정하기

- ES Lint 의 `"no-unused-vars"` 규칙이 적용된 상태에서, Arrow Function 의 매개변수 type 을 지정하려고 하면, 규칙에 해당되어 에러가 발생한다.
- 이럴 경우 `argsIgnorePattern` 을 통해 해결할 수 있다. 해당 옵션의 값이 매개변수 포함되어있으면, 예외 적으로 규칙에 적용시키지 않는다.

```json
// eslint.json

/** ... */
"no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
/** ... */
```

```ts
// ❌
interface SomeObject {
  somFunction: (parameter) => void; //[ERROR] 'parameter' is defined but never used.eslint(no-unused-vars)
}

// ✅
interface SomeObject {
  somFunction: (_parameter) => void;
}
```
