const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Which of the following doesnot follow oops concept?",
        a: "java",
        b: "c",
        c: "c++",
        d: "c#",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
const quiz= document.getElementById('quiz');
const a_text= document.getElementById('a_text');
const b_text= document.getElementById('b_text');
const c_text= document.getElementById('c_text');
const d_text= document.getElementById('d_text');
let score=0;
const question= document.getElementById('question');
const submitbtn= document.getElementById("submit");
let currentQuestion=0;
const ids= ['a', 'b', 'c','d']
const lids= ['a_text', 'b_text', 'c_text','d_text']


function deselect(){
    for(let i=0;i<ids.length;i++){
        let selected= document.getElementById(ids[i]);
        if(selected.checked){
            selected.checked=false;
        }
    }

}
function loadQuiz(){
    const currentQuizData= quizData[currentQuestion];
    question.innerHTML= currentQuizData.question;
    a_text.innerHTML= currentQuizData.a;
    b_text.innerHTML= currentQuizData.b;
    c_text.innerHTML= currentQuizData.c;
    d_text.innerHTML= currentQuizData.d;
    deselect()
    document.getElementById("error").innerHTML 
    = "";
    
    
    
}
loadQuiz();
function getselected(){
    for (let i=0;i<4;i++){
        let selected= document.getElementById(ids[i]);
        if(selected.checked){
            let correctAnswer= quizData[currentQuestion].correct;
            let val = ids[i];
            if(val===correctAnswer){
               score++;
            }
            // else{
            //     document.getElementById('disp').innerHTML= "Your answer is wrong!"
            // }
            // console.log(`${val}  : ${correctAnswer}`);
             return true;
        }


    }
    document.getElementById("error").innerHTML 
    = "You have not selected any option";
    return false; 

}

submitbtn.addEventListener("click",()=>{
    if(getselected()){
        currentQuestion++;
        if(currentQuestion>=quizData.length){
            //show result
            quiz.innerHTML= `<h2>Your score is ${score}/${quizData.length}</h2> <button onclick="location.reload()">Reload</button>`;
        }
        loadQuiz();
    }
    
    
    
})
