# react-query

## caching

- react-query 에서는 새로운 쿼리 인스턴스가 생성되고, 새로운 네트워크 요청을 보내 데이터를 받으면, 자동적으로 캐시에 해당 쿼리 키값으로 데이터를 저장한다.
- 여기서 `stale` 하냐, `fresh` 하냐에 따라 같은 쿼리키에 해당하는 요청을 네트워크 요청으로 보내느냐, 캐시에 저장된 데이터를 쓰느냐가 갈린다.

### stale / fresh

- `stale` 은 "탁한", "신선하지 않은" 이라는 사전적의미를 지닌다. 즉, 캐시에 있는 데이터가 더이상 신선하지 않기 때문에, `stale` 하다는 것은, 새로운 데이터를 서버에 요청해야한다는 것을 뜻한다.
- `fresh` 하다는 것은 stale 의 반대의 상황이라고 생각하면된다. 캐시에 있는 것이 여전히 신선하다, 즉 사용할 수 있다는 의미이다.

### staleTime

- `staleTime` 만큼 (ms 가 단위) 데이터를 서버에 다시 fetch 하지 않음. 즉, staleTime 동안 해당 데이터는 fresh 한 상태인 것이고, staleTime 이 끝나면 해당 데이터는 stale 해지는 것.
  - e.g. 거의 동적이지 않아 정적인 데이터가 있다. -> staleTime 을 길게 설정하면 됨.

## enabled

- 이 값이 `true` 일 경우 useQuery 를 실행, `false` 일 경우 실행시키지 않음
- `undefined` 일 경우 실행 됨

### **defaults**

- 기본적으로 `staleTime` 은 0 으로 설정 되어있다. 즉, 모든 데이터가 fresh 하다고 여겨, 매 요청마다 실제로 서버에 요청.

> 쿼리는 선언형이다.

**React Query**를 처음 사용하는 사람들은 **refetch**에 대해 명령형으로 실행 하고자 하는데 잘못된 방법이다. **React Query**에서 강조되는 아주 중요한 개념이다.

쿼리가 있고 데이터를 가져오고자 한다. 이제 버튼을 클릭하여 필터링 된 데이터를 다시 가져오고 싶지만 파라미터가 다르다. 일반적으로는 다음과 같이 작성한다.

```tsx
function Component() {
  const { data, refetch } = useQuery(['todos'], fetchTodos)

  // ❓ 필터 정보를 넘길 수가 없다 ❓
  return <Filters *onApply*={() => refetch(???)} />}
```

위 예시에서 필터된 데이터를 가져올 방법은 무엇일까? 정답은 **불가능하다.**

**refetching**을 위한 것이지 데이터를 변경하기 위한 쿼리가 아니다.

데이터를 변경 하는 **state**가 있는 경우 **Key**가 변경 될 때 마다 **React Query**가 트리거 되어 자동으로 **refetching**하기 때문에 우리는 **Key**에 저장하기만 하면 된다. 필터를 적용하려면 **state**를 변경 시키면 된다.

```tsx
function Component() {
  const [filters, setFilters] = React.useState()
  const { data } = useQuery(['todos', filters], fetchTodos)

  return <Filters *onApply*={setFilters} />}
```
