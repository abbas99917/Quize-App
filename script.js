const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which language is used to style web pages?",
        options: [
            "HTML",
            "JavaScript",
            "CSS",
            "Python"
        ],
        correctAnswer: "CSS"
    },
    {
        question: "Which language is used in web for logics?",
        options: [
            "HTML",
            "JavaScript",
            "CSS",
            "Python"
        ],
        correctAnswer: "JavaScript"
    },
    {
        question: "What is meant by functions in javaScript?",
        options: [
            "HTML",
            "Reusable block of code",
            "loop",
            "array"
        ],
        correctAnswer: "Reusable block of code"
    },
];


let currentQuestion = 0;
let score = 0
let answer = false;

const question = document.getElementById("question");
const optione = document.querySelectorAll(".option");
const nextbtn = document.getElementById("nextBtn");
const score1 = document.getElementById("score");
const result = document.getElementById("result");


//=================================================== SHOW QUESTIONS ==============================================//

function showQuestion() {
    const data = questions[currentQuestion];
    question.innerText = data.question;
    showOptions(data);
}

//=================================================== SHOW OPTIONS ==============================================//
function showOptions(data){

    for(let i = 0; i<data.options.length; i++){
    optione[i].innerText = data.options[i]
}
}
showQuestion();


// ================================================== CHECKED ANSWER ==============================================//
for(let i = 0; i < optione.length; i++){
    optione[i].addEventListener("click", function(){
        if(answer === false){
            let selectedAnswer = this.innerText;
            if(selectedAnswer === questions[currentQuestion].correctAnswer){
                score++
                score1.innerText = score;
                console.log("Correct");
            }
            else{
                console.log("Wrong");
            }
            answer = true;
        }
    });
}

//================================================= NEXT BUTTON LOGICS ================================================//

nextbtn.addEventListener("click",function(){
    if(currentQuestion < questions.length -1){
        currentQuestion++
        answer = false;
        showQuestion()
    }
    else{
        showResult()
    }
})

//================================================= SHOW RESULT ========================================================//

function showResult(){

    question.style.display = "none"
    optione.forEach(function(btn){
        btn.style.display = "none"

    });
    nextbtn.style.display  = "none"
    result.innerText = `Your Score is ${score} / ${questions.length}`;
}
