// Get, Set을 통한 속성 접근 관리하기
// 객체의 속성에 접근하여 값을 가져오거나 대입할 때 get함수와 set함수를 통해 속성 접근을 관리하는 법. 

let user = {};

Object.defineProperty(user, "age", {
    get: function(){
    return this._age;
},
    set: function (age) {
        if (age < 0){
            console.error('0보다 작은값은 올 수 없습니다.');
        }else{
            this._age = age;
        }
    },
    enumerable:true
});
user.age = 10;
console.log(user.age);

user.age = -1;

let user2 = {
    get name(){
        return this._name;
    },
    set name(val){
        if (val.length < 3){
            throw new Error('3자 이상이어야 합니다.');
        }
        this._name = val;
    }
}
user2.name = 'harin';
console.log(user2.name);
user2.name = 'ha';




