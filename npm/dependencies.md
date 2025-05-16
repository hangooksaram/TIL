# Dependencies

## Dependencies

애플리케이션 에 종속된 가장 일반적인 종속성이다. 런타임 과 빌드타임, 개발 시 모두에서 이 종속성 패키지들이 필요하기 때문에, 앱이 빌드 될 때 이 종속성 패키지들이 번들에 포함되어 배포된다. 즉, 애플리케이션이 실제로 서비스 될 때 필요한 패키지들이 포함되어야 한다.

> **_Please do not put test harnesses or transpilers or other "development" time tools in your dependencies object._**

```json
 "dependencies": {
    "some-package-A": "0.0.0",
    "some-package-B": "0.0.0",
  },
```

## Dev Dependencies

런타임에는 필요하지 않고 빌드타임, 개발 시 필요한 패키지들이다. 빌드타임에서 이 종속성들은 빌드에 도움을 주거나 참조가 되지만, 번들 에는 포함되지 않는 종속성 패키지들이다.

## Peer Dependencies

- 직역하면 "동료 종속성" 인 만큼, 실제로 패키지에서 직접 require(import) 하지는 않더라도 호환성이 필요한 경우 명시하는 dependencies 를 뜻한다.

예를 들어, `React` 기반의 라이브러리인 `ui-with-react` 라는 라이브러리 를, my-app 이라는 프로젝트에서 사용하려고 한다.

여기서 `ui-with-react` 는 React 를 기반으로 하는 라이브러리 이니, react 에 의존할 수 밖에 없는 상황이다.

따라서 ui-with-react 의 package.json 은 이렇게 되어있다.

```json
  // ui-with-react package.json
  "peerDependencies": {
    "react": "18.0.0",
  }
```

위의 속성은 이렇게 해석할 수 있다.

> `ui-with-react` 를 사용하는 프로젝트에서는 `react` 가 꼭 필요한데, 버전은 `18.0.0` 으로 사용해라.

하지만 `my-app` 이라는 프로젝트에서는 `17.0.0` 버전의 `react` 를 설치했다. 그렇다면 `my-app` 의 패키지 종속성은 다음과 같은 구조를 띄게 된다.

```
node_modules
ㄴreact 17.0.0 (dependancy)
ㄴui-with-react 0.0.1 (dependancy)
  ㄴnode_modules
    ㄴreact 18.0.0 (peer dependancy)
```

peer dependencies 에 적합하지 않는 버전의 패키지를 설치한 상황 이 된다. 이럴 경우, `npm` 의 버전에 따라 다른 결과가 나타난다.

- `3버전` <=, peer dependencies 에 해당하는 패키지를 자동으로 설치해주었다.
- `4버전` - 6버전 경고 메세지만 띄워주었다.
- `7버전` >=, 패키지 설치가 실패한다.

Reference
[Peer Dependencies 에 대하여
](https://velog.io/@johnyworld/Peer-Dependencies-%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)
