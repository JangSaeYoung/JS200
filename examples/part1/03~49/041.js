// 변수 선언하는 방법

// 1. let
// ES6가 나오기 전에는 var키워드로만 정의 할 수 있었지만 
// let 키워드가 나오면서 변수 선언 시 변수의 유효 범위를  블록 범위로 정할 수 있게 됨.

if (true) {
    var functionScopeValue = 'global';
    let blockScopeValue = 'local'; // 블록 단위의 유효 범위를 가지게 됨.
    }
console.log(functionScopeValue); //global
// console.log(blockScopeValue);  //ReferencError // if문 밖에서 접근. 

let value = "바깥값";
if (true){
    // console.log(value); //ReferenceError 
    let value = "안쪽값";
}

// - let으로 선언한 변수는 호이스팅에서 설명한 것과 동일하게 블록 단위로 일어남. 
// - var와 다르게 Undefined값이 할당되기보다는 
//   블록 시작부터 선언이 이루어진 라인까지 일시적으로 접근을 막음. 

//2. const
//let 키워드와 마찬가지로 블록 단위로 스코프를 정의 할 수 있다. 
//let과의 차이점은 선언 시 값을 할당해야 하고 이후에 재할당 할 수 없다. 

const URL = 'http://js.com';
// URL = 'http://js.com';

if (true) {
    const URL2 = 'http://js.com';
    // console.log(URL2);
}
// console.log(URL2);  // TypeError 

// const는 관례적으로 변하지 않는 값을 정의하기 때문에 대문자로 작성한다. 

const CONST_USER = { name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);

CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);

// 객체의 내부 상태가 변경 가능하기 때문에 const로 배열을 선언하여도 새로운 요소를 추가하거나 변경할 수 있다. 


// CONST_USER = {name:'bbo'}; // TypeError

// 재할당만은 되지 않음. 새로운 객체로 할당은 못하고 객체 내부의 상태만 변경할 수 있다. 

