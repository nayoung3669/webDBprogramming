//생성, 수정하기
/* 1번째 방법 : createElement 메소드 사용하기 */

//div 태그 생성
const myTitle = document.createElement('h1')

// 텍스트 추가
myTitle.textContent = "This is title(h1) with createElement method."

//스타일을 위한 클래스 네임 적용
myTitle.className = "mytitle"

//타이틀에 id 추가
myTitle.id = 'title'

//DOM에 myTitle div 요소 추가하기
document.body.appendChild(myTitle)



/* 2번째 방법 : Object의 assign 메소드를 활용한 방법 */

document.body.appendChild(
    Object.assign(
        document.createElement('div'),
        {id : 'content'},
        {textContent: 'This is content with Object.assign() method.'}
    )
)


/* 3번째 방법 : innerHTML로 `` 을 활용한 방법 */

// document.body.innerHTML = `
//   <div id='div-1'>div-1 Hello</div>
//   <div id='div-2'>div-2 Hello</div>
//   <div id='div-3'>div-3 Hello</div>
// `


//삭제하기

const div = document.getElementById('content')
div.remove();