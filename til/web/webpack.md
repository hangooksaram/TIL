- `publicPath` : 모든 애셋에 대한 기본 경로를 지정
    - e.g. output.path 에 지정된 디렉터리로 내보내는 모든 파일은 output.publicPath 에서 참조됨
    - `html-webpack-plugin` 를 통해 자동으로 생성한 html 에서 bundle.js 를 가져오는 경로를 보면 확인 할 수 있다.
    ```html
        // publicPath : '/'
        <script defer="defer" src="/bundle.js"></script>

        // publicPath : '/dist'
        <script defer="defer" src="/dist/bundle.js"></script>
    ```

### `devServer`
- `static` 
    - `path` : 해당 디렉토리 하위의 에셋들만 제공



### 로더(Loader)
로더(Loader) 는 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(HTML, CSS, Images, 폰트 등)들을 변환할 수 있도록 도와주는 속성입니다.
