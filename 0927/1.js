class Circle {
    constructor(r,x, y) {
        this.r = r;
        this.x = x;
        this.y = y;
    }
    area(){return Math.PI * Math.pow(this.r,2)}
    static info() {console.log("I know about the circles")} //static이면 class로 바로 생성ㅇ??
}

var ring = new Circle(10,4,5)
var area = ring.area();


//상속
class NiceCircle extends Circle {
    constructor(radius, color) {
        super(radius, 0,0)
        this.color  = color;
    }
}

var nicering = new NiceCircle(10,0,"red")

console.log("nicering",nicering.area())


//퀴즈
// 1
function sum(a,b) {
    return a + b
}
sum(1,"2")

// 2
var a =[]
a[0] = "test"
a[3] = 9
console.log(a) //[ 'test', <2 empty items>, 9 ]


// 3

var a = 1/0
console.log(a) // Infinity


//4 self invoking function
// (function() {
//     var abc = "hello"
// })();
// console.log(abc) => error! 함수 안에서 선언한 변수를 밖에서 참조해서 오류남

var a = 1/"2"
var b = a + 1

console.log(b) //1.5

var n = new Object;
n.cat = [1,3,5]
n["cat"] = "hello"
n.cat = "1"
console.log(n.cat)
