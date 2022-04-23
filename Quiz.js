const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const answerOneBtn = document.getElementById('1');
const answerTwoBtn = document.getElementById('2');
const answerThreeBtn = document.getElementById('3');
const answerFourBtn = document.getElementById('4');
const questionsText = document.getElementById('questions');
const imageDisplay = document.getElementById('image');
const descriptionText = document.getElementById('description');

let currentQuestion = 0;
let currentAnswer = 0;
let totalAnswer = 0;
let questions = [
    {
        question: "Are you more martially or magically inclined?",
        answers: [
            {option:"Martial", nextQuestion: 1},
            {option:"Magical", nextQuestion: 8}
        ]
    },
    {
        question: "What is your preferred fighting style?",
        answers: [
            {option:"Melee", nextQuestion: 2},
            {option:"Ranged", nextQuestion: 6}
        
            
        ]

    },
    {
        question: "Do you want some magic?",
        answers: [
            {option:"Yes", nextQuestion: 16},
            {option:"No", nextQuestion: 3}
        ]
    },
    {
        question: "Do you like versatillity?",
        answers: [
            {option:"Yes", nextQuestion: 11},
            {option:"No", nextQuestion: 4}
        ]
    },
    {
        question: "Do you like strength or dexterity?",
        answers: [
            {option:"Strength", nextQuestion: 12},
            {option:"Dexterity", nextQuestion: 5}
        ]
    },
    {
        question: "Do you want to punch youre enemies?",
        answers: [
            {option:"Yes", nextQuestion: 14},
            {option:"No", nextQuestion: 13}
        ]
    },
    {
        question: "Do you want some magic?",
        answers: [
            {option:"Yes", nextQuestion: 15},
            {option:"No", nextQuestion: 7}
        ]
    },
    {
        question: "Do you want to be sneaky?",
        answers: [
            {option:"Yes", nextQuestion: 13},
            {option:"No", nextQuestion: 11}
        ]
    },
    {
        question: "Where does your power come from?",
        answers: [
            {option:"From study", nextQuestion: 9},
            {option:"From an exteral source", nextQuestion: 10}
        ]
    },
    {
        question: "Do you want to focus more on support or offence?",
        answers: [
            {option:"Support", nextQuestion: 21},
            {option:"Offence", nextQuestion: 22}
        ]
    },
    {
        question: "What is your source?",
        answers: [
            {option:"A pact", nextQuestion: 17},
            {option:"A bloodline", nextQuestion: 18},
            {option:"Nature", nextQuestion: 19},
            {option:"Belief", nextQuestion: 20}
        ]
    },
    {
        question: "Fighter",
        answers: [
            {option:"Images/Fighter.jpg", },
            {option:"Skilled combatant or strategist typically relying on his weapons to cut down their enemies. His training gives him unique abilities.", }
            
        ]
    },
    {
        question: "Barbarian",
        answers: [
            {option:"Images/Barbarian.jpg", },
            {option:"The relentless combatant, fueled by fury or it's totem bonds with animals. In tune with the natural order.", }
        ]
    },
    {
        question: "Rogue",
        answers: [
            {option:"Images/Rogue.jpg", },
            {option:"A thief, assassin or stealthy character who has a knack for picking out his enemies weaknesses and exploiting them.", }
        ]
    },
    {
        question: "Monk",
        answers: [
            {option:"Images/Monk.jpg", },
            {option:"Martial artist pulling on the power of his own body to produce impressive results.", }
        ]
    },
    {
        question: "Ranger",
        answers: [
            {option:"Images/Ranger.jpg", },
            {option:"One who uses a unique blend of wilderness knowledge and martial ability to be a deadly hunter, with a bow, a pet.", }
        ]
    },
    {
        question: "Paladin",
        answers: [
            {option:"Images/Paladin.jpg", },
            {option:"Nearly as skilled as the Fighter but bolsters his efforts with divine magic. through his devotion he gains special boons from his god.", }
        ]
    },
    {
        question: "Warlock",
        answers: [
            {option:"Images/Warlock.jpg", },
            {option:"pacted to a powerful entity the warlock trades favors for boons and spells.", }
        ]
    },
    {
        question: "Sorcerer",
        answers: [
            {option:"Images/Sorcerer.jpg", },
            {option:"A magic user who draws his power from within, summoning his innate magical power and bending it to his will.", }]
    },
    {
        question: "Druid",
        answers: [
            {option:"Images/Druid.jpg", },
            {option:"A nomad devoted to the world and the powers of Nature. Capable of adopting the form of a beast for battle or utility. capable of bolstering the party and heal their wounds, or laying low their enemies with nature's wrath.", }
        ]
    },
    {
        question: "Cleric",
        answers: [
            {option:"Images/Cleric.jpg", },
            {option:"A Holy man devoted to a deity. capable of bolstering the party and heal their wounds, or laying low their enemies with divine wrath.", }
        ]
    },
    {
        question: "Bard",
        answers: [
            {option:"Images/Bard.jpg", },
            {option:"A story teller or musician using his wits, magic, and lore to get out of (or avoid) tight situations", }
        ]
    },
    {
        question: "Wizard",
        answers: [
            {option:"Images/Wizard.jpg", },
            {option:"keeper of arcane secrets and forgotten knowledge, the wizard manipulates magic and spells with cunning.", }
        ]
    }
    
]

