# index.js

- 하나의 디렉토리 내에 많은 파일이 위치할 경우, index.js 파일을 이용해 import 를 간결하게 하는 케이스가 있다. 이는 Node.js 의 모듈 시스템 때문에 가능 한 것.
- 꼭 하나의 디렉토리 내에 파일이 많은 경우가 아니더라도, export 를 index 파일에서 하도록 통일하는 케이스도 있다. [JavaScript - 상대 경로를 깔끔하게 관리하는 법 ① (모듈, index.js 활용)](https://velog.io/@dongdong98/JavaScript-%EC%83%81%EB%8C%80-%EA%B2%BD%EB%A1%9C%EB%A5%BC-%EA%B9%94%EB%81%94%ED%95%98%EA%B2%8C-%EA%B4%80%EB%A6%AC%ED%95%98%EB%8A%94-%EB%B2%95-%EB%AA%A8%EB%93%88-index.js-%ED%99%9C%EC%9A%A9)
- Node.js는 모듈에 package.json 파일이나 main에 대한 정보가 없을 경우, 대신 index.js 또는 index.node 파일을 찾는다. 웹팩과 같은 모듈 번들러도 이 규칙을 따르고 있음.
- 이러한 모듈 시스템에 대해 Node.js의 개발자인 라이언 달은 "잘못된 구조이다. 이렇게 만든 것이 후회된다." 라고 말함. 만든 이유는 "귀여울 것 같아서" 였다고 한다. 😅
