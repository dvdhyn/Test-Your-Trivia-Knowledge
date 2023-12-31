// assignment code
var count=15;
var timeLeft=document.querySelector("#timeLeft");
var timeCount=document.querySelector("#timeCount");
var start=document.querySelector("#startQuiz");
var questionText=document.querySelector("#que");
var choice=document.querySelector(".choice");
var response=document.querySelector("#response");
var highScore=document.querySelector("#highScore");
var enter=document.querySelector("#enter");
let score=0;
let questNo=0;

// question and answer array
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


// upon clicking the start button, timer will begin
start.addEventListener("click", startButton);

function startButton(){
    setInterval(function(){
        if (count>=0) {
            timeCount.innerText=count+" seconds remaining";
            count --;
        } else {
            clearInterval(count);
    }},1000);
};

/*
function timeOut(){
    questionText.style.display="none";
    choice.style.display = "none";
    timeLeft.style.display = "none";
    timeCount.style.display = "none";
    x = prompt("What are your initials?")
    localScore();
    response.textContent="Thanks for playing, " + x + "! Your final score is: "+score;
}
*/


// flexible function that allows for a variable amount of questions and answers
function beginQuiz(){
    if (questNo > 1) {
        return;
    }
    var begin = document.querySelector("#begin");
    begin.style.display = "none";
    choice.style.display = "block";
    let queT=qaBank[questNo].question;
    let answerT='<div class="answ" id="a1">'+qaBank[questNo].answers[0].text+'</div>'+'<div class="answ" id="a2">'+qaBank[questNo].answers[1].text+'</div>'+'<div class="answ" id="a3">'+qaBank[questNo].answers[2].text+'</div>'+'<div class="answ" id="a4">'+qaBank[questNo].answers[3].text+'</div>';
    questionText.innerHTML=queT;
    choice.innerHTML=answerT;
    var answ=choice.querySelectorAll(".answ");
    for (let i = 0; i < answ.length; i++) {
        answ[i].setAttribute("onclick", "answPicked(this)");
    }
    return;
};

// response feedback when selecting an answer
function answPicked(select){
    if (questNo > 1) {
        return;
    }
    let userChoice = select.textContent;
    let correctChoice = qaBank[questNo].correct;
    if (userChoice == correctChoice) {
        score += 1;
        response.textContent="Correct! Your score is: " + score;
        console.log(score);
        nextQuestion();
    } else {
        score -= 1;
        response.textContent="Inorrect! Your score is: " + score;
        console.log(score);
        count -= 3;
        nextQuestion();
    }
}

function nextQuestion(){
    if (questNo > 1) {
        return;
    }
    questNo++;
    beginQuiz(questNo);
    gameOver();
}

// high score entry
function gameOver(){
    if (questNo > 1) {
        questionText.style.display="none";
        choice.style.display = "none";
        timeLeft.style.display = "none";
        timeCount.style.display = "none";
        x = prompt("What are your initials?")
        localScore();
        response.textContent="Thanks for playing, " + x + "! Your final score is: "+score;
    }
}

function localScore(){
    let finalScore = localStorage.setItem("score",JSON.stringify(score));
    let finalInitials = localStorage.setItem("initials",JSON.stringify(x));
}

// upon clicking the start button, welcome screen will be hidden and quiz will initiate on screen
start.addEventListener("click",beginQuiz);
