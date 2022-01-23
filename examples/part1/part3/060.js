// 1. 표준 내장 객체 이해하기
// - 자바스크립트의 표준 내장 객체에대 

// ECMAScript 구현 명세에 의해 정의된 표준 내장 객체(Standard Bulit-in Objects 또는 Global Objects)
// (1) 표준 내장 객체
//     전역 스코프(scope)안에 있는 객체들을 참조하고 있어서, 자바스크립트를 실행할 
//     어떤 환경(브라우져, 서버)이라도 전역에서 사용 가능.
//  - 내장 함수 객체(Built-in Function Object)
//    객체임임에도 불구하고 함수처럼 호출할 수 있음. 
//    매개변수를 받고, 함수 몸통에 내장 함수 객체의 행위를 특징화 하는 코드들이 구현.
//  - new 지시자를 사용하여 함수 형태로 호출.
//  - Constructor(생성자)를 생성.
//  - 표준 내장 객체 내부에는 속성과 메소드가 정의되어 있음.

const str = new String('자바스크립트');   // new를 이용하여 생성자를 만들고 변수에 선언
const num = new Number(200);
const bool = new Boolean(true);
const date = new Date();
const map = new Map();
const set = new Set();

console.log(Math.PI);                    //선언없이 객체의 메소드와 속성을 바로 가져다 사용할 수 있음. 
console.log(Date.parse('2019-01-01'));
console.log(JSON.parse('{}'));


//1-1. 내장 객체와 원시 자료형의 차이점

const str1 = '자바스크립트 200제';
const str2 = new String('자바스크립트 200제');

console.log(typeof str1);  //string
console.log(typeof str2);  //object

console.log(str1 === '자바스크립트 200제'); // true
console.log(str2 === new String('자바스크립트 200제')); // false
// String객체로 대입된 str2는 값이 아닌 주소값을 참조. 

console.log(str1.valueOf()); //자바스크립트 200제
console.log(str2.valueOf()); //자바스크립트 200제 

// (1) 문자열로 작성된 값이 String 객체로 자동으로 래핑된다.
// (2) typeof : 변수에 할당된 값에 대한 자료형 정보를 문자열로 반환. 
// (3) valueof() : String 내장 객체에 정의된 메소드. 
//                 객체의 원시형 값, 즉 문자열을 반환하는 메소드 
// (4) 자료형을 확인하면 확연하게 다른 것으로 구분되지만. 원시 자료형 값이지만 표준 내장 객체로 래핑됨에 따라
//     내장 객체에서 제공하는 메소드나 속성을 가져다 사용할 수 있음. 

//1-2. 자바스크립트 표준 내장 객체
// (1) Object
// (2) Number
// (3) String
// (4) Array : 모든 배열은 Array.prototype을 상속받음. 
// (5) Math : 다른 내장 객체와 달리 Math 객체는 new를 통해 인스턴스를 생성하지 않음.
//            static으로 정의된 속성과 메소드를 직접 호출해야함. 
// (6) Date
// (7) JSON
// (8) RegExp : 정규표현식. 특정 문자열 처리를 위해 사용하는 문자열 패턴 정의를 의미.
//              정규표현식을 적용 가능한 문자열 탐색, 비교, 대체 등의 문자열 처리 메소들을 지원.
// (9) Map : ES6부터 표준으로 추가.
//           Map객체는 키 :값 데이터 구조를 지닌 데이터 집합체(Collection)
//           키의 중복성을 허용하지 않으며 관련된 속성, 메소드들을 갖고 있음.
//           Iterator를 통해 Map의 데이터를 순회하는 특징이 있음. 
// (10) Set : ES6부터 표준으로 추가된 객체형
//            오직 값으로 이루어진 데이터 집합체
//            배열과 비슷하게 느껴질 수도 있으나 내부 속성, 메소드의 구성이 다르고, 
//            Iterator로 순회된다는 점과 값의 중복성을 허용하지 않는 차이점이 있음. 

