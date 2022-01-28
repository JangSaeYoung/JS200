// * 배열 자료형 확인하기 (isArray)
//  간단하게 배열 여부를 확인하는 방법


// * 자바스크립트는 변수 자료형이 동적으로 바뀔 수 있기 때문에 의도한 자료형인지 확인해야하는 경우가 종종 있다. 
//   isArray 메소드는 배열 자료형 여부를 true/false 로 구별할 수 있다. 
//   Array.isArray(배열)

function callRoll(studenst){ 
    if (!Array.isArray(studenst)) return;
    
    studenst.forEach((student) => {
        console.log(`Are you here, ${student}`);
    });
}

const students = ['Jun', 'Ail', 'Murry', 'Toby'];
callRoll(students);

