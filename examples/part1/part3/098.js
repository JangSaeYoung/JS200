// * 배열 요소 일괄 변경하기 - map

// - callback함수를 인자로 받아, callback 함수의 retrun으로 반환되는 값들을 재조함하여 
//   새로운 배열로 만듬. 

const arr = [
    {id: 0, name: '혜림', age:6},
    {id: 1, name: '현일', age:3},
    {id: 2, name: '현아', age:5},
    {id: 3, name: '우림', age:2},
];

const arr2 = arr.map(el=> { // map메소드를 통해 arr 배열의 각 요소가 매개 변수 el로 전달. 
    el.age = el.age+1;
    return el;
});

const arr3 = arr.map(el=> el.name);

console.log(arr2);
console.log(arr3);


