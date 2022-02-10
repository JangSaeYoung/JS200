// * 배열 정렬하기 - sort
// 배열.sort(function(a,b){
//    return 비교값;
// })

// - Array 객체 메소드
// - 새로운 배열을 반환하지 않고 원본 배열 자체를 변경시킴.
// - 인자로 비교 함수를 대입하여 배열 요소들을 정렬
// - 비교 함수에서 return으로 반환되는 비교값에 따라 순서가 정해짐.
// - 비교값의 구체적인 기준
//   => 비교값 > 0 : a가 b보다 작은 숫자의 인덱스를 가짐. 
//                 배열의 작은 인덱스 -> 배열에서 앞부분에 위치하는 것을 의미.
//                 즉, a가 b보다 앞에 위치.
//   => 비교값 < 0 : b가 a보다 작은 숫자의 인덱스를 가짐.
//                 위와는 반대로 b가 a보다 앞에 위치.
//   => 비교값 = 0 : a와 b의 위치를 변경하지 않음. 

const numArr1 = [2,0,3,4,1];
const numArr2 = [2,0,3,4,1];
const objArr = [
    {id: 2, name: 'Leo'},
    {id: 0, name: 'Daniel'},
    {id: 3, name: 'Asher'},
    {id: 4, name: 'Chloe'},
    {id: 1, name: 'Chloe'},
]; 

numArr1.sort(function(a,b){return a - b;});
numArr2.sort(function(a,b){return b - a;});
objArr.sort(function(a,b){
    if( a.name > b.name) return 1;
    else if( b.name > a.name) return -1;
    else return 0;
});

console.log(`오름차순 : ${numArr1}`); // 오름차순 : 0,1,2,3,4
console.log(`내림차순 : ${numArr2}`); // 내림차순 : 4,3,2,1,0
console.log(objArr);
// [ 0: {id: 3, name: 'Asher'}
// 1: {id: 4, name: 'Chloe'}
// 2: {id: 1, name: 'Chloe'}
// 3: {id: 0, name: 'Daniel'}
// 4: {id: 2, name: 'Leo'} ]



// * 배열의 순서를 반대로 나열하기 - reverse
// - Array 객체
// - 배열 순서를 반대로 나열
// - 함수 호출 시 원본 배열을 변형.

const str = 'abcdefghijklmmopqrstuvwxyz';
const arr = str.split(''); // 문자열을 배열로 변환
// console.log(arr);
arr.reverse();
// console.log(arr);
console.log(arr.join('')); // zyxwvutsrqpommlkjihgfedcba


// * 배열 요소가 특정 조건을 만족하는지 확인하기 - some
// - Array 객체
// - callback함수의 return값이 true를 반환할 때까지만 배열 요소를 순환. 
// - true를 반환하는 요소의 다음 요소들에 대해서는 더이상 처리하지 않음. 
// - 만약 마지막 요소까지 순환해도 true를 끝내 반환하지 않으면 false를 반환. 

const arr5 = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '준우', age: 3},
    {id: 2, name: '시영', age: 5},
    {id: 3, name: '짱아', age: 2},
];

const isHyunAHere = arr5.some(el => el.name == '시영');
const olderThanSix = arr5.some(el => el.age > 6 );

console.log(isHyunAHere); // true
console.log(olderThanSix); // false


// * 모든 배열 요소가 특정 조건을 만족하는지 확인하기 - every
// - Array 객체
// - 배열의 모든 요소가 callback 함수 조건을 만족하는지 확인
// - callback함수 조건이 한번이라도 false인 경우, false 반환과 함께 실행 종료. 
// - 모든 조건 결과가 true일 때에만 every 메소드는 true를 반환. 

const isAllHyunA = arr5.every(el => el.name === '시영'); 
console.log(isAllHyunA); // false _ 첫번째 요소에서 이미 false 종료

const youngerThanSevenAll = arr5.every(el => el.age < 7);
console.log(youngerThanSevenAll); // true


// * 배열의 특정 조건을 기준으로 필터링 하기 - filter
// - Array 객체
// - 인자로 대입된 callback함수를 통해 배열 내부를 순환하면서, 요소 각각이 특정 조건을 만족하는지 확인. 
// - 확인하는 방식은 callback함수 내부에 정의된 문장들을 통해 테스트
//   => callback 함수의 반환값은 무조건 true 또는 false
//   => true 결과값을 만족하는 요소들은 다시 새로운 배열에 담아 반환.

const arr6 = [1,2,3,4,5,6,7,8,9,10];

const filteredTwo = arr6.filter( a => {
    console.log(`현재 위치의 값은 ${a} 입니다.`);
    return a % 2 === 0;
}); 

console.log(filteredTwo);

const filteredThree = arr6.filter(a => a % 3 == 0);
console.log(filteredThree);


// * 배열의 특정 조건을 충족하는 요소 착기 - find
// - Array 객체
// - 인자로 대입된 callback함수를 통해 배열 내부를 순환하면서, 특정 조건을 만족하는  첫 번째 요소를 반환
// - callback함수 내부에 정의된 문장들을 통해 테스트
// - callback함수의 반환값은 무조건 true 또는 false. 

const arr7 = [
    {name: '우림', age: 2},
    {name: '현아', age: 5},
    {name: '탄이', age: 30},
    {name: '현일', age: 3},
    {name: '맘이', age: 30},
    {name: '혜림', age: 6},
];

const myFriend = arr7.find(a=> a.age === 30);
console.log(myFriend); // 일치하는 첫번째 요소가 출력 

