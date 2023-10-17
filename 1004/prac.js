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
  //response만들기
  res.setHeader("Content-Type", "text/html"); // html, plain
  res.end(payload); //client가 볼 수 있게
});

server.listen(3000, "localhost", () => {
  status.showStatus(); // 모듈 끌어와서 메소드 사용
});
