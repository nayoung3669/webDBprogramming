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

//todos 전체조회
app.get("/api/posts", (req, res) => {
  res.send("전체조회");
});

//todo 상세조회
app.get(`/api/posts/detail/:id`, (req, res) => {
  const params = req.body;
  const id = params.id;
  res.send("전체조회");
});

//todo 추가
app.post("/api/todos", (req, res) => {
  const params = req.body;
  // const dataObj = { };
  console.log("------");
  console.log(params);
  res.send("<h1>Successfully added!</h1>");
});

//todo 수정
app.put(`/api/todos/:id`, (req, res) => {
  const params = req.body;
  const id = params.id;
  res.send("<h1>Successfully updated!</h1>");
});

//todo 삭제
app.delete(`/api/todos/:id`, (req, res) => {
  const params = req.body;
  res.send("<h1>Successfully deleted!</h1>");
});
