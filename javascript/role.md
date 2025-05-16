# role
```ts
type AriaRole =
        | "alert"
        | "alertdialog"
        | "application"
        | "article"
        | "banner"
        | "button"
        | "cell"
        | "checkbox"
        ...
        | (string & {});
```


 - ARIA 시맨틱 을 추가하는 것은, 오직 브라우저의 접근성 API 에 추가적인 정보를 드러낼 뿐이지, DOM 에 는 영향을 미치지 않는다.

 