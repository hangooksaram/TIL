# History

## methods

### pushState

- 브라우저의 세션 기록 스택에 `새로운 기록 항목` 을 추가함.

```js
pushState(state, unused, url);
```

- `state` : `pushState()` 에 의해 생성되어 새로운 기록 항목 과 관련된 JavaScript 객체. - `unused` : 생략될 수 없음. 나중에 메서드가 변경될 경우를 고려해도, 빈 문자열을 전달하는 것이 안전함
- `url` : 새로운 기록 항목의 URL. 절대경로일 필요없고, 상대 경로일 경우, 현재 URL 을 기준으로함. 지정되지 않을 경우, 현재 URL 로 설정됨.
