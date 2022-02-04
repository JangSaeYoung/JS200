// * 배열 요소를 분할/ 변환하기 (from)

// - Array 내장객체 메소드
// - 대입된 문자열 값을 구분자 없이 분할함. 
// - 분할된 문자는 배열 요소 각각에 대입되어, 결과값으로 배열을 반환.
// - 첫번째 인자: 배열 요소로 분할 변환될 문자열 대입.
// - 두번째 인자: 필수값은 아니지만, callback함수를 대입하면 분할함과 동시에 각 값을 변환 시킬 수 있다. 
// Array.from(배열로 변환될 값, 반환될 배열 내부 요소에 대한 callback 함수)

const str = '12345678';

const distributedArr = Array.from(str);
console.log(distributedArr); // ['1','2','3','4' ... ,'8'];

const modifiedArr = Array.from(distributedArr, el => el * 2);
console.log(modifiedArr); // [2, 4, 6, 8, 10, 12, 14, 16 ]


// * 문자열을 특정 구분자에 의해 배열로 나누기 - split
// - String 내장객체의 메소드 
// - split 문자열을 배열로 변환하여 반환
// - split 인자로 받은 구분자로 문자열을 분리한 후, 각각을 배열 요소에 넣는다. 

const capitals = `Prague, Czech, Republic 
Copenhagen, Denmark
paris, France
Madrid, Spain
Rpme, Italy`

capitals.split('\n').forEach( s => {
    const capital = s.split(',')[0]; 
    const country = s.split(',')[1];
    console.log(`${capital} is in ${country}`);
});

// prague is in Czech Republic
// Copenhagen is in Denmark
// Paris is in France
// Madrid is in Spain
// Rome is in Italy 



// * 배열 뒤에 요소 추가하기 - push
// - 자바스크립트 배열 자료형은 Linked List 자료구조 형태 => 배열 앞과 뒤에 요소 추가 가능
// - Array 내장객체 메소드
// - 배열 뒤에서 요소를 추가

const festa = ['mang'];
festa.push('chimmy');
festa.push('tata');
festa.push('cooky');
festa.push('shooky');
festa.push('koya');
festa.push('rj');

festa.forEach(name => {
    console.log(name);
});

console.log(festa);

// * 배열 앞에 요소 추가하기 - unshfit
// - Array 내장 객체 메소드
// - 배열 맨 앞에 요소를 추가하는 함수. 

 const festa1 = ['mang'];
festa1.unshift('chimmy');
festa1.unshift('tata');
festa1.unshift('cooky');
festa1.unshift('shooky');
festa1.unshift('koya');
festa1.unshift('rj');

festa1.forEach(name => {
    console.log(name);
});

console.log(festa1);



// * 배열 길이 구하기 - length
// - Array 내장객체 속성

const ship = {
    max: 4,
    passengers: [],
    onBoard: function(name){
        if( this.passengers.length === 4){
            console.log(`This ship is full. ${name} can not board this ship.`);
        }else{
            this.passengers.push(name);
            console.log(`${name} boarded.`);
        }
    }
} 

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');   // This ship is full. daniel can not board this ship.
console.log.apply(ship.passengers);




// * 배열 함치기 - concat 
// - 여러 개의 배열을 하나로 합치는 방법
// - 여러 인자를 넣는 것이 가능하고 하나의 배열로 반환하며,
//   배열 내부에는 인자에 넣은 순서대로 요소가 나열된다. 

const prevList = [1,2,3];
const currentList = [4,5,6];
const nextList = [7,8,9];

console.log(prevList.concat(currentList)); // [1,2,3,4,5,6]
console.log(prevList.concat(nextList)); // [1,2,3,7,8,9]
console.log(prevList.concat(currentList, nextList));// [1,2,3,4,5,6,7,8,9]

console.log(['배열'].concat('합치기'));
console.log(['배열'].concat('합치기', ' JavaScript200'));



// * 배열에 특정 구분자 넣어 문자형으로 변환하기 - join
// - Arrar 객체 메소드 
// - 각 배열 요소를 병합하여 하나의 문자열로 변환.

const dialogue = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you.'
];

console.log(dialogue.join('.'));
console.log(dialogue.join('. \n'));

// * 배열 마지막 요소 추출하기 - pop
// - 배열에서 마지막에 있는 요소만 추출하는 방법
// - 원본 배열도 함께  수정. 

const arr = [1,2,3];
console.log(arr.pop()); // 3
console.log(arr.pop()); // 2

console.log(arr); // [1]

console.log(arr.pop()); // 1
console.log(arr.pop()); // undefined



// * 배열 맨 앞 요소 추출하기 - shift
// - 배열에서 맨 앞 요소를 추출하는 방법
// - pop과 동일하게 원본 배열도 함께 수정이 됨. 

const arr1 = [1,2,3];
console.log(arr1.shift()); // 1
console.log(arr1.shift()); // 2
console.log(arr1.shift()); // 3
console.log(arr1.shift()); // undefined


// * 배열 특정 위치의 요소 추출하기 - slice
// - Array 메소드
// - 인덱스의 시작과 끝을 지정하여 배열 요소를 추출
// - 인덱스에 있는 요소는 제외하고 그 이전까지의 요소들을 추출.
// 배열.slice(시작 인덱스, 끝 인덱스)

// - slice 함수는 원본 배열을 변경하지 않고 복제 (얕은 복사)를 수행
// - slice 함수를 통해 처리된 결과값을 활용하려면 별도의 변수로 대입해야 한다. 

const arr2 = ['melon', 'lemon', 'source', 'apple', 'juice'];
console.log(`과일이 아닌 요소는 ${arr2.slice(2,3)}와 ${arr2.slice(4,5)} 입니다.`); // 과일이 아닌 요소는 source와 juice 입니다.
console.log(arr2.slice(0,10)); // ['melon', 'lemon', 'source', 'apple', 'juice']