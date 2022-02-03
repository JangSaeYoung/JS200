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
