// * 클로저 이해하기
// 자바스크립트에서 클로저가 어떻게 생성되고 어떠헤 활용되는지 배운다. 

function createCounterClosure() {
    let count = 0;
    return {
        increase: function(){
            count++;
        },
        getCount: function(){
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : ' + counter1.getCount()); // 2
counter2.increase();
console.log('counter 2의 값 : ' + counter2.getCount()); // 1

// count1의 count != count2의 count
// 클로저란 함수가 정의될 때의 렉시컬 환경을 기억하는 함수를 말한다. 