// 사용하여 사용자가 입력한 숫자를 받아 해당 숫자의 제곱을 반환하는 API를 작성하세요.
// (예) "/square/5" 경로로 접속하면 25를 반환합니다.
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200);
    res.send("quiz Hello");
    //res.json({ message: "Hello node!" });
});


app.get("/square/:num", (req, res) => {
    const number = Number(req.params.num);
    const result = number * number;

    res.status(200).send(`View contact${number} for ID: ${result}`);
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 퀴즈 실행 중`)
});