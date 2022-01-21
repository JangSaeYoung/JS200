// 객체 이해하기
// * Object
// - 값들을 묶은 데이터 모음
// - {} 중괄호 사용
// - Key와 Value => Properties 속성 
// 다양한 원시 자료형의 값 가져올 수 있음.
// 객체 속성으로 또다른 객체와 함수 리터럴을 가질 수 있음. 

var family = {
    'address' : 'Seoul',           // >>> 문자열 '' or 넣지 않은 것 차이 없음. 
    members : {},         // >>> 새로운  객체 리터럴을 대입
    addFamily: function(age, name, role) {   // >>> 함수 리터럴을 대입 
        this.members[role] = {       // >>> this 키워드를 통해 family 객체 내부 속성에 접근 
            age: age,                // family의 members 속성으로 접근해서 값을 할당
            name: name
        };
    },
    getHeadcount: function(){                    // >>> 함수 리터럴을 대입
        return Object.keys(this.members).length; // >>> member의 key들을 모아 배열로 반환 -> 배열의 길이 반환
    }
};

family.addFamily(30, 'chloe', 'aunt');    // 객체 속성에 member를 추가 
family.addFamily(3, 'iyn', 'brother');
family.addFamily(10, 'dangdange', 'dog');
console.log(family.getHeadcount());  // 3

// 속성 접근 / 추가 / 삭제 / 수정

var printMembers = function(){
    var members = family.members;    // . 으로 family 변수 객체의 members에 접근

    for (role in members) {    // for in 으로 members 객체를 순환 , 하나씩 접근 할 때 마다 name과 age 속성값을 반환하여 출력
        console.log( 'role =>' + role +' , name => + ' + members[role].name + ', age => ' + members[role].age); 
    }
};

// for in
printMembers();
console.log('------------ 나는 구분선이야 -----------')


var members = family.members;   
members['nephew'] = {age:3, name:'hyun'};    // 객체에 새로운 속성 추가
members.brother = {age:5, name:'iyn'};  // 원래 있던 속성값을 수정
delete members.aunt;   // 객체 속성 삭제 
delete members['dog'];   // . 과 대괄호 두 가지로 접근 가능 

printMembers();