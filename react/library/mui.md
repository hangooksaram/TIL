# Mui

## theme 속성 타입 지정

- `Typescript` 의 `theme` 에서 나만의 값 을 사용하고 싶다면, 모듈 보강을 통해 타입을 지정해주어야한다. 조금 까다로움.

- `Mui theme` 의 `Typography` 에는 총 13 가지의 기본 Variant 를 제공한다.

- Typescript 를 사용할 때, 해당 Variant 를 제외한 값을 추가하면, 타입 에러가 발생한다. 그렇기에, 나만의 `variant` 를 가지고 싶다면, 앞서 말했듯 타입을 지정해주어야 한다.
