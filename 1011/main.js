// 참고 : https://expressjs.com/en/4x/api.html#app

const express = require("express");
const app = express();
const mysql = require("mysql");

//데이터 인코딩! -> 회원가입 form data 볼 수 있음
app.use(express.urlencoded({ extended: true }));
//script 재확인
app.use("scripts", express.static(__dirname + "/scripts"));

// createPool vs createConnection?
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "ums",
  connectionLimit: 10,
});

app.listen(3000, () => {
  console.log("연결되었습니다.");
});

//Res 만들기 :app.get()

app.get("/", (req, res) => {
  res.send("response for home page");
});

app.get("/about", (req, res) => {
  //html 파일 보내기
  console.log(__dirname);
  res.sendFile(__dirname + "/pages/about.html"); // dirname :homepage url
});

app.get("/signup", (req, res) => {
  //html 파일 보내기
  console.log(__dirname);
  res.sendFile(__dirname + "/pages/signup.html"); // dirname :homepage url
});

//경로 "/" 필요
app.post("/proceㅕㅕㅑ₩₩ss/signup", (req, res) => {
  console.log(req.body);
  pool.getConnection((err, conn) => {
    if (err) {
      throw err;
    }
    const username = req.params.username;
    const pwd = req.params.pwd;
    const email = req.params.email;
    const gender = req.params.gender;

    const exec = conn.query(
      "INSERT INTO users (username, pwd, email, gender) VALUES (?, password(?), ?, ?)",
      [username, pwd, email, gender, "", ""],
      (err, rows) => {
        conn.release();
        console.log("SQL", exec.sql);
        if (!err) {
          res.send(`User with record ID has been added`);
        } else {
          //connection 다시 반납 -> 자원을 많이 소모하는 작업이기 때문에, 매번 필요할 때마다 새로운 연결을 생성하는 것은 비효율적이기 때문
          console.log(`The data from the user table are:11 \n`, rows);
        }
      },
    );
  });
  res.send("data received");
});
