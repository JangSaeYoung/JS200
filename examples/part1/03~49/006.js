//자바스크립트 프로그래밍 언어의 코드 구성 요소 살펴보기

//자바스크립트 코드를 구성하는 가장 작은 기본단위 : 값, 변수, 연산자, 키워드


// 1.Expressions / Statements
// 1) Expressions 표현식
// - 값을 생성 
// - 연산자를 통해 값을 생성하거나, 변수 도는 함수 인자로 값을 넣을 때 사용

( 3 + 12) / 5
declaredVariable
greeting("Hello")

// 2) Statements 명령문
// - 행동 또는 행위를 수행 
// - if, if - else, for, switch

function greeting() {    // >>> greeting 함수 정의
    "hello"             
    "Chloe" + 3         // >>> 명령문 작성
    greeting()
}
greeting(if(true){console.log("It is not acceptable")}) // >>> 함수 인자에는 값을 넣어야함. 잘못된 문장 - 구문 오류 발생  

