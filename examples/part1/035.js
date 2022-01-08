// 예외 처리하기
// - 예외가 발생할 때 예외 처리문을 사용하여 처리하는 방법

// 1. 자바스크립트에서 사용할 수 있는 예외 처리 방법
// (1) throw문
// (2) try-catch-finally문

//(1) throw문
// ㅁ 개발자가 의도한 에러 : 코드가 잘못될 가능성을 예상하고 발생시키는 에러
// ㅁ throw문이 실행되면 실행되고 있던 블록을 빠져나감.
// ㅁ 에러를 발생시켜서 프로그램이 중단되는 것을 막을 없음.

function checkNumber(val) {
    if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다.');
}

checkNumber(100);
checkNumber('Wrong type');
console.log('완료');

//(2) try-catch-finally문
// ㅁ 예상치 못한 에러와 개발자가 의도한 에러 모두 대응 가능
// ㅁ try 블록 안에서 발생된 에러를 잡아내고,
//   catch 블록으로 제어권을 넘긴다. 
// 즉, try 블록에서 발생된 에러 정보는 catch 문의 변수로 전달되기 때문에,
// 개발자는 프로그램 종료 없이 어떤 에러가 발생했는지 확인 할 수 있다. 
// ㅁ finally 블록은 에러 발생 여부와 상관업이 실행되는 블록 

function checkNumber2(val2) {
    if (typeof val2 !== 'number') throw '유효하지 않은 값입니다.';
    console.log('숫자형 값으로 확인되었습니다. ');
}

try {
    checkNumber2(100);
    checkNumber2('Wrong type');
} catch(e) {
    console.log(`에러가 발생했습니다 >>> ${e}`);
} finally {
    console.log('완료');
};
