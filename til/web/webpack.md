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


### CSS
Production build 에서는 development 빌드에서 사용하는 style-loader 를 사용하여, `<script>` 의 `<head>` 에 `<style>` 내에  모든 css 를 삽입하는 방식을 사용할 수 없다.

따라서 css 파일을 새롭게 생성하는 방식이 필요한데, 이를 위해 MiniCssExtractPlugin 플러그인이 필요함. 

```js
module.exports = { 
    /*..*/
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      linkType: false,
      // 번들링될 css file 이름 지정
      filename: "assets/css/[name].[contenthash:8].css",
      chunkFilename: "assets/css/[name].[contenthash:8].chunk.css",
    }),
  ],
}
```
**주의할점은, loader 를 설정할때 development 빌드에서 사용하던 style-loader 는 꼭 제외해줘야한다.**

## Optimization
- CSS : `CssMinimizerPlugin`
- Image : https://webpack.kr/plugins/image-minimizer-webpack-plugin/#root
