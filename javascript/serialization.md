# Serialization

- 객체나 데이터 구조 를 네트워크나 저장소(예, 배열 버퍼 또는 파일 형식)를 통한 전송에 적합한 형식으로 변환하는 프로세스

- JavaScript 에서는 `JSON.stringify()` 를 통해 객체를 `JSON` 문자열 로 `serialize` 할 수 있음.
- 모든 원시값 은 직렬화가 가능함.
- 객체는 일부만 가능
  - 직렬화가 지원 되는 객체
    - Boolean object
    - String object
    - Date
    - RegExp lastIndex필드는 보존되지 않습니다.
    - Blob
    - File
    - FileList
    - ArrayBuffer
    - ArrayBufferView
    - ImageData
    - Array
    - Object (plain객체 (e.g. 객체 리터럴))
    - Map
    - Set
