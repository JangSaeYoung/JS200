//* 스코프 이해하기
//- 유효 범위로써 변수와 매개변수가 어디까지 유효한지를 나타냄.
//  ex) 코드에서 작성한 a라는 식별자가 어디를 참조할지, 
//      실제 값이 무엇인지를 찾을 때 스코프를 활용하여 찾게 됨.
//- 자바스크립트는 기본적으로 전역과 함수 단위로 스코프를 생성.
//- 함수 안에서 선언된 변수는 함수 블록 안에서만 접근이 가능
//- 전역에 선언한 변수들은 코드 어디에서든 접근이 가능.

var a = 10;
console.log(a);

function print(){
    var b = 20;
    if (true){
        var c = 30;
    }
    console.log(c);
}

print();
// console.log(b); //RefrenceError

// 스코프
//(1) Lexical 스코프
// - 코드를 작성하는 시점에 스코프가 결정되어짐. 정적 스코프
// - 자바스크립트는 대표적인 렉시컬 스코프.
//(2) Dynamic 스코프


var c = "global";

function print1(){
    console.log(c); // print1 함수 스코프에서 찾을 수 없어 전역에서 찾아와서 출력
}

function print2(){
    var c = "local";
    print1();
}

print1();
print2();