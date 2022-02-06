// * 배열의 특정 요소 위치 확인하기 - indexOf
//   - Array 객체 메소드
//   - 대입된 값(첫번째 인자)을 배열 내부에서 검색
//   - 값이 일치하는 경우 해당 인덱스를 반환
//   - 두 번째 인자인 시작 인덱스는 필수값은 아님.
//   - 두 번째 인자에 숫자형 값을 넣으면, indexOf는 해당 인덱스부터 값을 찾음.
//   - 만약 찾는 값이 없으면 indexOf는 숫자 -1을 반환.
// 배열.indexOf(검색할 값, 시작 인덱스)

const arr = ['spring', 'summer', 'fall', 'winter', 'is', 'down'];

console.log(`winter is in this index ${arr.indexOf('winter')}`); // winter is in this index 3
console.log(`"winter" is not in here, look this value ${arr.indexOf('winter',4)}`); // "winter" is not in here, look this value -1


// * 배열 순환하기 - forEach
// - Array 내장 객체
// - 배열 내부 요소를 순환하며, 각 요소에 대해 callback 함수를 실행
// 배열.forEach(callback함수)

const arr1 = [
    {id: 0, name: '혜림', age: 6},
    {id: 1, name: '현일', age: 3},
    {id: 2, name: '현아', age: 5},
    {id: 3, name: '우림', age: 2},
];

arr1.forEach((el)=>{
    console.log(el.name);
}); 



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