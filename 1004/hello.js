//import
const http = require("http");
const status = require("./module");

payload = `
    <html>
        <head>
            <title>Hello Node.js</title>
        </head>
        <body>
            <h1>Hello Node.js!</h1>
        </body>
    </html>
`;

const server = http.createServer(function (req, res) {
  //매개변수 2개  req, res
  //response 만들기
  res.setHeader("Content-Type", "text/html"); //html, plain 등 구분해서 사용
  res.end(payload); // client가 보게 됨
});

server.listen(3000, "localhost", () => {
  status.showStatus(); //연결 되었는지 표시해주는 모듈 (사용자 지정)
}); //port 번호, host, func ... (매개변수 뭐 받는지 보기)

//이후 localhost:3000 접속하면 hello world 볼 수 있음
