// NaN값 확인하기 
// Number.isNaN
// - NaN을 구분하는 방법


console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN('Is it Number?'));
console.log(Number.isNaN(0));
console.log(Number.isNaN(null));

// * Number 객체의 ISNaN메소드는 NaN을 구별한다. 
//   NaN이면 true 반환, 아니면 false를 반환

// * NaN 이란?
//   => 전역 객체의 속성으로 Not a Number(숫자가 아님)의 줄임말이다. 


// * 주의해야하는 경우 
console.log('6번줄',Number.isNaN(-1));   // false 음수 숫자 자료형
console.log(Number.isNaN(0/0));   //  true 0을 0으로 나누는 것은 수학적으로 정의도지 않은 의미 없는 연산
console.log(Number.isNaN(new Date())); // false 현재 시간이 long자료형의 값으로 반환
console.log(Number.isNaN(new Date().toString)); // false 문자열
console.log(Number.isNaN('Infinity')); //  자바스크립트에서의 infinity 무한대 _ 숫자형 

// * 함수 verifyNumber를 통해 NaN 여부를 검증하여 모든 값이 정상 숫자임을 확인한 후
//   안전하게 산술 연산을 한다. 

function verifyNumber(n) {
    if (!n || Number.isNaN(n)) return 0;   // 대입 값이 빈값이거나 NaN이면 산술처리 불가한 값으로 인식
    return n;                              //  산술연산에서 에러가 발생하지 않도록 0을 리턴하여 함수를 빠져나온다. 
}                                          // 정상 숫자형일 경우 그대로 값을 반환

const num1 = verifyNumber(15);   // 
console.log(num1); // 15

const num2 = verifyNumber(undefined); 
console.log(num2); // 0

const num3 = verifyNumber(null);
console.log(num3); // 0

const num4 = verifyNumber(NaN);
console.log(num4); // 0

console.log( num1 + num2 + num3 + num4); // 15

