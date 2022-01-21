//객체 속성 기술자 이해하기
// 객체 속성 기술자를 통해 객체의 속성의 정의하는 방법을 알아본다. 

//Object.definProperty -> 데이터에 대한 정보를 정의하는 것 외에도, 데이터에 접근하는 방법을 정의할 수 있다. 

//속성 기술자 (Property Descriptor) 
// - 객체로 표현
// Object.getOwnPropertyDescriptor를 통해 속성 기술자 객체를 가져올 수 있다. 
let user = {
    name: "jeado"
};
let descriptor = Object.getOwnPropertyDescriptor(user,'name');
console.log(descriptor);


//첫 번째 인자 = 속성을 정의할 객체,   두 번째 인자 = 속성명,   세 번째 인자 = 속성 기술자
let user2 = {};
Object.defineProperty(user2,"name", {   //해당 객체(user2)의 속성을 정의
    value: "jeado",                    
    enumverable:true,
    configurable:true,
    writable:false
});
console.log(user2.name);
user2.name = "bbo";    // writavle 속성을 false로 주었기때문에 값을 재할당해도 바뀌지 않고 기존 값 출력. 
console.log(user2.name);

// * 속성 기술자가 개진 객체로서의 속성
// - value : 값을 나타낸다.
// - enumerable: for-in 루프나 Object.keys메소드같이 속성을 나열할 때 나열 가능 여부를 정의. false일 경우 나열되지 않는다. 
// - writable: 값을 변경할 수 있는 여부를 정의. false일 경우 값이 변하지 않는다. 
// - configurable: 속성 기술자를 변경할 수 있는 여부를 정의. false일 경우 속성 기술자를 다시 변경할 수 없다.


let user3 = {
    name: "jeado",
    toString() {
        return this.name;
    }
};
Object.defineProperty(user3,"toString",{
    enumerable:false
});
for (let key in user3){
    console.log(key);  //toString 속성은 enumerable를 false로 정의하여 출력되지 않는다. 
}

let user4 ={};
Object.defineProperty(user4, "name", {
    value:"jeado",
    configurable:false
});
delete user4.name   // 왜 ? configuarable을 false로 정의해서 delete 되지 않는다. 
console.log(user4);

Object.defineProperty(user4, "name", {
    writable:true
});


