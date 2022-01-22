//1. 클래스 정적 메소드와 속성 정의하기 

// 일반적인 메소드는 해당 클래스이 인스턴스를 통해 호출된다. 
// 정적 메소드는 클래스를 통해 직접 호출하는 메소드를 말한다. 
// 클래스에서 정적 메소드는 static 키워드를 사용하여 정의한다. 

class Product {
    static build(name, price) {                               // static 키워드를 사용하여 bulid 정적 메소드를 정의 
        const id = Math.floor(Math.random()* 1000 );     // Math.random 함수를 호출하면  0부터 1까지의 난수가 반환된다. 
        return new Product(id, name, price);            // bulid 정적 메소드는 난수를 아이드로 하는 상품 인스턴스를 반환한다. 
    }

    static getTaxPrice(product){                  // static 키워드를 사용하여 getTaxPrice  정적 메소드를 정의.
        return (product.price * 0.1) + product.price;
    }

    constructor(id, name, price){        // 상품 클래스의 생성자 함수를 정의 
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class DeposableProduct extends Product {    // 폐기가 가능한 클래스를 정의, DeposableProduct클래스는 product 클래스를 상속한다. 
    depose(){
        this.deposed = true;
    }
}                                      // * 생성자 함수의 prototype 기반 상속과는 다르게 클래스로 상속을 하게 되면 정적 메소드 또한 상속하게 된다. 

const gum = Product.build('껌', 1000);
console.log(gum);   // 랜덤하게 부여된 아이디 ..   id:200, name: '껌', price: 1000

const clothes = new DeposableProduct(1, '옷', 2000);   // DeposableProduct 인스턴스를 생성 
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice); // DeposableProduct 클래스에서 getTaxPrice 정적 메소드를 정의하지 않았지만 Product 클래스를 상속하였기 때문에 호출이 가능.! 
                       // 2200

// * 클래스를 정의할 때 정적 속성 또한 static 키워드와 get 키워드를 통해 정의할 수 있다. 

class ProductWithCode {
    static get CODE_PREFIX(){
       return "PRODUCT-"
    }

    constructor(id) {
        this.id
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX);  //PRODUCT-
console.log(product1.code);  //PRODUCT-001