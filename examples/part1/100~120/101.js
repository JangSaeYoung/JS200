console.log('101부터 시작!');

// 1. 객체에서 키만 추출하기 - keys
// - Object 객체 메소드
// - 객체의 키들만 추출할 수 있으며, 추출한 키들은 배열에 담아 반환.

const obj = {
    movie: 'Summy',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};

const arr = Object.keys(obj); // Object 객체의 메소드 keys를 호출하고, 인자로 obj 변수를 넣는다. 
console.log(arr);  //  ['movie', 'music', 'style', 'price']


// 2. 객체에서 값만 추출하기 - values
// - Object객체의 메소드
// - 객체의 속성값(value)만 추출 할 수 있으며, 추출된 속성값들은 배열에 담아 반환. 


const obj2 = {
    movie: 'Summy',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};

const arr2 = Object.values(obj2);
console.log(arr2); // ['Summy', 'Like Sugar', 'Retro', 'Infinity']
console.log(obj2);


// 3. 객체를 배열로 반환하기 - entries
// - Object 객체의 메소드
// - entries는 객체를 배열로 변경하며, 객체 내부 요소도 {키:값}을 [키, 값] 배열로 변경.


const obj3 = {
    movie: 'Summy',
    music: 'Like Sugar',
    style: 'Retro',
    price: 'Infinity'
};

const modifiedObj = Object.entries(obj);
console.log(modifiedObj);



// 4. 객체 변경되지 않도록 하기 - freeze
// - Object객체의 메소드
// - 단어 그대로 객체를 동결(freeze)
// - freeze 메소드로 객체를 동결한 이후에는 다른 속성을 추가하거나 제거할 수 없음. 

let obj4 = {};

obj4.title = 'IDOL';
// obj4.title = 'Love';
obj4 = Object.freeze(obj4);
obj4.title = 'Euphoria';  

console.log(obj4); // {title: 'IDOL'} _ freeze 실행 한 뒤 객체 변경되지 않음. 에러 없음. 

const changeUntilNum = (obj4, num) =>{
    'use strict';

    while(true){           // 반복문이 내부가 true인 경우에만 순환 -> 반복문 내에 에러가 발생하면 반복문 멈춤
        console.log(obj4);

        if( obj4.age >= num){
            obj4 = Object.freeze(obj4);
        }
        obj4.age += 1;       // use strict 선언 이후에 객체 obj를 수정하면 에러가 발생. 
    }
};

let profile = {name: '지연', age: 25};
// changeUntilNum(profile, 30);


// 5. 객체에 속성 추가 못하게 만들기 - seal
// - Object 객체의 메소드
// - 객체를 밀봉
// - 봉인된 객체이므로 속성을 추가/ 삭제 할 수 없다.
//   => 단, 기존 속성에 대해서는 변경 가능. 
// - 'use strict'가 선언된 스코프에서 객체 속성을 추가/삭제하면 에러가 발생
// - 선언되지 않은 스코프에서는 에러가 발생되지 않으나, 정상적으로 처리되지 않음. 

const album = {
    name: 'LOVE YOURSELF'
};

album.song = 'Euphoria';
album.singer = 'RM';
console.log(album);

Object.seal(album);

album.comment = 'Answer';  // 봉인된 객체에는 새로운 속성을 추가할 수 없음.
album.singer = 'JK';  // 기존 속성은 변경 가능. 
delete album.name;

console.log(album);


// 6. 객체 병합 확장하기 - assign
// - Object 객체의 메소드
// - 인자로 대입된 객체들을 하나로 병합.
//   => 주의할 점 : 첫번째 인자로 대입된 객체를 기준으로 병합
//   => 이 객체를 기준으로 다른 객체들이 병합되기 때문에 첫 번째 인자는 원복이 수정되어 반환. 
// Object.assign(반환될 객체, ... 병합될 다른 객체들);

const obj5 = {one:1, two:2, three:3};
const obj6 = {name: '탄이', age:5, address:'Seoul'};
const obj7 = {friends: ['혜림', '현아','현일','우림']};

const newObj1 = Object.assign({}, obj5);
const newObj2 = Object.assign({}, obj5, obj6);
newObj1.four = 4;

console.log(obj5);
console.log(newObj1);
console.log(newObj2);

console.log('\n');

const newObj3 = Object.assign(obj5, obj6);

console.log(obj5);
console.log(newObj1); 
console.log(newObj2);
console.log(newObj3); 


