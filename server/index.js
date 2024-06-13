const express = require("express");
const app = express(); // 여기서 express 함수를 호출하는 부분을 추가했습니다.
const port = 3000;

app.get("/", (req, res) => {
  res.send("안녕 Express!!!!!!!");
});

app.listen(port, () => {
  console.log("Express 서버가 포트 " + port + "에서 작동 중입니다.");
});
