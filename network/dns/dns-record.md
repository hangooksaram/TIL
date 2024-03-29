# DNS 레코드

- 도메인과 연결된 IP 주소와 연결하는 방법에 대한 정보가 매핑되어있는 데이터베이스이다. Auth DNS 가 도메인과 웹사이트 고유 IP 주소를 매핑해주는 시스템이기 때문에, DNS 레코드는 DNS 에서 아주 기본적이자 핵심적인 구성요소라고 생각할 수 있다.

## 네임서버

- 네임서버 는 DNS 레코드 를 가지고 관리하고 있는 실질적인 물리적 컴퓨터 를 의미한다. DNS 서버의 Authoritative DNS Server 가 통상적인 이 `네임서버` 를 의미한다.

## A 레코드

- A 레코드의 값은 웹사이트의 IP 를 나타내며, 역할은 IP 주소 조회이다. 이 A 레코드를 사용하여 도메인 을 사용하는 웹페이지를 로드할 수 있다. 가장 기본적인 DNS 레코드이다.

## CNAME

- 다른 도메인의 별칭을 뜻하거나, 서브 도메인 을 뜻 한다. 그래서 호스트 명을 입력할 수 있다. 예를 들어, api.coolapp.com 은 coolapp.com 이라는 도메인과 맵핑될 수 있다.

## NS 레코드

- 도메인에 대한 최소 2개의 네임서버가 있어야 한다.
- 각 이름 서버는 고유한 IP 주소로 확인되어야한다.
