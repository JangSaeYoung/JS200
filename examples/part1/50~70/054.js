// this 이해하기 
// : 자바스크립트에서 this 키워드가 사용 방법에 따라 어떤 값을 반환하는지 살펴본다. 

// - this는 함수가 어떻게 호출되는지에 따라 동적으로 결정된다. 
// - this의 주요 목적 ( 재사용 but, 동적 결정)
//   작성된 코드를 여러 목적으로 재사용하기 위해 존재하는데, 호출되는 방식에 따라 
//   동적으로 결정되어 간혹 잘못된 코드를 작성할 수 있다. 
// - this는 전역, 함수 안에서도 사용할 수 있다.
//   함수는 객체 안에 메소드로 정의 될 수도 있고, 생성자 함수로 사용 될 수도 있고,
//   특정 로직을 계산하여 값을 반환하는 목적으로 사용할 수도 있다. 
// - class 안에서 사용되는 this는 생성자 함수와 동일하다. 

// 번호 -13
this.valueA = 'a';
console.log(valueA);   // a  전역 가리킴 console.log(window.valueA)로 해석

valueB = 'b';
console.log(this.valueB);  // b

function checkThis(){
    console.log(this);  // 함수에서 this를 사용하면 전역 객체인 Window를 가리킴
}
function checkThis2(){
    "use strict";           // 엄격한 모드로 실행 시 this는 undefined
    console.log(this);  //undefined
}
checkThis();
checkThis2();   

function Product(name, price) {     // 생성자 함수로 작성되었으나, new키워드 없이 호출되면 
    this.name = name;               // this는 전역 객체인 window를 가리키
    this.price = price;
}
const product1 = Product('가방', 2000);
console.log(window.name);    // 가방
console.log(window.price);   // 2000

const product2 = {
    name: '가방2',
    price: 3000,
    getVAT(){
        return this.price /10 ;
    }
}
const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2);  // 300

const calVAT = product2.getVAT;
const VAT2 = calVAT();
console.log(VAT2); // 200 에? => 메소드를 다른 변수에 저장하고 그 변수를 통해 호출하면 일반적인 
                   // 함수 호출이 되어 this는 전역 객체를 가린다. ( window.price // 2000)
                   // 호출하는 시점에 점(.)연산자와 함께 객체가 주어져야 메소드 안의 this가 호출의 주체인 객체가 된다.

const newCalVAT = calVAT.bind(product2);  // bind 메소드를 통해 전달한 인자값으로 변경할 수 있다. 
const VAT3 = newCalVAT();                // call, apply 메소드 또한 this가 가리키는 값을 변경할 수 있다. 
console.log(VAT3); // 300

const counter1 = {
    count:0,
    addAfter1Sec(){
        setTimeout(function(){
            this.count += 1;
            console.log(this.count);   // NaN 
        }, 1000)                       // 메소드 안에 중첩 함수가 작성됐을 때 내무 함수의 this는 전역 객체를 가리킴
    }                                  // this.count => window.count
};

counter1.addAfter1Sec();

const counter2 = {
    count:0,
    addAfter1Sec(){
        setTimeout(()=> {
            this.count += 1;
            console.log('1이 나와야되는데>>>',this.conut);
        },1000)
    }
};
counter2.addAfter1Sec();


// * 화살표 함수와 bind가 추가되기 전 대체로 this에 대한 레퍼런스를 다른 변수에 보관 후
//   내부 함수에서 그 변수를 참조하는 방식으로 메소드를 소유한 객체에 접근하였다. 

// 예제
// const counter2 ={
//     conut2: 0,
//     addAfter2Sec(){
//         const me = this;
//         setTimeout(function(){
//             me.count2 += 1;
//             console.log(this.conut2);
//         }, 2000)
//     }
// };
// counter2.addAfter2Sec();


// * 화살표 함수에서 this를 사용하면 this는 부모 환경의 this를 가리킨다. 
//   중첩된 함수를 사용하면 화살표 함수는 부모 함수의 this와 같다 

//예제
// const arrowFunc = () => {
//     console.log(this);
// }
// const nowArrowFunc = arrowFunc.bind({d:2});
// nowArrowFunc();
