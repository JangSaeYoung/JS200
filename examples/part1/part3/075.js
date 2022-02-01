// 특정 문자열 위치 확인하기 - indexOf / lastIndexOf

// * 1. indexOf
// String 내장객체의 메소드
// 특정 문자열이 있는지 확인할 수 있다. 
// 특정 문자와 일치하는 첫 번째 인덱스 값을 반환한다. 

const str = 'Carpe diem, seize the day';

console.log(`"e"는 ${str.indexOf('e')} 번째 인덱스에 있습니다.`);
console.log(`대문자 "C"는 ${str.indexOf('C')} 번째 인덱스에 있습니다.`); // indexOf는 대소문자를 구별. 
console.log(`소문자 "c"는 ${str.indexOf('c')} 번째 인덱스에 있습니다.`); // 일치하는게 없으므로 -1을 반환. 
console.log(`문자열 ", se"는 ${str.indexOf(', se')} 번째 인덱스에 있습니다.`); // 문자열 단위_ 일치하는 가장 첫번째 인덱스 값을 반환.

const arr = ['Carpe', 'diem', 'seize', 'the', 'day'];
const homManyHasE = (arr) => {
    let count = 0;
    arr.forEach((str) => {
        if (str.indexOf('e') > -1) count ++;
    });
    return count;
}
console.log(`${arr}에 "e"가 있는 요소는 모두 ${homManyHasE(arr)} 개 입니다.`); // 4

// 내가 만든 예제
const arr1 = ['세영', '현금이', '다발이', '마뱀이', '세영이는 마뱀이 집사입니다.' ];
const myPet = (arr1) => {
    let count = 0;
    arr1.forEach((str)=> {
        if(str.indexOf('세') > -1) count ++;
    });
    return count;
}
console.log(`${arr1}에 들어있는 "세"의 개수는 모두 ${myPet(arr1)}개 입니다.`); 
// 세영,현금이,다발이,마뱀이,세영이는 마뱀이 집사입니다.에 들어있는 "세영"의 개수는 모두 2개 입니다.


// * 2. lastIndexOf
//   indexOf와 달리, lastIndexOf메소드는 문자열의 뒤에서부터 일치여부를 확인한다.

const str1 = 'Carpe diem, seize the day';

console.log(`"e"는 ${str1.lastIndexOf('e')}번째 인덱스에 있습니다.` ); // 20
console.log(`대문자 "C"는 ${str1.lastIndexOf('C')}번쩨 인덱스에 있습니다.`); // 0 _ 대소문자 구분함.
console.log(`소문자 "c"는 ${str1.lastIndexOf('c')}번쩨 인덱스에 있습니다.`); // -1
console.log(`문자열 ", se"는 ${str1.lastIndexOf(', se')}번째 인덱스에 있습니다.`);
