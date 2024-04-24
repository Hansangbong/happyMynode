const express = require("express");
const path = require("path");
const app = express();

const port = 3000;




app.get("/", (req, res) => {
    res.status(200);
    res.send("Hello");

});






app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/contacts", require("./routes/contactRoutes"));


app.listen(port, () => {
    console.log(`${port}번 포트에서 실행 중`)
});