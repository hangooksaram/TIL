# Base64

- `Base64` 는 바이너리 데이터를 64진수 표현으로 변환하여 ASCII 문자열 형식으로 나타내는, 바이너리 데이터를 텍스트로 인코딩 하는 방식.
- 브라우저는 기본적으로 `Base64` 문자열을 디코딩하고 인코딩하기 위한 두 가지 JavaScript 함수를 제공한다.
  - `btoa`: 이진 데이터 문자열에서 Base64로 인코딩된 ASCII 문자열을 생성.("btoa" === "binary to ASCII"로 읽어야 한다).
  - `atob`: Base64로 인코딩된 문자열을 디코딩한다. ("atob" === "ASCII to binary"로 읽어야 한다).

출처 : https://developer.mozilla.org/ko/docs/Glossary/Base64
