const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.urlencoded({ extended: true }));
//정적 파일 사용
app.use("scripts", express.static(__dirname + "/scripts"));

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "ums",
  connectionLimit: 10, //connection은 10개까지만 가능
});

app.listen(3000, () => {
  console.log("연결되었습니다");
});

app.post("/process/signup", (req, res) => {
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
      "INSERT INTO users (username, pwd,  email, gender) VALUES (?, password(?), ?, ?)",
      [username, pwd, email, gender],
      // 쿼리 실행 후 결과
      (err, rows) => {
        conn.release();
        // exec.sql : 이전의 쿼리문
        console.log("SQL", exec.sql);
        if (!err) {
          res.send("succeed.");
        } else {
          console.log(`The data from the user table are:11 \n`, rows);
        }
      },
    );
  });
});
