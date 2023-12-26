# Configuring

## package.json

- 다른 사람도 내 패키지 (프로젝트) 를 쉽게 설치하고 관리할 수 있도록 도와주는 JSON 형태의 파일. (자바스크립트 객체 리터럴 이면 안됨)
- npm 의 레지스트리에 등록되려면 필수적으로 포함되어야 함.
- 패키지의 이름인 `name` 과 패키지의 버전인 `version` 은 꼭 포함되어야 함.
  - 만일 npm 에 내 패키지를 등록한다면 `name` & `version` 이 고유한 식별자가 됨

### overrides

- 종속성 변경 이 필요한 경우 (e.g. 보안 문제가 있는 특정 버전으로의 교체, 기존 종속성을 fork로 대체, 또는 패키지의 동일한 버전이 어디에서나 사용되도록 하는 등) 에서 종속성 변경 할 때 사용 됨

```json
// 패키지 foo 는 항상 1.0.0 버전으로 고정된다.
{
  "overrides": {
    "foo": "1.0.0"
  }
}
```

### dependecies

- 해당 패키지에서 사용하는 모듈의 이름과 버전이 매핑 되어있음

- 특정 버전인 경우

  - "~": "17.0.2"

- Tilde Ranges(~)

  - patch update 를 허용하는 version range (버전 범위) 를 지정
    - 여기서 patch update 는 메이저 혹은 마이너 버전이 수정되지 않고, 작은 버그 수정만 포함 하는 업데이트임.
    - 그러므로 Tilde Ranges 를 사용한다는 것은 bug fix 하는 update 를 허용한 다는 뜻
  - 프로젝트에서 지정된 버전과 메이저, 마이너 버전 번호는 동일하지만 패치 버전 번호는 더 크거나 같은 패키지의 모든 버전을 사용할 수 있다는 뜻.
    - e.g. ~1.2.0 이렇게 되어있으면 1.2.x 를 모두 사용할 수 있음

- Caret Ranges(^)
  - path update + 마이너 버전 을 허용 하는 version range 를 지정
  - Caret Ranges 를 사용한 다는 것은, 해당 프로젝트에서 메이저 버전 번호만 같다면 모든 버전을 사용할 수 있다는 뜻이다. 마이너 버전 번호는 크거나 같아야 한다.

예를 들어 ^17.0.2인 경우, 17.9.9까지 버전을 갱신하다. ^0일 경우는 0.0.0부터 0.0.9.까지 버전을 갱신한다.

Reference

[Difference between tilde ( ~ ) and caret ( ^ ) in package.json](https://www.geeksforgeeks.org/difference-between-tilde-and-caret-in-package-json/)

[Whats the difference between tilde and caret in packagejson](https://saturncloud.io/blog/whats-the-difference-between-tilde-and-caret-in-packagejson/)

## package.json / package-lock.json

- package.json에서는 버전정보를 저장할 때 version range 를 사용.

  e.g.) "express": "~4.16.1"

  - version range
    - 사용할 패키지의 버전에 대하여 특정 짓는 것이 아닌, 몇 이상 몇 미만의 버전을 사용할 것이라고 정해놓는 것

-

Reference

https://docs.npmjs.com/cli/v7/configuring-npm/package-json
https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
