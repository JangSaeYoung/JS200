// 1. 자료형 확인하기 (typeof, instanceof)
// 자료형을 확인할 수 있는 다양한 방법을 배운다. 


// 1-1. typeof는 특정 원시 자료형 확인 또는 원시 자료형과 객체형을 구분하기 위해 활용하는 것이 좋음. 
const str = 'JavaScript';
const strObj = new String('JavaScript');
const num = 200;
const numObj = new Number(200);
const bool = true;
const boolObj = new Boolean(true);
const func = function(){};
const arr = [10,200, 4000];
const obj = {a1: 'test'};
const empty = null;
const notCalled = undefined;

console.log( typeof str === 'string' );
console.log( typeof strObj === 'object' );
console.log( typeof num === 'number' );
console.log( typeof numObj === 'object' );
console.log( typeof bool === 'boolean' );
console.log( typeof boolObj === 'object');
console.log( typeof func === 'function');
console.log( typeof arr === 'object' );
console.log( typeof obj === 'object' );
console.log( typeof empty === 'object' );// ture
console.log( typeof notCalled === 'undefined');

// 1-2. instanceof는 원시 타입을 확인하는데 적합하지 않지만,
//      어떤 객체인지 구분하는데 용이 (어떤 종류의 객체인지 확인하는 주로 활용)
//      - 객체, 배열, 함수는 각각 Object를 상속 받은 내장 객체. 

console.log(str instanceof String); //false. 원시 타입에 대한 결과 false 반환
console.log(strObj instanceof String); //true. 내장 객체로 선언된 변수는 true 반환
console.log(num instanceof Number); //false
console.log(numObj instanceof Number);
console.log(bool instanceof Boolean);
console.log(boolObj instanceof Boolean);
console.log(func instanceof Function);
console.log(empty instanceof Object); //false => 실제로 null은 Object를 상속받은 객체가 아님. 
console.log(arr instanceof Array);
console.log(obj instanceof Object);
// console.log(notCalled instanceof undefined); // TypeError => undefined는 객체가 아니기 때문에 에러 발생. 