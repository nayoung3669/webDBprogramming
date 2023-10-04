function showStatus() {
  console.log("---------");
  console.log("연결되었습니다.");
  console.log("---------");
}

//다른 파일에서도 사용 가능하도록
module.exports.showStatus = showStatus;
//module.exports.이름 = 모듈 함수 이름
