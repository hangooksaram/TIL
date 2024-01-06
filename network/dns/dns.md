# DNS

- Domain Name System.
- 웹사이트의 IP 주소 와 도메인 주소 를 이어주는 환경/시스템. 그 시스템 내에서 부분적인 역할을 하는 서버를 DNS 서버라고 한다.
- DNS 는 일종의 지도 애플리케이션이라고 볼수 있다. 예를 들어 서울 관악구 남부순환로 1820 에그엘로우 라는 주소가 있다고 치자. 이건 웹사이트의 IP 이다. 저 건물로 가려면 정확한 주소를 입력하여 가야한다. 하지만 우리가 저 건물을 검색할 때 어떻게 하는가? 에그옐로우만 검색한다. 이때 에그옐로우가 도메인이다.

## 프로세스

![Alt text](/assets/images/dns-1.png)

1. A 가 브라우저 에 CoolApp.com 을 검색
2. DNS 서버로 CoolApp.com 이라는 도메인 전달
3. DNS 서버 내부에서 CoolApp.com 이라는 도메인 과 매핑된 IP 주소를 찾아냄
4. 브라우저 에 IP 주소 를 갖고 있는 호스팅 서버 를 안내
5. 브라우저는 호스팅 서버에 요청을 보냄

## Nameserver

- 네임서버 는 DNS 레코드를 저장하고 관리하는 **물리적 서버** 이며, DNS 에서 중요한 부분이다.
- 등록한 도메인 이름을 사용할 수 있게 해 주는 컴퓨터이다. 도메인이름을 인터넷상의 주소(IP주소)로 변환시켜 원하는 웹사이트를 찾아갈 수 있게 도와준다.
- 인터넷 표준에 의하면 도메인의 안정적인 서비스를 위해 반드시 2개이상의 네임서버를 등록하도록 되어 있다.

- 모든 네임 서버는 일반적으로 하위 도메인으로 시작하는 자체 도메인 이름이 있다.

  - e.g. ns1.example.com, ns2.example.com

- 다음은 호스팅 서비스를 제공하는 Vercel 에서 Domain 을 생성하면 들어갈 수 있는 DNS 레코드 설정 탭이다.

  ![Alt text](/assets/images//vercel-dns-record.png)

  - DNS 레코드를 설정하는 방법에 대해 Vercel 의 네임서버를 사용하던지, DNS 레코드를 관리할 수 있는 third-party library 사용을 제안한다.

---

Reference

https://vercel.com/docs/projects/domains#vercel-nameservers

https://blog.o3g.org/network/dns-record/

https://inplaza.com/InplazaBoard/board_main.html?page=1&find=head_each&key=&hongsbbs_id=3&dc=&hongsbbsmode=read&head_key=%B3%D7%C0%D3%BC%AD%B9%F6&TB_id=46
