# Static Exports

- `next build` 를 사용하면 Next js 는 각각의 route 마다 Html 파일을 생성한다.
- `next.config.js` 에 `output: 'export'` 속성이 필요.
- 주의할 점은, Static Exports 를 사용하면, 일부 Node js 서버가 필요한 기능 들은 작동하지 않기 때문에 유의해야 한다. [Unsupported Features](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#unsupported-features)
