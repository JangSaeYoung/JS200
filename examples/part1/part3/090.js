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



