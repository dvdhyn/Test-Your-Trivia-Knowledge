var count=10;
var timeCount=document.querySelector("#timeCount");
var start=document.querySelector("#startQuiz");

start.addEventListener("click",function(){
    setInterval(function(){
        if (count>=0) {
            timeCount.innerText=count+" seconds remaining";
            count --;
        } else {
            clearInterval(count);
    }},1000);
});
