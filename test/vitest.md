# Vitest

## With Typescript

### alias 사용 시
`vite-tsconfig-paths` 모듈 필요.

- `vite.config.ts`, `vitest.config.ts`
    ```ts
    import tsconfigPaths from "vite-tsconfig-paths";
    export default defineConfig({
        /*...*/
        plugins: [tsconfigPaths()],
        /*...*/
    });
    ```