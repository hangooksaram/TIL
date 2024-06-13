# App Router

- Next 13 버전에 추가. 13.4 버전에 안정화.

## 특징

- 기존 /pages/ 디렉토리 내부에서 라우팅 -> /app/[페이지 이름]/ 로 /app/ 디렉토리 내부에서 페이지 명을 따라 라우팅
- React Server Component 를 사용할 수 있으며 default component 임. 따라서 클라이언트 코드가 들어가려면 코드 최상단에 "use client" 가 위치해야함.

## useRouter

### page router 와의 차이점

- `next/navigation` 에서 가져옴.
- `next/router` 의 다양한 `router` 이벤트 사용 불가
  - 따라서, router 의 변경사항을 알려면 `usePathname`, `useSearchParams` 를 사용해야함.
