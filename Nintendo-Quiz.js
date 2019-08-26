let questionNumber = 0;
let userScore = 0;
let questionsCorrect = 0;
let questionDisplay = 1;

const toggleHidden = element => {
  //called to toggle hidden class at start
  $('.start_menu').toggleClass('hidden');
  $('.score_keeper').toggleClass('hidden')
};

function questionUpdate() {
  //updates question counter
  questionNumber += 1;
  questionDisplay += 1;
  $('.js_question_number').text(questionDisplay);
}

function scoreUpdate() {
  //adds points to current score and updates
  const pointValue = dataBank[questionNumber].pointValue;
  userScore += pointValue;
  $('.js_user_score').text(userScore);
}

function correctUpdate () {
  //updates and displays current amount of correct answers
 questionsCorrect += 1;
 $('.js_questions_correct').text(questionsCorrect);
}

function handleStart () {
  //listen for start click and load question
$('.start_button').on('click', function() {
  toggleHidden();
  loadQuestion();
  $('.js_question_number').text('1')
  });
};

function loadQuestion () {
  //generate question from dataBank with answers
  const currentQuestion = dataBank[questionNumber].question;
  const currentAnswer = dataBank[questionNumber].answers;
  const questionString = `<div id="jsQuestionContainer" class="js_container">
  <h2>${currentQuestion}</h2>
    <img ${dataBank[questionNumber].icon} alt="${dataBank[questionNumber].alt}"/>
    <form class="current_answers">
    <fieldset>
      <label for="answer-${currentAnswer[0]}" class="answer">
      <input type="radio" id="answer-${currentAnswer[0]}" name="answer" value="${currentAnswer[0]}" required>
      <span>${currentAnswer[0]}</span>
      </label><br>
      <label for="answer-${currentAnswer[1]}" class="answer">
      <input type="radio" id="answer-${currentAnswer[1]}" name="answer" value="${currentAnswer[1]}" required>
      <span>${currentAnswer[1]}</span>
      </label><br>
      <label for="answer-${currentAnswer[2]}" class="TF-variable answer">
      <input type="radio" id="answer-${currentAnswer[2]}" name="answer" value="${currentAnswer[2]}" required>
      <span>${currentAnswer[2]}</span>
      </label><br>
      <label for="answer-${currentAnswer[3]}" class="TF-variable answer">
      <input type="radio" id="answer-${currentAnswer[3]}" name="answer" value="${currentAnswer[3]}" required>
      <span>${currentAnswer[3]}</span>
      </label>
    </fieldset>
    <button class="js_check_button">Check Answer</button>
    </form>
  </div>`;
//injects updated template to html
  $('#jsQuestionContainer').html(questionString);
  //checks for true false answers
  trueFalseCheck(currentAnswer);
};

function trueFalseCheck () {
  //removes last two elements in form if current question is a true/false
  if(dataBank[questionNumber].trueFalse === true){
    $('.TF-variable').remove();
  }
}

function handleNextClick () {
  //handles next button clicks
  $('#jsQuestionContainer').on('click', '.js_next_button', function(event) {
    if(questionNumber === dataBank.length){
    quizEnd();
  }
  else{
    $('#questionDisplay').toggleClass('hidden');
    loadQuestion();
    }
  });
};

function checkAnswer() {
  //checks for correct answer on click and returns appropriate display info for user
  $('#jsQuestionContainer').on('submit', function(event) {
    event.preventDefault();
    const selected = $('input:checked').val();
    const correctAnswer = dataBank[questionNumber].correctAnswer;
    if(selected === correctAnswer){
      //dataBank[questionNumber].userCorrect = true;
      handleCorrect();
      scoreUpdate();
      questionUpdate();
    }
    else{
      //dataBank[questionNumber].userCorrect = false;
      handleIncorrect();
      questionUpdate();
    }
  });
}

function handleCorrect() {
  //generates string for correct answers and updates amount of correct questions
  const correctString = `<div id="jsQuestionContainer" class="correct_answer">
  <h2>CORRECT</h2>
  <p>${dataBank[questionNumber].fact}</p>
  <img src="${imageBank[0].correctImg}"/>
  </div>
  <button type="button" class="js_next_button">
  Next</button>`;

  correctUpdate();
  $('#questionDisplay').toggleClass('hidden');
  $('#jsQuestionContainer').html(correctString);
}

function handleIncorrect() {
  //generates string for incorrect answers
  const incorrectString = `<div id="jsQuestionContainer" class="incorrect_answer">
  <h2>INCORRECT</h2>
  <p>${dataBank[questionNumber].fact}</p>
  <img src="${imageBank[0].incorrectImg}"/>
  </div>
  <button type="button" class="js_next_button">
  Next</button>`;

  $('#questionDisplay').toggleClass('hidden');
  $('#jsQuestionContainer').html(incorrectString);
}

function quizEnd() {
  //gathers results and generates string for user
  let summary = '';

  if(userScore <= 80){
    summary = 'You could use a break to play some N64.';
  }
  else if(userScore <= 160){
    summary = 'Wow you must have a Gameboy on you right now.';
  }
  else if(userScore > 160){
    summary = 'You must be a Nintendo exec.';
  };

  const resultsString = `<div class="results">
    <h2>RESULTS</h2>
    <p>You got <span class="result_span">${questionsCorrect}</span> right, 
      and you earned a score of <span class="result_span">${userScore}</span>.
      </p>
      <p>${summary}</p>
    </div>
    <button class="restart_button">Restart</button>`;

  $('#scoreDisplay').toggleClass('hidden');
  $('#correctDisplay').toggleClass('hidden')
  $('#jsQuestionContainer').html(resultsString);
  $('.restart_button').on('click', function(event){
    location.reload();
    $('#jsQuestionContainer').html('');
  });
}

function initiateQuizLoad () {
  //readys quiz functions
  handleStart();
  handleNextClick();
  checkAnswer();
};

//runs on page load all imperative function calls
$(initiateQuizLoad);