# Dynamic Routes

- `/app/example/[id]`
- static export 로 생성한 Production 환경에서는 url 이 잘려보이는 등 정상적으로 동작하지 않는다.
  - build 시 실행되는 `getStaticPaths` 를 사용하여 모든 dynamic routes 를 미리 정적 생성 해두어 배포해야한다.
