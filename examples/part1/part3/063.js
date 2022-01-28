// * 정수 확인하기 (isInteger)
// - 숫자형 중에서 정수를 확인하는 방법을 배운다. 


console.log(Number.isInteger(0)); // true
console.log(Number.isInteger(-1));
console.log(Number.isInteger(777777777777777777777));
console.log(Number.isInteger(null)); //false  null은 정수가 아니다. 
console.log(Number.isInteger(0/0));
console.log(Number.isInteger('Infinity')); // false  무한대 값은 정수가 아니다. 
console.log(Number.isInteger(true));  // false  boolean 값은 정수가 아니다.
console.log(Number.isInteger({})); // false

// * Number 내장객체의 isInterger()메소드는 값이 정수인지 아닌지 확인한다. 
//   수학적으로 정의된 정수는 true를 반환하고 아닌 것은 false를 반환한다. 

function verifyInteger(n){
    if (!Number.isInteger(n)) return 0;
    return n;
}

const num1 = verifyInteger(15);
console.log(num1);

const num2 = verifyInteger(Infinity); // 무한대수를 뜻하는 숫자형이지만, Integer의 byte크기를 뛰어넘는 큰 수.

const num3 = verifyInteger(0.05);
console.log(num3);    // 0  실수값

console.log( num1,  num2, num3 );  // 15 0 0