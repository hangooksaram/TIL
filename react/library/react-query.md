# react-query

## staleTime

- "탁한", "신선하지 않은" 이라는 사전적의미를 지님.
- react-query 에서는 staleTime 이 길수록 (ms 가 단위) 데이터를 서버에 다시 fetch 하지 않음.
- e.g. 거의 동적이지 않아 정적인 데이터가 있다. -> staleTime 을 길게 설정하면 됨.
