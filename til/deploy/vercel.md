# Vercel

# 배포 방법

## 브랜치에 push 하기

- deploy 할 브랜치를 선택할 수 있다. 해당 브랜치에 push 가 실행되면 자동적으로 deploy 된다.

## Vercel CLI

```
npm i vercel
```

```
vercel deploy (or vercel)
```

## Build Configuration
## Output Directory
https://vercel.com/docs/deployments/configure-a-build#output-directory
- 해당 디렉토리 내부의 에셋들만 제공된다.


## Webpack
- font directory path 찾지 못하는 이슈
   - font-face 의 url 을 절대경로로하니 찾지 못하는 듯하다. 상대경로로 바꿔주니 찾는 듯
