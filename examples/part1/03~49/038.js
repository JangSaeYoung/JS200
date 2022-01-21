// 함수 나머지 매개변수 이해하기
// - 나머지 매개변수를 어떻게 사용하는지 이해

// ES6에서 새롭게 추가된 나머지 매개변수
// - 매개변수를 정의할 때 정해지지 않은 매개변수들을 정의할 수 있게 해준다. 
// arguments 객체와 유사하나 
// arguments는  함수에 전달되는 모든 전달인자를 포함
// 나머지 매개변수는 정해지지 않은 나머지를 의미한다. 

// * 나머지 매개변수 작성 ---------------------------------------
// function(parameter, ...restParameter){
//     arguments 객체는 나머지 매개변수와 다르게 함수 몸통에서만 사용한다. 
// }
//-----------------------------------------------------------

// --> 가장 큰 차이점
// argumetns 객체는 배열이 아니지만 나머지 매개변수는 배열이다. 

function sum(...args) {  //sum 함수를 나머지 매개변수로 정의. 
    var total = 0;
    for( var i = 0; i < args.length; i++){
        total += args[i];  // 나머지 매개변수는 배열이기때문에 인덱스로 접근 가능.
    }
    console.log(args.indexOf(1));  // 0 
    return total;
}
console.log(sum(1, 2, 3)); //  6

function sum2(a, b, ...others){ // a와 b 매개변수 가지고 있고, 그 외에 others라는 나머지 매개변수를 정의.
    var total = a + b;
    for( var i = 0; i < others.length; i++){
        total += others[i];
    }
    return total;
}
console.log(sum2(1,2));   // 3
console.log(sum2(1,2,3,4)); // 3,4는 others 나머지 매개변수의 배열의 요소로 전달.  // 10