//화살표 함수 이해하기
//ES6에 추가된 화살표 함수에 대해 알아봅니다.

// * function 키워드를 사용하지 않고 화살표 모양 => 연산자 이용하여 정의.

// 규칙
//1) 매개변수가 하나일 경우에는 인자를 정의할 때 괄호를 생략할 수 있다. 
//2) 매개변수가 없거나 둘 이상일 경우 괄호를 작성해야한다.
//3) 화살표 함수 코드 블록을 지정하지 않고 한 문장으로 작성 시 return 문을 사용하지 않아도 화살표 오른쪽 표현식의 계산 결과값이 반환된다.
//4) 화살표 함수 코드 블록을 지정했을 경우 반환하고자 하는 값에 return 문을 작성해야 한다. 
//   return문이 없을 시 undefined가 반환된다. 

const double = x => x+x;     // 매개변수 X
console.log(double(2));    //4

const add = (a,b) => a+b;   // a와b 두 개의 매개변수 , 코드 블록이 한 문장 -> return문 작성 없이 결과값 반환
console.log(add(1,2));  //3

// const printArguments = () => {    // 빈 매개변수 
//     console.log(arguments);       // return문 없음 
// }
// printArguments(1,2,3); // Uncaught ReferenceError 

const sum = (...args) => {    // 나머지 연산자를 통해 매개변수 정의  
    let total = 0;
    for (let i=0; i<args.length; i++){
        total += args[i]
    }
    return total;  // 코드블록 지정함 -> return 문 작성해야함. 
}
console.log(sum(1,2,3));

setTimeout(()=>{              //함수의 인자로 전달 가능. 
    console.log('화살표 함수!');
}, 10);
