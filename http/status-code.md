# HTTP Response Status Code

## 403 Forbidden

- 서버에 요청이 전달되었지만, 권한 때문에 거절되었다는 것을 의미
- 이 상태는 401과 비슷하지만, 로그인 로직(틀린 비밀번호로 로그인 행위)처럼 반응하여 재인증(re-authenticating)을 하더라도 지속적으로 접속을 거절한다.
