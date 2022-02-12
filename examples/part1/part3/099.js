console.log('reduce배우는 시간');
// 1. 배열 내 값을 누적시키기 - reduce
// - 배열 내부 요소의 값을 누적하여, 새로운 값을 만드는 방법.
// - Array객체 메소드 
// - 배열 요소를 순환하면서 정의된 callback 함수에 의해 단일 값으로 누적시킬 수 있다. 
// - reduce 메소드의 형태는 인자로 callback 함수와 초기값을 받는다. 
//   첫번째 callback 함수는 기존 다른 메소드와 달리 여러 매개변수를 정의한다.
//   (최대 4개까지 매개변수를 받고, 첫 번째 누적된 값과 현재 요소 값은 필수)
// - reduce 메소드가 처음 실행할 때, 누적된 값은 두 번째 인자(초기값)를 할당 받는다. 
// - 이후에는 배열 순환이 끝날 때까지 callback 함수에서 반환된 값으로 재할당 된다. 

// 배열.reduce(누적된 값, 현재 요소 값, 현재 인덱스, 원본 배열) => {
//     return 누적값으로 반환되는 값
// }, 초기값);

const numArr = [1,2,3,4,5,];
const numArr2 = [5,6,7,8,9,10];

const result = numArr.reduce((acc,el) => {   // acc : 누적된 값 , el : 현재 요소값
    return acc + el
}, 0);

console.log(result); // 15    ( 초기값(0)+1 , 1+2, 3+3 ... )

const result2 = numArr2.reduce((acc,el) => {
    return acc + el
},1);
console.log(result2); // 46

// 만약 문자가 들어가면? 궁금하다

const strArr = ['감자', '고구마', '당근', '딸기'];
const resultStr = strArr.reduce((acc,el) => {
    return acc + el
}, '코리아');
console.log(resultStr); // 코리아감자고구마당근딸기 (오호..)
// 초기값(코리아)+감자 , 코리아감자+고구마, 코리아감자고구마+당근 ....


//2. 중첩된 배열을 단일하게 만들기 - reduce
// - reduce를 사용하여 중첩된 배열을 단일 값으로 누적하는 방법

const arr = [1, [1,2],[4,5,6],['배열', '나열하기'], 'JavaScript'];

const result3 = arr.reduce((acc, el) =>{
    return acc.concat(el);
}, []);
console.log(result3); // [1,2,3,4,5,6,'배열', '나열하기', 'JavaScript']

const result4 = arr.reduce((acc,el) => {
    return acc + el
}, []);
console.log(result4); // 11,24,5,6배열,나열하기JavaScript
