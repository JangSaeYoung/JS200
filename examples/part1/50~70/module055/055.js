// 1. 모듈 이해하기 
// 모듈을 이해하고 자바스크립트에서 네임스페이스를 통해 모듈을 정의하는 법을 배워본다.

// * 모듈
//   - 파일이나 코드의 묶음 단위로 애플리케이션 하나의 구성요소로 볼 수 있다. 
//   - 모듈을 정의하면? 
//     => 모듈 단위로 코드를 재사용 할 수 있고,
//     => 하나의 애플리케이션이라는 큰 기능을 작은 기능 단위로 잘게 분리하여 관리할 수 있다. 


// 네임스페이스의 패턴 

var namespaceA = (function(){
    var privateVariable = '비공개 변수';
    return {
        publicApi:function(){
            console.log(privateVariable + '를 접근할 수 있습니다.');
        }
    }
})();

namespaceA.publicApi();

// - C# 언어에서 제공하는 기능 ( 코드를 그룹화 /  이름 충돌을 방지하게 도와줌)
// - 자바스크립트에서는 네임스페이스를 직접적으로 지원하지는 않음. 
// 즉각 호출 패턴 (function(){//코드})();

// 2. 모듈 시스템 이해하기
// ES6에서 추가된 모듈 시스템에 대해 알아본다. 

// - ES6의 모듈은 자바스크립트 코드를 담고 있는 하나의 파일이다. 
//   => 하나의 파일이 하나의 모듈이라고 볼 수 있다. 
// - ES6의 모듈은 엄격한 모드의 코드이고, import와 export 키워드를 사용
//   => export 키워드를 이용하여 모듈 내의 특정 코드를 외부에서 사용할 수 있다. 
//   => import 키워드를 이용해서 export한 코드들을 가지고 올 수 있다. 

// export function hello(name){
//     console.log(`hello ${name}`);
// }

// import {hello} from './hello.js';

// hello('es6 module'); // hello es6 module

// - 여러 모듈들은 의존 관계를 맺어 의존 관계 그래프가 형성되게 된다.
// - 의존 관계 그래프에서는 최상의 루트가 필요한데 이 루트 모듈이 애플리케이션의 시작점이다. 
//   ( 자바나 C언어에서의 메인 메소드와 같다고 생각하면 된다. )


// ES6의 모듈로 정의된 파일을 실행하는 방법에 따라 두 가지로 분료

// (1) Runtime Loading 
//  - 의존 관계가 형성된 모듈들을 애플리케이션이 구동 시점에 비동기 HTTP 요청으로 불러오고 실행
//    이 때 모듈 로더가 필요한데 system.js 나 require.js 를 이용할 수 있다. 

// (2) Bundilng 
//  - 의존 관계가 형성된 모듈들을 하나의 파일로 묶어 준다. 
//    애플리케이션이 구동할 때 묶여진 이 파일을 로드한다. 
//  - 번들린은 개발 시점에 이루어지게 되고 브라우저에서 이루어지지 않고 대체로 node.js환경에서 이루어지게 된다. 
//    대표적인 모듈 번들러로는 웹팩 Webpack이 있다. 

// (2-1) Webpack ?
//   - 모듈 번들러로 자바스크립트 코드 외에 CSS, 이미지, 폰트 등 다양한 자원들을
//     모듈화시켜 의존 관계 그래프를 형성하여 병합된 파일들을 만들 수 있다. 
//   - node.js 플랫폼에서 동작하는 애플리케이션이고 다양한 플러그인들을 제공하고 있다. 



// 2-1 
// 크롬61버전부터 <script type=module>을 지원하면서 별도의 모듈 로더없이 ES6 모듈을 사용할 수 있게 되었다\.
// 어떻게?

// <!DOCTYPE html>
// <html lang= 'en'>
//     <head>
//         <meta charset = "UTF-8">
//         <title>Module Sample</title>
//         <script type = "module" src = "app.js"></script>  //이렇게!! 오호!
//     </head>
//     <body>
//     </body>
// </html>




// 3. 모듈 기본값 정의하고 가져오기 
// ES6에서 모듈을 정의할 때 기본값으로 정의하고, 정의된 값을 다른 모듈에서 어떻게 불러오는지 배워본다. 
// ES6 모듈 시스템에서는 default 키워드를 사용하여 모둘을 기본으로 내보내는 값을 정의할 수 있다. 
// -> 숫자, 문자, 불리언과 같은 기본형 값과 객체, 함수, 클래스와 같은 참조형 값 모도 올 수 있다. 

// export default 'hello';
// export default function hello(name){
//     console.log('hello '+ name);
// };
// export default class Hello {
//     constructor(greeting){
//         this.greeting = greeting;
//     }
//     hi(name) {
//         console.log(`${this.greeting} ${name}`);
//     }
// }

// * default 사용 시 중요한 점
// - default 키워드는 하나의 모듈에서 한 번만 사용할 수 있다. 
//   => 한 파일에서는 하나의 값만 default로 정의할 수 있다. 

// - default 키워드 다음에는 var, let, const 같은 변수선언 키워드가 올 수 없다. 
//   default는 해당 모듈의 기본값을 선언하는 것이기 때문에 변수 선언 키워드가 오면
//   문법적 오류를 발생한다. 

// import Hello from './hello.js';

// const koreaHi = new Hello('안녕하세요');
// koreaHi.hi('하린');
// 출력 : 안녕하세요. 하린




// 4. 모듈을 여러 이름으로 내보내고 가져오기 
// ES6에서 모듈을 정의할 때 이름있는 변수, 함수 클래스들을 내보내고 이렇게 내보낸 것들을 다른 모듈에서 어떻게 불러오는지를 배워본다. 

// - ES6 모듈 시스템에서는 이름있는 변수나 함수 혹은 클래스를 export 키워드를 사용하여 내볼 수 있다. 
// - default (기본값)과 다르게 이름이 있기 때문에 중복되지 않는 한 여러 이름있는 것들을 내보낼 수 있다.. 

// export const version = 'v1.0';

// export var personA = {
//     name: 'a'
// };

// export function add(a,b) {
//     return a + b;
// }

// export class Person{
//     constructor(name) {
//         this.name = name;
//     }
// }

//app.js
//다른 모듈에서 불러오기

// import { add, Person, version } from './hello.js';

// const result = add(1,2);            // 가져온 add함수와 Person 클래스를 사용
// const harin = new Person('하린');

// console.log(result);   //3
// console.log(harin.name);  // 하린
// console.log(version);   // v1.0

// // => 다른 모듈에서 가져온 이름은 오직 읽기만 가능하다. => 해당 이름에 다른 값을 할당할 수 없다. 

// import {personA} from './hello.js'
// personA = 'v2'; // 오류발생




// 4. 모듈을 다양한 방식으로 사용하기
// ES6 모듈 시스템에서 외부 모듈을 사용하는 다양한 방법을 알아본다. 

