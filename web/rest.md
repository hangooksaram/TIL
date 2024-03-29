# Rest

- REST 개념의 아버지, 로이 필드 왈…
- 하나의 아키텍처라고 볼 수 있다. API 를 설계할 때, 리소스 (자원) 이 있고, HTTP Method 를 통해 그 자원을 처리하도록 한다.
- RESTful API - REST 아키텍쳐 스타일에 부합하는 API
- REST 6 원칙
  - Uniform Interface → 중요
  - Stateless
  - Caching
  - Client-Server
  - Hierarchical system
  - Code on demand
- Uniform Interface

  1. 자원의 식별
     - 자원 - 이름을 지닐 수 있는 모든 정보. 개념적인 대상. 현실에 존재하는 대상.
     - 자원은 객체. 객체의 상태는 언제나 변화 가능. 그렇기 때문에 **변하지 않는 식별자 필요.**
     - 이 **변하지 않는 식별자** → URI 로써 사용. e.g. /user/1
       - URI 를 식별자로 사용
  2. 표현 ( Representation ) 을 통한 자원에 대한 조작
     - **표현** - **특정한 상태의 자원에 대한 표현**
     - 하나의 자원에 대한 표현은 다양한 방식 일 수 있음. e.g. 문서, 파일, HTTP 메시지 엔티티 등등

  ***

  여기서 잠시. 그래서 REST 는 **자원에 대한 표현 전송** 이라고 얘기할 수 있음.

  **RE**presentational **S**tate **T**ransfer

      표현된 (자원의 상태)        전송

  자아~ 요약 하자면. **URI 로 식별된 자원은 객체와 같고, 시간에 따라 상태 (state) 가 변화 할 수 있음. 특정 시점에 자원이 지니고 있는 상태 (state) 를 특정한 표현으로 표현하고, 그 표현한 것을 클라이언트 와 서 버가 주고 받는 것.**

  1. 자기 서술적 메세지
     - 앞서 말했던 클라이언트 와 서버 를 오가는 메세지는 그 자체로 **스스로에 대해 충분히 설명**할 수 있어야 한다.
     - 클라 / 서버 사이의 **컴포넌트 (기계) 들은 메세지의 내용을 참고해 적절한 작업 수행.**
     - Host 헤더에 도메인명 기재 필요하다. 어디로 보내는지에 대한 정보. HTTP/1.1 부터 Host 헤더 필수화.
     - 캐쉬 헤더를 통해 캐쉬 전략 지정. 캐쉬관련 동작들 커스터마이징.
  2. HATEOAS
     - 하이퍼미디어를 통해 앱 상태를 변경할 수 있는 인터페이스를 제공해야 한다.

- 앞서 살펴본 Uniform Interface 제약조건은 비효율적이고, 애플리케이션에 필요한 정보가 아니라, 표준화된 형식으로 데이터를 전달 하기 때문에,
- **REST 는 상황에 따라 최적이 아닐 수 있다!**
- 그럼 API 설계의 방향성은?
  1. 진짜 API 를 설계 하든가
  2. REST 스러운 API 를 설계 하든가
  3. 다른 대안을 찾든가 (e.g. GraphQL API)
