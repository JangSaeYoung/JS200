// 심볼형 이해하기 
// - ES6에 추가된 새로운 자료형인 심볼형에 대해 알아본다. 

const symbol = Symbol();  //Symbol은 함수 호출을 통해 생성 가능
//new 키워드를 통한 호출을(new Symbol()을 할 경우는 에러 발생)
const hello = Symbol('hello');  

console.log(Number(3) === Number(3)); // Symbol()은 늘 고유한 값을 반환
console.log(Symbol('symbol') === Symbol('symbol')); //false
console.log(Symbol() === Symbol());
console.log(typeof Symbol()); 

const nationility =  Symbol('nationility');  // Symbol은 객체의 키로 사용 가능.
const user = {
    name : 'jay'
};
user[nationility] = 'korean';    // Symbol에 대한 레퍼런스를 변수에 담고 있다가 접근할 때마다 사용해야 함. 
console.log(user[nationility]);


for (let key in user){   // 심볼이 객체의 키로 사용되면 for in 루프를 통해 심볼 키를 가져올 수 없다. 
    console.log(key);
}
// console.log(object.key(user));    // Object의 키를 반환하는 메소드를 사용해도 가져올 수 없다. 
// console.log(object.getOwnPropertyNames(user));
console.log(JSON.stringify(user));   // JSON 문자열로 만들때에도 해당 키는 빠진다. 

const symbolProperties = Object.getOwnPropertySymbols(user);

// 심볼을 객체의 키로 사용할 때 Object.getOwnPropertySymbols 메소드를 통해 해당 객체의 키에 해당하는 심볼들을 가져올 수 있다. 

console.log(symbolProperties);
console.log(user[symbolProperties[0]]);


