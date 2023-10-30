var count=10;
var timeCount=document.querySelector("#timeCount");
var start=document.querySelector("#startQuiz");
var questionText=document.querySelector("#question");
var choice=document.querySelector(".choice");
const database=[{
    question:"How tall is Mount Everest?",
    answers:[
        {text: "28,760 ft", value:0},
        {text: "32,490 ft", value:0},
        {text: "30,610 ft", value:0},
        {text: "29,032 ft", value:1}
    ]
},{
    question:"Which Greek philosopher was the first to develop a formal system for reasoning?",
    answers:[
        {text: "Plato", value:0},
        {text: "Aristotle", value:1},
        {text: "Socrates", value:0},
        {text: "Pythagoras", value:0}
    ]
}];

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
    questionText.innerText="Question #1";
    choice.style.display = "block";
});