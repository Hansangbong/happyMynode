// '/about' 경로로 GET 요청이 들어왔을 때 "This is the About page"라는 메시지를 보내는 라우터 미들웨어를 추가해보세요.
// Router 객체를 사용해서 작성하세요.
const express = require("express");
const router = express.Router();
const app=express();
const port = 3000;


app.use(router);

app.get("/", (req, res) => {
    res.status(200).send("Hello!");
})

router.route("/about").get((req,res) => {
    res.status(200).send("This is the About page");
})






app.listen(port, () => {
    console.log(`${port}번 포트에서 quiz 작동 중`);
})