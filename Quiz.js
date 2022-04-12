const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const answerOneBtn = document.getElementById('1');
const answerTwoBtn = document.getElementById('2');
const answerThreeBtn = document.getElementById('3');
const questionsText = document.getElementById('questions');

let currentQuestion = 0;
let currentAnswer = 0;

let questions = [
    {
        question: "This is question one",
        answers: [
            {option:"To question 2", nextQuestion: 1},
            {option:"To question 3", nextQuestion: 2}
        ]
    },
    {
        question: "This is question two",
        answers: [
            {option:"To question 1", nextQuestion: 0},
            {option:"To question 3", nextQuestion: 2}
        ]

    },
    {
        question: "This is question three",
        answers: [
            {option:"To question 1", nextQuestion: 0},
            {option:"To question 2", nextQuestion: 1}
        ]
    }
]

function startQuiz(){
    questionsText.innerHTML = questions[currentQuestion].question;
    answerOneBtn.innerHTML = questions[currentQuestion].answers[0].option;
    answerOneBtn.onclick = () => {

        currentAnswer =  parseInt(questions[currentQuestion].answers[0].nextQuestion);
       // clearButtons();
        progressQuiz();

    }
    answerTwoBtn.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwoBtn.onclick = () => {
      
        currentAnswer =  parseInt(questions[currentQuestion].answers[1].nextQuestion);
        progressQuiz();

    }
    }

function progressQuiz(){
    currentQuestion = currentAnswer;
    console.log(currentQuestion);
    questionsText.innerHTML = questions[currentQuestion].question;
    answerOneBtn.innerHTML = questions[currentQuestion].answers[0].option;
    answerOneBtn.onclick = () => {
        currentAnswer =  parseInt(questions[currentQuestion].answers[0].nextQuestion);
        //clearButtons();
        progressQuiz();

    }
    answerTwoBtn.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwoBtn.onclick = () => {
        currentAnswer =  parseInt(questions[currentQuestion].answers[1].nextQuestion);
        progressQuiz();
    }
}

function clearButtons(){
    //let totalAnswer = questions[currentQuestion].answers.length;
    for (let i = 1; i<2; i++){
        document.getElementById(i).style.display = 'none';
    }





   
}

startQuiz();
