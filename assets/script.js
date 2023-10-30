var count=30;
var timeCount=document.querySelector("#timeCount");
var start=document.querySelector("#startQuiz");
var questionText=document.querySelector("#que");
var choice=document.querySelector(".choice");
var response=document.querySelector("#response");
let score=0;
let questNo=1;

let qaBank=[{
    question:"How tall is Mount Everest?",
    answers:[
        {text: "28,760 ft"},
        {text: "32,490 ft"},
        {text: "30,610 ft"},
        {text: "29,032 ft"}         // correct
    ],
    correct:"29,032 ft"
},{
    question:"Which Greek philosopher was the first to develop a formal system for reasoning?",
    answers:[
        {text: "Plato"},
        {text: "Aristotle"},         // correct
        {text: "Socrates"},
        {text: "Pythagoras"}
    ],
    correct:"Aristotle"
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


function beginQuiz(){
    var begin = document.querySelector("#begin");
    begin.style.display = "none";
    choice.style.display = "block";
    let queOne=qaBank[questNo].question;
    let answerOne='<div class="answ" id="a1">'+qaBank[questNo].answers[0].text+'</div>'+'<div class="answ" id="a2">'+qaBank[questNo].answers[1].text+'</div>'+'<div class="answ" id="a3">'+qaBank[questNo].answers[2].text+'</div>'+'<div class="answ" id="a4">'+qaBank[questNo].answers[3].text+'</div>';
    questionText.innerHTML=queOne;
    choice.innerHTML=answerOne;
    var answ=choice.querySelectorAll(".answ");
    for (let i = 0; i < answ.length; i++) {
        answ[i].setAttribute("onclick", "answSelected(this)");
    }
};

function answSelected(select){
    let userChoice = select.textContent;
    let correctChoice = qaBank[questNo].correct;
    if (userChoice == correctChoice) {
        score += 1;
        response.textContent="Correct!" + "Your score is: " + score;
        console.log(score);
    } else {
        score -= 1;
        response.textContent="Inorrect!"  + "Your score is: " + score;
        console.log(score);
    }
}

start.addEventListener("click",beginQuiz);