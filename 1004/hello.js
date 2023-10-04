const http = require("http");

const server = http.createServer(function (req, res) {
  //매개변수 2개  req, res
  //response 만들기
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, world"); // client가 보게 됨
});

server.listen(3000, "localhost", () => {
  console.log("연결되었습니다.");
}); //port 번호, host, func ... (매개변수 뭐 받는지 보기)

//이후 localhost:3000 접속하면 hello world 볼 수 있음
