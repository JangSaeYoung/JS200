// 프로그래밍 언어의 자료형을 이해하고, 자바스크립트 자료형에 대해 알아본다. 

// Number
var x = 5;

// String
var y = "happy";

// Boolean
var isTrue = true;  //true or false

// null
var empty = null;

// undegined 
var nothing

// Symbol ES6부터 추가된 원시 자료형  *유일하게 변경 불가능한 자료형
var sym = Symbol('me');

// Object
var item = {
    price: 5000,
    count: 10
};

// Array
var fruits = ['apple', 'orange', 'Kiwi'];

// function 
var addFruit = function(fruit) {
    fruits.push(fruit);
}
addFruit('watermelon');
console.log(fruits); //  ['apple', 'orange', 'Kiwi', 'watermelon']



//1. Primitive Data Type 원시 타입
//- Number, Boolean, String, Symbol, null, undefined
//- 값이 변수에 할당될 때 메모리 상에 고정된 크기로 저장.
//- Immutable Value 불변값

//2. Reference Data type 참조 타입
//- Object
//- 값의 메모리 주소를 변수에 할당하여 값을 참조.
//  (ex. 객체: 고정되지 않은 값을 변수에 할당하려면 직접 해당 값을 저장할 수 없으나 참조하는 것은 가능하다.)
