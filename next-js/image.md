# Image

## Image Optimization

- /next/image 를 import 하여 사용하는 Image 는 기본적으로 최적화를 포함하고 있다.
  - 주의할 점은, 최적화 기능은 Node js 서버가 필요하기 때문에, 정적 배포를 할 때는 지원할 수 없게 된다.
  - 그러므로 custom loader 를 사용하거나, Image 태그에 unoptimized 속성 값을 true 로 설정해야 한다.

## Remote Images

- 로컬에 저장되어있는 이미지가 아닌, 외부 이미지를 가져다 사용할 때 별도의 설정이 필요

  ```ts
  // app/page.js

  import Image from "next/image";
  export default function Page() {
    return (
      <Image
        src="https://s3.amazonaws.com/my-bucket/profile.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    );
  }
  ```

  ```ts
  // next.config.js
  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "s3.amazonaws.com",
          port: "",
          pathname: "/my-bucket/**",
        },
      ],
    },
  };
  ```

  ## `width`

- width, height 는 props 는 required 한 값이지만, style 로 직접 정의할 수 있다.
  - e.g. width, height 의 값으로 퍼센트 나 "auto" 와 같이 지정하고 싶을때

```javascript
<Image src="/myImage.png" alt="myImage"/>
// error

<Image style=
{{width : "100%", height: "auto"}} src="/myImage.png" alt="myImage"/>
// error

```
