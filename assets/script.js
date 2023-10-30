var count=10;
var timeCount=document.querySelector("#timeCount");
var start=document.querySelector("#startQuiz");
var question=document.querySelector("#question");
var choice=document.querySelector(".choice");

start.addEventListener("click",function(){
    setInterval(function(){
        if (count>=0) {
            timeCount.innerText=count+" seconds remaining";
            count --;
        } else {
            clearInterval(count);
    }},1000);
});

start.addEventListener("click",function(){
    var begin = document.querySelector("#begin");
    begin.style.display = "none";
    question.innerText="Question #1";
    choice.style.display = "block";
});