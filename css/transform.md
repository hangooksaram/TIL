# transform

- style 속성에서 직접 템플릿 리터럴로, transform 값 을 수정할 경우 문자열의 처음 과 끝을 공백으로 비워야한다.

  - ```js
    const a = document.createElement("div");
    const someTranslateString = "1px 1px";

    a.style.transform = ` translate:${someTranslateString} `;
    ```
