# Testing

## React Testing Library

### `render` / `screen`

[Common mistakes with React Testing Library](https://seongry.github.io/2021/06-20-common-mistakes-with-rty/)

- `render` 사용 보다 `screen` 사용을 권장함
  - `testing-library/prefer-screen-queries` : `render` 의 결과 에서 구조 분해하여 메서드를 사용하지말고 `screen` 사용을 권장하는 rule. [링크](https://github.com/testing-library/eslint-plugin-testing-library/blob/main/docs/rules/prefer-screen-queries.md)
- `screen` 을 사용하면 쿼리를 추가/제거 할 때 `render` 를 호출해 최신 상태로 구조 분해할 필요 없음.
- 3가지 정도의 예외 케이스에서 `render` 메서드를 사용하라고함
  - `withtin` 메서드 내에서 호출 할 때
  - 커스텀 쿼리를 사용하는 경우
  - container 나 baseElement 를 사용하는 경우
