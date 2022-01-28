// * 스코프 체인 이해하기 
//  함수 안에 함수를 선언한 중첩 함수(Nested Function)에서 자식 함수가
//  부모 함수의 변수에 어떻게 접근 가능한지 알아본다. 

// 스코프 체인 ( 문자 그대로 스코프가 연결되어 있음을 나타냄 )                

// 1. 실행 컨텍스트 Execution Context
// - 코드가 실행되기 위해 필요한 정보를 가지고 있다. 
// - 실행 가능한 코드가 실행될 때 생성된다. 
// - 대표적인 실행 가능한 코드 : 전역 코드. 함수 코드, eval, 모듈 코드
// 전역 코드 실행 -> (전역 컨텍스트 만들고 전역 코드를 순차적으로 평가)
// -> 함수가 호출문을 만나면 새로운 실행 컨텍스트가 만들어지면서 -> 
// 해당 함수 실행부의 코드를 순차적으로 평가 (Stack)을 이용해서 실행 컨텍스트를 관리
// 새로운 실행 컨텍스트 생성 -> 스택에 쌓고 실행 중인 코드가 종료되면 
// 해당 실행 컨텍스트를 스택에서 제거.

var person = 'harin';

function print(){
    var person2 = 'jay';

    function innerPrint(){
        console.log(person);
        console.log(person2); 
    }
    innerPrint();

    console.log('print finished');
}

print();
console.log('finished');

// 2. 렉시컬 환경 Lexical Environment
// 환경 레코드와 외부 렉시컬 환경으로 구성
// ExecutionContext = {
//     LexicalEnvironment: {
//         EnvironmentRecord: {

        
//         },
//         OuterLexicalEnvironment: 참조
//     }
// }
