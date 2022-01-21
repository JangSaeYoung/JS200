//클래스 정의하기 
// - ES6부터 class 키워드를 통해 클래스를 정의할 수 있다. 
// - 별도 타입의 객체를 생성하는 설계 도면이라고 볼 수 있다. 

// 클래스를 통해
// - 객체가 가져야 할 상태와 행위들을 속성과 메소드로 정의할 수 있다. 
//   ex) 카트 객체들의 특성을 카트 클래스로 정의하고 해당 클래스에서 만들어진 객체들은 추가, 삭제, 반환 등의 행위를 할 수 있게 된다. 
// - 카트 클래스에서 만들어진 객체 => 카트 인스턴스 
// - 즉, 특정 클래스를 통해 만들어진 객체를 해당 클래스의 인스턴스라고 한다. 

class Cart {          // class키워드를 통해 Cart를 정의
    constructor(){            // 생성자 함수 작성 , 매개변수 정의 가능
        this.store = {};      // 생성자 함수 => 매개변수에서 전달받은 값을 속성으로 추가하거나, 속성의 초기값을 대입하는 초기화 과정을 주로 한다. 
    }

    addProduct(product) {                      
        this.store[product.id] = product;
    }

    getProduct(id) {
        return this.store[id];
    }
}

const cart1 = new Cart();

cart1.addProduct({id:1, name:'노트북'})
console.log(cart1.store);

const p = cart1.getProduct(1);
console.log(p);