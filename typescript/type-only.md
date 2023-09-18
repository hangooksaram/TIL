# Type-only export/import

- 이름 그대로, type 에 대한 정보만 export 하거나 import 하는 것을 의미.

- export
  ```typescript
  type MyType = {
    name: string;
    age: number;
  };
  ```
- import

  ```typescript
  export type { MyType };
  ```

- `interface` 는 type-only export 를 사용할 수 없음.

Reference

[typescriptlang.org](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html)
