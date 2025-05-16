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

## `width` , `height`

### props

- `next/image` 에서 `width`, `height` 는 `required` 한 `props` 이다.
- `type` : px 값으로 변환 될 number 타입의 값만 전달이 가능하다.

### 인라인 `style` 값 으로 직접 정의할 수 있다.

- width, height 의 값을 고정된 px 값이 아닌 퍼센트 나 "auto" 와 같이 지정하고 싶을때 인라인 style 의 width 와 height 값을 지정할 수 있다.
- 주의할 점은 이미지가 로컬에 저장되어 있는 이미지 일 경우 에 만 가능하다.

```typescript
<Image src="/myImage.png" alt="myImage" />;
// error

import myImage from "../../public/images/myImage.png";

<Image style={{ width: "100%", height: "auto" }} src={myImage} alt="myImage" />;
// error
```
