

- **다음 리페인트에서 다른 프레임을 애니메이션 적용할려면 콜백 루틴이 반드시 스스로 `requestAnimationFrame()` 을 호출해야 한다.**

e.g.
```javascript
const animation = ()=> {
    /* ... */

    requestAnimationFrame(animationFrame);
}

requestAnimationFrame(animationFrame);
```