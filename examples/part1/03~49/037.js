// ES6에서 새롭게 추가된 기본 매개변수
// - 매개변수를 정의할 때 기본으로 할당될 인자값과 함께 작성하는 매개변수를 말한다.
// - 값을 할당하는 연산자인 = 를 이용하여 정의.

function drawChart(width = 200, height = 400){    // 매개변수로 width, height를 선언
    console.log(`${width} x ${height} 차트를 그립니다.`);
}
drawChart(100);   // drawChart 호출할 때 인자로 100을 전달. 
drawChart(); // 전달인자 없이 호출하여 기본값인 200, 400이 할당됨. 

function drawChart2(width = 200, height = width /2){
    console.log(`${width} X ${height} 차트를 그립니다.`);
}
drawChart2(300);
drawChart2();