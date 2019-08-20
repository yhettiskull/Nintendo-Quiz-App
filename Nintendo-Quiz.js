"use strict";

let currentUserScore = 0;
let correctAnswerCount = 0;
let questionNumber = 0;

function readyCurrentDom () {
//prepare current state of DOM for display
console.log('readyCurrentDom ran')

}

function quizStartButton () {
//display first set of question and answers
console.log('quizStartButton ran')
}

function displayCurrentAnswers () {
//get corrisponding answers
console.log('displayCurrentAnswers ran')
}

function updateCurrentScore () {
//update score as questions are answered
console.log('updateCurrentScore ran')
}

function handleAnswerSubmit () {
//handle submission of answer and display correct or incorrect
console.log('handleAnswerSubmit ran')
}

function handleNextQuestion () {
//display next question in sequence
console.log('handleNextQuestion ran')
}

function handleResults () {
//return correct out of 10 and points earned
console.log('handleResults ran')
}

function runQuiz () {
//call all functions
console.log('runQuiz ran')
renderCurrentDom();
quizStartButton();
displayCurrentAnswers();
updateCurrentScore();
handleAnswerSubmit()
handleNextQuestion();
handleResults();
}

//ready runQuiz on page load
$(runQuiz)