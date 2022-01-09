// 03 클로저 활용 사례

// 5-3-1 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때

var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');

//예제 5-6
fruits.forEach(function(fruit) {               // (A)
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', function() { // (B)
        alert('your choice is ' + fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);