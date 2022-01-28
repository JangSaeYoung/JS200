// * 문자열 양 끝의 공백 없에게 (trim)
//   문자열 양 끝의 공백을 없애는 방법

// * String 내장 객체의 strim 메소드는 문자열 양 끝의 공백, 탭, 줄바꿈을 제거
//   단, 함수가 적용된 문자열 원본 값에는 영향을 끼치지 않기 때문에 활용하려면 별도로 값을 저장해야 한다. 

// const sentencse = [ '   ABC abc', 'ABC abc    ', ' first
// second third
//           forth
// sentence


// '];

const fillterSentence = (sentencse) => {
    const filtered = [];
    sentencse.forEach(s => {
        filtered.push(s.trim());
    });
    return filtered;
}
console.log(fillterSentence(sentencse));