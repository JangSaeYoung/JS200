// * 특정 문자열 포함 여부 확인하기 -  includes
// - String 내장 객체
// - 일치하는 문자열이 있는 경우 true, 없으면 false를 반환


// 문자열.includes(문자열, 인덱스);


// - 두 번째 인자의 인덱스는 필수값은 아님.
// - 두 번째 인자에 인덱스를 지정하면, 해당 인덱스 위치에서부터 문자열을 확인. 
// - 두 번째 인자가 없으면 기본값 0인덱스주터 문자열을 확인. 

const str = 'Make your lives extradordinary';
console.log(str.includes('Make')); // true
console.log(str.includes('Make, 1')); // false



// * 문자열 대소문자 변환하기 - toLowerCase, toUpperCase
// - String 내장객체 메소드 
// - 문자열의 대소문자를 일괄 변환할 수 있다. 

// - toLowerCase() : 해당 문자열을 모두 소문자로 변환하여 반환
// - toUpperCase () : 해당 문자열을 모두 대문자로 변환하여 반환

console.log('Find Your Own Voice'.toLowerCase()); 
console.log('Find Your Own Voice'.toUpperCase()); 

const value = 'Find your Own Voice';
console.log(value.toLowerCase() === value.toUpperCase());  // false