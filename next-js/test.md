# Testing in Next js

## Errors

### `unexpected error is occured Error: invariant expected app router to be mounted`
- 발생하는 경우
   - `render` 함수를 통해 그리려고 하는 page 혹은 component 에서 사용하는 외부 라이브러리 의 함수 혹은 Hook 을 `mock` 하지 않았을 때 
```tsx
// /some/page.tsx
import useRouter from 'next/navigation'

export default function SomePage () {
    const router = useRouter();

    /** ... */
    
    return <>
        <button onClick={()=> router.push("/")}>
            홈으로 이동
        </button>
    </>
}


// SomePage.test.tsx
import useRouter from 'next/navigation'
import SomePage from '@app/some/page'

// 사용되는 Hook 과 함수를 Mock 하지 않을 경우 에러 발생
jest.mock('next/navigation', ()=> ({
    useRouter() {
        return {
            push : jest.fn()
        }
    }
}))

test(("SomePage render properly"), ()=>{
    render(<SomePage/>);
})

```