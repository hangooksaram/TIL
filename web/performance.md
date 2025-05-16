# Performance (성능)

# 측정 기준
## FCP (콘텐츠가 포함된 첫 페인트)
- 사용자가 페이지로 이동한 후 브라우저에서 첫 번째 DOM 콘텐츠를 렌더링하는 데 걸리는 시간을 측정. 
    - 페이지의 이미지, 흰색이 아닌 `<canvas>` 요소, SVG는 DOM 콘텐츠로 간주됩니다. iframe 내부의 콘텐츠는 포함되지 않음.
- 1.8 이내 면 빠름

### 개선법
- 글꼴 로드 시간이 중요한 경우가 많다고 함.

## Speed Index (속도 색인)
- 페이지 로드 중 콘텐츠가 시각적으로 표시되는 속도를 측정.
- 동작 방식
  1.  브라우저에서 페이지 로드 동영상을 캡처 하여 프레임 간의 시각적 진행 상황을 계산
  2. Speedline Node.js 모듈을 사용해 점수 생성

### 개선법
- [기본 스레드 작업 최소화](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown?hl=ko_)
- [자바스크립트 실행 시간 단축](https://developer.chrome.com/docs/lighthouse/performance/bootup-time?hl=ko)
- [웹폰트가 로드되는 동안 텍스트가 계속 표시되도록 하기](https://developer.chrome.com/docs/lighthouse/performance/font-display?hl=ko)

## TBT (총 차단 시간)
- 페이지가 마우스 클릭, 화면 탭 또는 키보드 누름과 같은 사용자 입력에 응답하지 못하도록 차단된 총 시간을 측정.

## LCP (콘텐츠가 포함된 최대 페인트)
- 표시 영역에서 가장 큰 콘텐츠 요소가 화면에 렌더링될 때 측정됨. 
    - 표시 영역 밖으로 확장되거나, 요소가 잘리거나 보이지 않는 오버플로가 있는 경우, 해당 부분은 요소의 크기에 가산되지 않음.