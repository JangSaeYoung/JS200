//1. 생성자 함수 이해하기

// 자바스크립트 함수는 재사용 가능한 코드의 묶음으로 사용하는 것 외에 객체를 생성하기 위한 방법으로도 사용된다. 
// 객체를 생성하기 위해 직접적으로 객체를 반환해도 되지만, new 키워드를 사용하여 함수를 호출하게 되면 return문 없이도 새로운 객체가 반환된다. 
// this 키워드를 사용하면 반환되는 객체의 초기 상태와 행위를 정의할 수 있다. 

// 객체를 생성하는 역할을 하는 함수 = 생성자 함수
// 생성자 함수는 new키워드를 사용하지 않으면 일반적인 함수와 동일하게 동작하며 새로운 객체를 반환하지 않는다. 
// -> 함수명을 대문자로 시작하는 관례를 가짐. 

function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;            // 전달받은 매개 변수들의 값을 this의 속성으로 대입한다. 
    this.teach = function(student){
        console.log(student + '에게' + this.subject + '를 가르칩니다.'); // bbo에게JavaScript를 가르칩니다.

    };
}

const jay = new Teacher('jay', 30, 'JavaScript'); // new 키워드와 함께 생성자 함수를 호출 
console.log(jay);                                 // 별도의 return문 없이도 새로운 객체가 반환된다. 
jay.teach('bbo');                                 // 이 때 반환되는 새로운 객체를 가리키는 것이 this이다. 

console.log(jay.constructor);                            // 모든 객체는 constructor 속성을 가진다. 이 속성은 객체를 만든 생성자 함수를 가리킨다. 
console.log(jay instanceof Teacher);  //true             // 
 
const jay2 = Teacher('jay', 30, 'JavaScript');    // new키워드 없이 Teacher 생성자 함수를 호출. 이때의 this는 전역 객체를 가리키니다. 
console.log(jay2); // undefined   // 새로운 객체가 반환되지 않음. 
console.log(age); // 30 


// ** 생성자 함수의 new호출을 통한 객체 생성 과정 **
// 1) 빈 객체를 만든다.
// 2) 만든 빈 객체를 this에 할당한다.
// 3) 생성자 함수 바디의 코드를 실핸한다. (this에 속성 및 메소드 추가)
// 4) 만든 빈 객체의 __proto__에 생성자 함수의 prototype 속성을 대입한다. 
// 5) this를 생성자의 반환값으로 변환한다. 



// 2. 프로토타입 기반 상속 이해하기 (050)

// 자바스크립트에서 생성자 함수로부터 만들어진 객체는 그 생성자 함수의 프로토타입 (Prototype)객체를 상속한다. 
// -> 모든 인스턴스는 해당 생성자 함수의 프로토타입 객체의 속성과 메소드들을 사용할 수 있다. 

// 자바스크립트에서 모든 함수는 prototype 속성으로 프로토타입 객체를 가진다. 
// 모든 객체는 __proto__속성을 가지는데 이 __proto__ 속성은 해당 객체를 생성한 생성자 함수의 prototype객체를 가리키니다. 
// -> 생성자 함수를 통해서 타입을 정의할 수 있다. 

function Storage(){
    this.dataStore = {};
}
Storage.prototype.put = function(key, data){
    this.dataStore[key] = data;
}
Storage.prototype.getData = function(key){
    return this.dataStore[key];
}

const productStroage = new Storage();
productStroage.put('id001', {name:'키보드', price: 2000});
console.log(productStroage.getData('id001'));

function RemovableStroage(){
    Storage.call(this);
}
RemovableStroage.prototype = Object.create(Storage.prototype);

RemovableStroage.prototype.removeAll = function () {
    this.dataStore = {}
}
const productStroage2 = new RemovableStroage();
productStroage2.put('id001',{name: '키보드', price: 2000});
productStroage2.removeAll();
const item2 = productStroage2.getData('id001');
console.log(item2);  //undefined