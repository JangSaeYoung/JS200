// 자바스크립트의 조건문 if에 대해 학습합니다.

// 1. 조건문 if
// - 어떤 조건이 참인지 거짓인지에 따라 실행 여부를 결정하는 구문
// if, switch

var result = true;
if(result) console.log('result가 참입니다.'); //result가 참입니다.

if (!result) console.log('실행되지 않습니다.');

if(result) {
    console.log('result의 결과'); //result의 결과
    console.log('>> 참 입니다.');//참 입니다.
}

// 2. 조건문  else if, else 는 결과값이 flase 일 때 추가 실행되는 조건문. 
// 2-1. else if
// - if조건문 외에 추가적으로 조건식을 추가하고 싶을 때, if의 조건문 뒤에 덧붙여 사용
// - else   모든 조건식에도 만족되지 않으면 else를 마지막 단락에 작성하여 마지막 명령문을 실행.
// 
var number = 2;
if (number == 1){
    console.log('number는 1입니다.');
}else if (number == 2){
    console.log('number는 2입니다.'); //number는 2입니다.
}else if (number == 3){
    console.log('number는 3입니다');
}else{
    console.log('number는 1,2,3 중 해당되는 것이 없습니다.'); 
}