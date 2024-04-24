// '/' 경로로 GET 요청했을 때 사용자 정보(users)를 JSON 형태로 응답하는 미들웨어를 작성하세요.
const express = require("express");
const path = require("path");
const app = express();

const port = 3000;

const users = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Lee" },
  { id: 3, name: "Park" },
];

app.get("/", (req, res) => {
  res.status(200);
  res.send("Hello");
});


app.get("/users", (req, res) => {
  res.json(users); 
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`${port}번 포트에서 quiz7-3 실행 중`)
});