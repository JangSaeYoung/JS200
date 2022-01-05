// ES6의 향상된 객체 문법 

// 1. 단축 속성명
// 단축 속성명으로 객체를 정의하는 방법을 알아본다.

// * 변수가 미리 준비되어 있는 경우 활용 가능, 변수명으로 속성의 키와 값을 한번에 정의 할 수 있다. 
//   -> 객체 리터럴 선언 시 코드를 더 짧고 가독성 있게 만들어준다. 



// var family = {
//     'address' : 'Seoul',          
//     members : {},         
//     addFamily: function(age, name, role) {  
//         this.members[role] = {       
//             age: age,             
//             name: name
//         };
//     },
//     getHeadcount: function(){                    
//         return Object.keys(this.members).length; 
//     }
// };

var address = 'Seoul';
var members = {};
var addFamily = function(age, name, role) {
    this.members[role] = {age, name};
};
var getHeadcount = function(){
    return Object.keys(this.members).length;
};

var family = {address, members, addFamily, getHeadcount};
// 단축 속성명은 문자열, 객체, 함수 등 자료형에 상관없이 적용 가능

family.addFamily(30, 'chole', 'aunt');
family.addFamily(3, 'Iyn', 'niece');
family.addFamily(10, 'dangdange','dog');
console.log(family.getHeadcount());


// 2. 속성 계산명 Computer Property Name
// 객체 속성을 추가하는 방법을 알아봅니다. 

// * 대괄호 [] 안에 식을 넣거나 변수를 대입하여 동적으로 객체 속성들을 생성. 

var obj= {};
for (var i =0; i < 4; i++){
    obj['key' + i] = i; // 속성 접근자 []를 활용하여 계산된 속성명 정의
}
console.log(obj);

var profile = 'chloe:30';
var person = {
    [profile] : true, 
    [profile.split(':')[0]]: profile.split(':')[1] //{chloe:30: true, chloe: '30'}
};
console.log(person); 


//3. 비구조화 할당 Destructuring Assignment
// 비구조화 활딩에 대해 알아봅니다.

// * 배열이나 객체의 값을 새로운 변수에 쉽게 할당.
// ES6이전에는 변수 하나에 값 하나를 일일이 할당해야 했으나 ES6부터는 비구조화 활동을 통해 손쉽게 값을 할당할 수 있게 되었다.

// 객체 비구조화 활당 -> {} 안에 속성 이름을 넣어 객체의 여러 속성을 한 번에 가져울 수 있다. 

var obj1 = {a:1, b:2, c:30, d:44, e:5};
console.log(`a >>> ${a}`); // undefined   ***왜지?***

var {a,c} = obj1;
console.log(`a >>> ${a}`);  // a >>> 1  
console.log(`c >>> ${c}`);  // c >>> 30

var {a:newA=10, f:newF=5} = obj1;
console.log(`newA >>> ${newA}`); // newA >>> 1
console.log(`newF >>> ${newF}`); // newF >>> 5

console.log('-------------');

// 배열 비구조화 할당
var arr = [ 1, 2, 30, 44, 5]; // [] 사용하여 배열을 비구조화

var [b, c, ...rest] = arr;    // 변수에 배열 요소가 순서대로 하나씩 할당.
console.log(`0) b >>> ${b}`);
console.log(`0) c >>> ${c}`);
console.log(`0) rest >>> ${rest}`);  //... <- 변수 지시자_ 나머지 값들을 한꺼번에 담을 수 있다.  
                                    // 0) rest >>> 30,44,5
console.log('-------------');

var [ a= 10, f = 9] = [1];  // 배열 구조화에도 기본값 설정 가능.
console.log(`1) a >>> ${a}`); // 첫번째 요소에 1이 할당. 
console.log(`1) f >>> ${f}`);
console.log('-------------');

[a,f] = [f,a];
console.log(`2) a >>> ${a}`); // 2) a >>> 9
console.log(`2) f >>> ${f}`); 
console.log('-------------');

function getArr(){              //함수에서 반환된 배열값을 비구조화 할 수 있다. 
    return [1, 2, 3, 4, 5, 6 ];   
};
[a, , , , , f] = getArr();    // 일부 배열 요소를 무시하고, 원하는 요소만 가져오는 것도 가능. (콤마사이 공배으로 비우기)
console.log(`3) a >>> ${a}`);
console.log(`3) f >>> ${f}`);  // 3) f >>> 6
