//자바스크립트 객체지향 프로그래밍 이해하기 

// * 객체지향 프로그래밍이란?

// - 프로그램을 객체들로 구성하고 객체들 간에 서로 상호작용하도록 작성하는 방법
// - 객체지향 -> '객체?' 식별 가능한 구체적인 사물 또는 추상적인 개념
// - 특징적인 행동과 변경 가능한 상태를 가짐
//   자바스크립트에서는 함수 값으로 가지는 속성을 메소드라고 하는데, 이 메소드를 특징적인 행동이며
//   그 외에 다른 값들은 변경 가능한 상태라고 볼 수 있다. 


const teacherJay = {
    name: '제이',
    age: 30,
    teachJavascript: function(student) {
        student.gainExp();
    }
}


// * 객체 지향에서는 객체들이 서로 의사소통을 하는데, 메소드를 통해 서로 메시지를 전달한다. 
// * 객체 지향에서는 협력하지 않는 객체란 존재하지 않는다. 

const studentBbo = {
    name:'뽀',
    age: 20,
    exp: 0,
    gainExp: function(){
        this.exp++;
    }
}

console.log(studentBbo.exp); // 0
teacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp); // 1


// * 객체지향에서는 무수히 많은 객체들을 공통적인 특성을 기준으로 객체를 묶어서 하나의 타입으로 정의. -> 분류(classification)

// * 자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원한다. 
//   모든 객체는 다른 객체의 원형 (Prototype)이 될 수 있다. 

const studentProto = {
    gainExp: function(){
        this.exp++;
    }
}

const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto   // __proto__ 속성에 studentProtp객체를 연결 (할당).
};

const bbo = {
    name: '뽀',
    exp: 10,
    age:20,
    __proto__: studentProto
};

bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin);
console.log(bbo);