# Storybook

# 에러 해결

> Error: Failed to execute 'createElement' on 'Document': The tag name provided ('static/media/src/assets/svg/hamburger-more-icon.svg') is not a valid name.

- CRA 공식문서에서 알려주는 svg 를 사용하는 방법은 다음과 같다.

```jsx
import { ReactComponent as Logo } from "./logo.svg";

function MyLogo() {
  return <Logo />;
}
```

svgr/webpack 라이브러리 설치
npm i @svgr/webpack --save-dev
storybook/webpack 커스텀 설정
https://stackoverflow.com/questions/61498644/storybook-failed-to-execute-createelement-on-svg-files-using-svgr-webpack

```jsx
// .storybook/main.js
webpackFinal: async (config) => {
const fileLoaderRule = config.module.rules.find(
(rule) => rule.test && rule.test.test('.svg'),
);
fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;

},
export 방식 변경
// 변경 전
export { ReactComponent as HamburgerMoreIcon } from './hamburger-more-icon.svg';
export { ReactComponent as DownloadIcon } from './download-icon.svg';
export { ReactComponent as NavigationItemIcon } from './navigation-item-icon.svg';

// 변경 후
export { default as HamburgerMoreIcon } from './hamburger-more-icon.svg';
export { default as DownloadIcon } from './download-icon.svg';
export { default as NavigationItemIcon } from './navigation-item-icon.svg';

```

스토리북 최종

```jsx
import { node } from "prop-types";
import Hamburger from "./Hamburger";
import { HamburgerItem } from "./Hamburger.styled";

export default {
  title: "Common/Hamburger",
  component: Hamburger,
  argTypes: {
    color: {
      children: node,
      anchor: "left" || "right",
    },
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export const Left = {
  args: {
    children: (
      <HamburgerItem>
        <div>테스트1</div>
        <div>테스트2</div>
      </HamburgerItem>
    ),
    anchor: "left",
  },
};

export const Right = {
  args: {
    children: (
      <HamburgerItem>
        <div>테스트1</div>
        <div>테스트2</div>
      </HamburgerItem>
    ),
    anchor: "right",
  },
};
```
