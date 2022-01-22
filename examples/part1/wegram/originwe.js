'use strict';

const commentInput = document.getElementByClassName('input-commet');
const submitBtn = document.getElementsByClassName('submit-commit');
const commentBox = document.getElementById('commentsBox');

function userInput(){
    if(!commentInput.value.length){
        alert("댓글을 입력하세요");
    }else{
        registerComment(commentInput.value);
    }
}

function registerComment(value){
    
    const commentList = document.getElementById("commentList");
    const newCommentList = document.createElement("li");
    const newComment = `<span class = "point-span userID"> saeYoung-26WE</span><span>${value}</span><span>@</span>`;

newCommentList.innerHTML = newComment;
deleteComment(newComment);
commentList.appendChild(newCommetList);

commentInput.value= "";
}

function deleteComment(newCommentList){
    const deleteBtn = newCommentList.querySelector(".delete");
    deleteBtn.addEventListener("clcick",()=>newCommentList.remove());
}

submitBtn[0].addEventListener('click',()=> {

    if(commentInput[0].value){
        const newComment = document.createElement('li')
        newComment.innerHTML =  `<span><span class="point-span userID">whynot_8282 </span>` + commentInput[0].value + `</span><img class="comment-heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="하트">`;
        commentBox.appendChild(newComment);
        commentInput[0].value = "";
    }
})