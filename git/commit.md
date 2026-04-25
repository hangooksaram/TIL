# commit


## 키워드로 커밋 찾기

```bash
git log --grep="키워드" --oneline
```


## 파일의 변경 이력 찾기

```bash
git log --oneline -- 파일경로
```

각 커밋의 실제 변경 내용까지 보기:

```bash
git log -p -- 파일경로
```


### 삭제된 파일의 커밋 찾기

삭제된 파일도 추적하려면 `--all --full-history` 옵션 사용:

```bash
git log --all --full-history -- "*파일명*"
```

---

## 특정 커밋의 변경 내용 확인하기

변경된 파일 목록만 보기:

```bash
git show 커밋해시 --stat
```

실제 변경 내용까지 보기:

```bash
git show 커밋해시
```

특정 파일만 보기:

```bash
git show 커밋해시 -- 파일경로
```



## Detached HEAD 상태란?

### 일반 상태

```
HEAD → main(브랜치) → 커밋A
```

HEAD는 브랜치를 가리키고, 브랜치가 커밋을 가리키는 구조.

### Detached HEAD

```
HEAD → 커밋A (브랜치 없이 직접 커밋을 가리킴)
```

`git checkout 커밋해시` 를 실행하면 이 상태가 된다.

이 상태에서 새 커밋을 만들면 어느 브랜치에도 속하지 않기 때문에, 다른 브랜치로 이동하는 순간 그 커밋들이 사라질 수 있다.

### 해결 방법

```bash
# 원래 브랜치로 돌아가기
git checkout main

# 이 상태에서 작업 내용을 보존하고 싶다면 새 브랜치 만들기
git checkout -b 새브랜치명
```

커밋 내용 확인 용도로만 사용했다면 `git checkout main` 으로 돌아오면 된다.