# Functions

## getStaticPaths

- 프로젝트의 런타임에 실행되는 것이 아닌 Production 으로 빌드 할 때 실행된다.
- **무조건** `getStaticProps` 함수와 함께 사용해야함.
- non-page file (/app/ 폴더 내부의 파일) 이 아닌 곳에서 사용할 수 없음
- page component 내부의 함수가 아닌, 독자적인 함수로써 사용되어야 함.

  - ```ts
    // X
    const app = () => {
      const getStaticPaths = () => {
        /** ~ */
      };
    };
    ```

    ```ts
    // O
    const app = () => {
      /** component code */
    };
    export const getStaticPaths = () => {
      /** ~ */
    };
    ```
