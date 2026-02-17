# fetch

## redirect
- `fetch`는 기본적으로 `redirect: 'follow'`로, 백엔드가 302를 반환하면 자동으로 리다이렉트를 따라가게 되고, 최종적으로 클라이언트에서 보이는 status는 200 이 된다
  - `redirect: 'manual'` 을 설정하면 리다이렉트를 따라가지 않고 원래 응답을 그대로 받을 수 있다