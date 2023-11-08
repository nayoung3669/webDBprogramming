const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
// app.use(express.json());
app.use(cors());

// sql
const connection = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "kny080825^^",
  database: "my_db",
});

connection.connect();

connection.query("SELECT * from TODOS", (error, rows, fields) => {
  if (error) throw error;
  console.log("TODOS: ", rows);
});

// connection.end();

//apis
app.listen(8080, () => {
  console.log("8080 port 연결 성공");
});

//todos 전체조회
app.get("/posts", (req, res) => {
  res.send("전체조회");
  console.log("전체 조회 성공");
});

//todo 상세조회
app.get(`/posts/detail/:id`, (req, res) => {
  const id = req.params.id;
  res.send("전체조회");
});

//todo 추가
app.post("/posts", (req, res) => {
  console.log("hihi");
  // const params = req.params.id;
  // console.log(params);
  res.send("<h1>Successfully added!</h1>");
});

//todo 수정
app.put(`/posts/:id`, (req, res) => {
  const id = req.params.id;
  res.send("<h1>Successfully updated!</h1>");
});

//todo 삭제
app.delete(`/posts/:id`, (req, res) => {
  const id = req.params.id;
  res.send("<h1>Successfully deleted!</h1>");
});
