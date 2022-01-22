import { version as moduleVersion } from './version.js';   // as키워드를 사용하면 현재 모듈에서 다른 이름으로 사용할 수 있다. 

const version = 'v0';
console.log(moduleVersion); // v1.0

// - vesion 이름으로 상수를 이미 선언했기 때문에 version.js 에서 내보낸 이름으로 
//   version을 가져올 수 없다. 그래서 moduleVersion으로 바꿔 가져온다 

// ** as 키워드
//   -  export 할 때에도 사용할 수 있다. 
//ex
const version = 'v1.0';
export {version as ver};

// * (별표)를 이용하거나 다른 모듈의 코드를 실행만 시킬 수도 있다. 

// add.js
export default function add(a,b){
    return a+b;
}
export const version = 'v1.0';
// add함수를 모듈의 기본으로 정의, verson 변수를 내보낸다. 

//sideeffect.js
console.log('hello!');   
window.hello = function hello(name) {
    console.log('hello ' + name);
}
//외부로 내보내는 값 없이 콘솔에 출력하거나
//전역 객체인 window에 메소드로 hello를 선언
// window에 메소드를 추가하면 window를 통하지 않고 직접 해당 메소드의 호출이 가능


//app2.js
import * as add from './add.js';  // add.js 모듈을 *을 이용하여 전체를 가져온다. / 모듈 전체를 가리키는 이름이 있어야 하므로 as를 사용하여 이름을 줌.(add)
import './sideeffect.js';  // from 작성안함. 

console.log(add.verson);  
const added = add.default(1,2); // import로 sideeffect.js 모듈을 실행했기 때문에 전역으로 선언된 hello함수를 실행 할 수 있음. 
console.log(added);  

hello('harin');

// => 다른 모듈에서 가져온 값들은 복제되는 것이 아니라 이름과 연결된 그 자체를 가져오게 된다.
// => 내보낸 모듈에세 값을 변경하게 되면 가져온 모듈에서도 영향을 받게 된다. 


// value.js
export let value = 1;    // value 변수에 1을 할당

setTimeout(()=> {
    value++;
}, 1000);

//app3.js
import {value} from './value.js';   // value.js 모듈로부터 value를 가져와 
console.log(value);                 // 콘솔에 출력 // 1
  
setTimeout(()=> console.log(value), 2000);   // 2