function startQuiz(){
    addButtons();
    questionsText.innerHTML = questions[currentQuestion].question;
    answerOneBtn.innerHTML = questions[currentQuestion].answers[0].option;
    answerOneBtn.onclick = () => {

        currentAnswer =  parseInt(questions[currentQuestion].answers[0].nextQuestion);
        clearButtons();
        progressQuiz();

    }
    answerTwoBtn.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwoBtn.onclick = () => {
      
        currentAnswer =  parseInt(questions[currentQuestion].answers[1].nextQuestion);
        clearButtons();
        progressQuiz();

    }
    if (totalAnswer >= 3){
        answerThreeBtn.innerHTML = questions[currentQuestion].answers[2].option;
        answerThreeBtn.onclick = () => {
            currentAnswer =  parseInt(questions[currentQuestion].answers[2].nextQuestion);
            clearButtons();
            progressQuiz();
        }
    }

    if (totalAnswer >= 4){
        answerFourBtn.innerHTML = questions[currentQuestion].answers[3].option;
        answerFourBtn.onclick = () => {
            currentAnswer =  parseInt(questions[currentQuestion].answers[3].nextQuestion);
            clearButtons();
            progressQuiz();
        }
    }
}


function progressQuiz(){
    currentQuestion = currentAnswer;
    totalAnswer = questions[currentQuestion].answers.length;
    addButtons();
    if (totalAnswer == 3){

    }
    restartBtn.onclick = () => {
        currentAnswer = 0;
        imageDisplay.src = ""
        descriptionText.innerHTML = "";
        imageDisplay.style.width ='';
        imageDisplay.style.height ='';
        clearButtons();
        progressQuiz();
    }
    questionsText.innerHTML = questions[currentQuestion].question;
    answerOneBtn.innerHTML = questions[currentQuestion].answers[0].option;
    answerOneBtn.onclick = () => {
        currentAnswer =  parseInt(questions[currentQuestion].answers[0].nextQuestion);
        clearButtons();
        progressQuiz();

    }
    answerTwoBtn.innerHTML = questions[currentQuestion].answers[1].option;
    answerTwoBtn.onclick = () => {
        currentAnswer =  parseInt(questions[currentQuestion].answers[1].nextQuestion);
        clearButtons();
        progressQuiz();
    }
    if (totalAnswer >= 3){
        answerThreeBtn.innerHTML = questions[currentQuestion].answers[2].option;
        answerThreeBtn.onclick = () => {
            currentAnswer =  parseInt(questions[currentQuestion].answers[2].nextQuestion);
            clearButtons();
            progressQuiz();
        }
    }
    if (totalAnswer >= 4){
        answerFourBtn.innerHTML = questions[currentQuestion].answers[3].option;
        answerFourBtn.onclick = () => {
            currentAnswer =  parseInt(questions[currentQuestion].answers[3].nextQuestion);
            clearButtons();
            progressQuiz();
        }
    }
    if (currentQuestion > 10){
        imageDisplay.src = questions[currentQuestion].answers[0].option;
        imageDisplay.style.width ='150px';
        imageDisplay.style.height ='300px';
        descriptionText.innerHTML = questions[currentQuestion].answers[1].option;
    }



}

function clearButtons(){
    totalAnswer = questions[currentQuestion].answers.length;
    for (let i = 1; i <= totalAnswer; i++){
        document.getElementById(i).style.display = 'none';
    }  
}

function addButtons(){
    let totalAnswer = questions[currentQuestion].answers.length;
    if (currentQuestion > 10){
        return
    }
    for (let i = 1; i <= totalAnswer; i++){
        document.getElementById(i).style.display = 'block';
    }  

}

startQuiz();
