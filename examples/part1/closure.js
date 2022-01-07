// closure
// - 자바스크립트는 유효적 범위(lexical scoping) 
//   :  함수를 호출하는 시점에서의 변수 유효 범위가 아니라,
//      함수가 정의된 시점의 변수 유효범위를 사용하여 함수가 실행.

// 1. MDN
// 클로저는 함수와 그 함수가 선언될 당시의 lexical environment의 상호관계에 따른 현상. 

// + 어떤 함수에서 선언한 변수를 참조하는 내부함수에서만 발생하는 현상
// + 함수 객체와, 함수의 변수가 해석되는 유효범위 변수 바인딩의 집합)을 아울러 일컫음.

// (1) 먼저 알고 가자
// - 스코프 : 변수가 영향을 미치는 범위 혹은 변수의 유효범위 { }
// - 변수의 유효범위 : 어떤 변수가 정의되어 있는 영역
//                 전역 변수는 프로그램 전체에 걸쳐 유효
//                 지역 변수는 변수가 선언된 함수 전체에 걸쳐 유효
//                 그 안에 중첩된 함수 내에서도 유효
// - 유효범위 체인 lexically scoped 

//예시 1
var outer1 = function(){  
    var a = 1;
    var inner1 = function(){
        console.log('++a 결과 >>>',++a);
    };
    inner1();
};
outer1(); 

//예시 2
var outer = function(){
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner;
};
var outer2 = outer();
console.log(outer2());
console.log(outer2()); 3
console.log(outer2()); 4 

var outer3 = outer2;
console.log(outer3); 
console.log(outer3()); 5
console.log(outer3()); 6


// 2. 가비지 컬렉터
// - 어떤 값을 참조하는 변수가 하나라도 있다면 그 값은 수집 대상에 포함시키지 않는다. 
// - '참조할' 예정인 다른 실행 컨텍스트가 있는 한 실행 종료 이후에도 GC되지 않는다.
// 지역변수를 참조하는 내부함수가 외부로 전달된 경우 제외.
// (외부 함수의 LexicalEnvironment가 가비지 컬렉팅되지 않는 현상)

// 3. 정리하면
// - 외부로 전달할 경우 A의 실행 컨텍스트가 종료된 이후에도 변수 a가 사라지지 않는 현상.

// 4. return 없이도 클로저 발생
//(1) setInterval/setTimeout
// (function(){
//     var a = 1;
//     var intervalId = null;
//     var inner = function() {
//       if (++a >= 10){
//         clearInterval(intervalId);
//       }
//     //   console.log('실행해볼게>>>',a);
//     };
//     intervalId = setInterval(inner, 1000);
//   })
//   ();

// -  별도의 외부객체인 window의 메서드에 전달할 콜백 함수 내부에서 지역변수를 참조



//(2) eventListener
// (function(){
//     var count = 1;
//     var button = document.createElement('button');
//     button.innerText = '눌러요';
//     button.addEventListener('click', function(){
//     console.log(++count, '눌렀어요');
//     });
//     document.body.appendChild(button);
//   })
//   ();
 
// DOM메서드에서 등록할 handler 함수 내부에서 지역변수를 참조.

// 5. 클로저와 메모리 관리
// 메모리 소모 -> 클로저의 본질적인 특성
// 메모리 누수 -> 개발자의 의도와 달리 어떤 값의 참조 카운트가 0이 되지 않아 GC의 수거대상이 되지 않는 경우
// 만약 개발자가 의도적으로 한다면?


// 5-1. 관리 방법
// 클로저는 어떤 필요에 의해 의도적으로 함수의 지역 변수를 메모리를 소모하도록 함으로써 발생
// -> 참조 카운트를 0으로 만들자.
//    식별자에 참조형이 아닌 기본형 데이터 (보통 null 이나 undefined)를 할당한다.

//예시 1
var outer = function(){
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner;
};
var outer2 = outer();
// console.log(outer2());
// console.log(outer2());
// console.log(outer2());

outer = null;
console.log('outer 식별자 inner 함수 참조 끊음>>>',outer);
console.log(outer);
console.log(outer);
// console.log(outer());

//예시 3
(function(){
    var count = 0;
    var button = document.createElement('button');
    button.innerText = '좋아요';

    var clickHandler = function() { 
        //  console.log( ++count, 'time clicked');
    if(count >= 10){
        button.removeEventListener('좋아요', clickHandler);
        clickHandler = null; // clickHandler 식별자의 함수 참조를 끊음.
    }
    };
    button.addEventListener('좋아요', clickHandler);
    document.body.appendChild(button);
  })
  ();
 
  //예시2  ------> 왜 멈추지 않지?
(function(){
    var g = 0;
    var intervalId = null;
    var inner5 = function() {
      if (++g >= 10){
        clearInterval(intervalId);
        inner5 = null;
      }
    //   console.log('inner5 식별자의 함수 참조를 끊음>>>',g);
    };
    intervalId = setInterval(inner5, 1000);
  })
  ();


