// arguments 객체 이해하기 
// 자바스크립트 함수의 인자 객체와 기본 매개변수 값을 정의하는 방법 살펴보기.

// 매개변수 : 함수 선인 시 작성되는 변수
// arguments 전달 인자 : 함수가 호출될 때 전달되는 값
// - 매개변수 외에 함수에서만 사용 가능한 특별한 객체를 제공 


// - 전달 인자의 개수와 매개변수의 개수가 달라도 에러를 발생하지 않음.
//    -> 매개변수와 무관하게 함수 호출 시 더 많은 인자를 전달 할 수 있음. 


function sum(){
    var total = 0;
    for (var i =0; i < arguments.length; i++){
        total += arguments[i];
    }
    console.log(arguments instanceof Array);
    return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg(){
    var newArr = Array.prototype.slice.call(arguments);
    console.log(newArr);
    console.log(newArr.indexOf('b'));
    console.log(arguments.indexOf('b'));
}

testArg('a', 'b');

