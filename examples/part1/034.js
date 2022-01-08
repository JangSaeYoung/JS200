// 함수
// 자바스크립트 함수를 선언하고 호출하는 방법

//function 함수 이름 (매개 변수 목록) {
//      함수 실행부
//}

// 1. 함수 형태 네 가지 

// (1) function 키워드 
// - function을 앞에 붙여서 함수를 정의 
// - ES6부터는 function 없이도 함수로 정의 가능.

// (2) 함수 이름
// - function 과 소괄호() 사이에 이름 정의하며 이를 통해 함수 식별 가능.
// - 함수 내에서 재귀로 자기 자신을 참조할 수 있음. 
// - 익명 함수 : 이름을 정의하지 않은 함수.

// (3) 매개변수 목록
// - 함수 이름 옆에 소괄호 () 둘러 싸인 부분.
// - 함수 선언 시 매개변수 목록을 정의하면 함수를 호출할 때 인자값을 전달 할 수 있음. 
// - 함수 안에서 전역 변수를 가져와 처리할 수도 있지만,
//   되도록 매개변수를 통해 값을 전달하는 것을 권장.

// (4) 함수 실행부 
// - 함수가 호출되면 실행되는 몸통부.  
// - 중괄호 {}안에 다발의 코드를 작성. 

// 2. 함수를 만드는 두 가지 방식 


// - 함수 표현식 
var greeting_expression = function(name) {
    console.log('Hi,  ' + name );
}
// ㅁ 함수를 정의하면서 동시에 변수 greeting_expression에 바로 할당.


// - 함수 선언문 
function greeting_declaration(name){
    console.log('Hi,  ' + name);
}
// ㅁ greeting_declaration 이라는 함수 이름으로 선언. 


greeting_expression('Chloe');
greeting_declaration('Chloe');

// - 함수를 호출할 때는 함수 리터럴이 할당된 변수 이름 또는 함수 선언문의 함수 이름이 필요
// - 함수 표현식에서 정의한 함수 이름은 해당 함수 안에서만 호출 가능.
// - 선언된 함수가 매개변수를 필요로 하는 경우 소괄호 () 안에 전달할 값을 나열.
