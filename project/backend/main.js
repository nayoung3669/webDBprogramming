const path = require("path");
const express = require("express");
const mysql = require("mysql");

const app = express();
app.use(express.json());

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "ums",
// });

app.listen(8080, () => {
  console.log("8080 port 연결 성공");
});

app.get("/", (req, res) => {
  res.send("hi");
});

//todo 추가
app.post("/process/todo", (req, res) => {
  const params = req.body;

  //form Data 만들기
  const dataObj = { username, pwd, email, login_count, imported };

  res.send("<h1>Successfully added!</h1>");
});

// 로그인 로직
app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/pages/login.html");
});
