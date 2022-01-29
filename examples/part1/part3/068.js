// * 문자열 자르기 (1) - Slice ----------------------------

// * Slice
//   1) String 내장 객체 
//   2) 인자로 시작 지점의 인덱스와 종료 지점의 인덱스를 받는다. 
//      두번 째 인자인 종료 인덱스는 선택 사항(필수값아님)
//   3) 지정한 문자열을 반환하되, 원본에는 영향을 미치지 않는다. 
// '문자열'.slice(시작 인덱스, 종료 인덱스)

const sentence = 'The sun will shine on us again';

console.log(sentence.slice(13));
console.log(sentence.slice(13,24));
console.log(sentence.slice(0));
console.log(sentence.slice(0,-23));  // 음수는 문자열의 뒤에서부터 시작. 
console.log(sentence.slice(50)); // 문자열의 길이를 넘으면 빈 값 반환
console.log(sentence.slice(7,2)); // 첫번째 인자가 두번째 인자보다 크면 수행되지 않음. 


// * 문자열 자르기 (2) - substring ----------------------------

// * Substring
//   1) Strign 내장 객체
//   2) 시작 지점 인덱스와 종료 지점 인덱스를 받음.
//      두번 째 인자인 종료 인덱스는 선택 사항
//   3) 실행 결과값은 새로운 문자열을 반환하며 기존 문자열은 변경하지 않음.
//   4) Slice메소드와 거의 동일하게 수행하지만, 몇 가지 다른 결과값 반환이 있다. 
// '문자열'.substring(시작 인덱스, 종료 인덱스)

const sentence2 = 'This will be the end of Wakanda';

console.log(sentence2.substring(13));
console.log(sentence2.substring(13,20));
console.log(sentence2.substring(0));
console.log(sentence2.substring(0,-20)); // substring 메소드는 음수를 넣으면 정상적으로 수행하지 않음. 
console.log(sentence2.substring(50));
console.log(sentence2.substring(20,13)); // 두 개의 인수를 교환하여 수행 즉. (13,20) 결과값과 동일하다.


// * 문자열 자르기 (3) - substr ----------------------------

// * substr
//   1) String 내장 객체
//   2) 시작 지점의 인덱스와 길이를 받음.
//   3) 두 번째 인자인 종료 인덱스는 선택 사항
//   4) 지정된 인덱스부터 시작해서 지정된 문자 수 또는 길이 만큼의 새 문자열을 반환
//      => 추출하고자 하는 문자열의 길이를 정확히 알고 있는 경우 활용 추천. 
// '문자열'.substr(시작 인덱스, 길이)

const sentence3 = 'Wakanda Forever!!!';

console.log(sentence3.substr(8)); // Forever!!!
console.log(sentence3.substr(8,7)); // Forever
console.log(sentence3.substr(0));
console.log(sentence3.substr(-10));
console.log(sentence3.substr(0,-13)); // 빈 값 반환  두 번째 인자에 음수 넣으면 정상 수행 되지 않음. 
console.log(sentence3.substr(30)); // 빈 값 반환
console.log(sentence3.substr(0,30));


// * 문자열 길이 구하기 (4) - length

// * length
//   1) String 객체에 미리 정의되어 있는 기본 속성
//  문자열.length

const arr =['short', 'longt sentence, it is not appropriate'];

arr.forEach(str => {
    if(str.length < 10) console.log(str);    // short
});   


// * 문자열로 변환하기  - toString

// - 자바스크립트의 모든 객체는 Object를 상속받기 떄문에, 다른 모든 객체는 prototype을 통해
//   Object의 내장 메소드 toString()에 접근하고 재정의 (Override)한다.
//   => Object 객체의 toString()을 상속 받는 것과는 다르다. 

const num = 5;
const bool = true;
const str = "문자열 값";
const arr2 = [1,2,3];
const obj = {a:15};

console.log(num.toString());  // 5
console.log(bool.toString()); 
console.log(str.toString()); 
console.log(arr2.toString());
console.log(obj.toString()); // {Object Object}

num.__proto__.toString = () =>{
    return 'toString 덮어쓰기';
};
console.log(num.toString());  //  toString 덮어쓰기


// * 두 개의 문자열 하나로 합치기 - concat

// * concat
//   1) String 내장객체 메소드 

const str1 = 'Good afternoon';
const str2 = ', Good evening';
const str3 = ', and Good nigth!';
const str4 =  ' - The Thuman Show, 1998';
console.log(str1.concat(str2, str3, str4)); // Good afternoon, Good evening, and Good nigth! - The Thuman Show, 1998

//   2) 문자열을 concat으로 합칠 때에는 맨 처음에 놓일 변수를 기준으로  concat 메소드를 호출한다. 
//   3) 두 개 이상의 문자열을 추가하려 할 때, 나머지 변수들을 메소드 인자로 문자열을 순서대로 나열하여 대입한다. 
//   + String 내장 객체 메소드 concat을 사용하는 방법 외에도 + 연사자를 활용하여 문자열을 합칠 수 잇다. 
//     => concat보다 +연산자가 활용면에서 많이 사용된다. 
//     => 다른 자료형(숫자)과 문자를 하나의 문자열로 만드는 경우가 일반적으로 많을 뿐더러,
//        + 연산자가 concat 메서드보다 성능상 더 빠르게 때문에 +연산자의 사용을 권장. 


// * 특정 위치의 문자 반환하기 - charAt

// * charAt
//   1) String 내장객체 메소드
//   2) 숫자형 인자를 받는다. 
//   3) 괄호 안에 대입된 값은 문자열에서 인덱스를 가리키고 해당 위치의 문자를 반환한다. 

const str5 = 'Good afeternoon, Good evening, and Good noght! ' + '- The Truman Show, 1998';

console.log(str5.charAt(0));  // G
console.log(str5.charAt(5));  // a
console.log(str5.charAt(14));
console.log(str5.length); // 70
console.log(str.charAt(500)); // 빈 값 반환