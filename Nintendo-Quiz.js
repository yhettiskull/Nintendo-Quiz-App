let questionNumber = 0;
let userScore = 0;
let questionDisplay = 1;

const toggleHidden = element => {
  //called to toggle hidden class at start
  $('.startMenu').toggleClass('hidden');
  $('.score-keeper').toggleClass('hidden')
};

function questionUpdate() {
  //updates question counter
  questionNumber += 1;
  questionDisplay += 1;
  $('.js-question-number').text(questionDisplay);
}

function scoreUpdate() {
  //adds points to current score and updates
  const pointValue = dataBank[questionNumber].pointValue;
  userScore += pointValue;
  $('.js-user-score').text(userScore);
}

function handleStart () {
  //listen for start click and load question
$('.js-start-button').on('click', function() {
  toggleHidden();
  loadQuestion();
  $('.js-question-number').text('1')
  });
};

function loadQuestion () {
  //generate question from dataBank with answers
  const currentQuestion = dataBank[questionNumber].question;
  const currentAnswer = dataBank[questionNumber].answers;
  const questionString = `<div id="question-container" class="js-container">
  <h2>${currentQuestion}</h2>
    <img ${dataBank[questionNumber].icon} alt="${dataBank[questionNumber].alt}"/>
    <form class="current-answers">
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
    <button class="js-check-button">Check Answer</button>
    </form>
  </div>`;
//injects updated template to html
  $('#question-container').html(questionString);
  //checks for true false answers
  trueFalseCheck(currentAnswer);
};

function trueFalseCheck () {
  //removes last two elements in form if current question
  //is a true/false
  if(dataBank[questionNumber].trueFalse === true){
    $('.TF-variable').remove();
  }
}

function handleNextClick () {
  //handles next 'level' button clicks
  $('#question-container').on('click', '.js-next-button', function(event) {
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
  $('#question-container').on('submit', function(event) {
    event.preventDefault();
    const selected = $('input:checked').val();
    const correctAnswer = dataBank[questionNumber].correctAnswer;
    if(selected === correctAnswer){
      dataBank[questionNumber].userCorrect = true;
      handleCorrect();
      scoreUpdate();
      questionUpdate();
    }
    else{
      dataBank[questionNumber].userCorrect = false;
      handleIncorrect();
      questionUpdate();
    }
  });
}

function handleCorrect() {
  //generates string for correct answers and displays info
  const correctString = `<div id="question-container" class="correct-answer">
  <h2>CORRECT</h2>
  <p>${dataBank[questionNumber].fact}</p>
  <img src="${imageBank[0].correctImg}"/>
  </div>
  <button type="button" class="js-next-button">
  Next</button>`;

  $('#questionDisplay').toggleClass('hidden');
  $('#question-container').html(correctString);
}

function handleIncorrect() {
  //generates string for incorrect answers and displays info
  const incorrectString = `<div id="question-container" class="incorrect-answer">
  <h2>INCORRECT</h2>
  <p>${dataBank[questionNumber].fact}</p>
  <img src="${imageBank[0].incorrectImg}"/>
  </div>
  <button type="button" class="js-next-button">
  Next</button>`;

  $('#questionDisplay').toggleClass('hidden');
  $('#question-container').html(incorrectString);
}

function quizEnd() {
  let questionsCorrect = 0;
  let summary = '';

  for(let i = 0; i < dataBank.length; i++){
    if(dataBank[i].userCorrect === true){
      questionsCorrect += 1;
    };
  };

  if(userScore <= 80){
    summary = 'You could use a break to play some N64.';
  }
  else if(userScore <= 160){
    summary = 'Wow you must have a Gameboy on you right now.';
  }
  else if(userScore > 160){
    summary = 'Are you a Nintendo exec?';
  };

  const resultsString = `<div class="results">
    <h2>RESULTS</h2>
    <p>You got <span class="result-span">${questionsCorrect}</span> right, 
      and you earned a score of <span class="result-span">${userScore}</span>.
      </p>
      <p>${summary}</p>
    </div>
    <button class="restart-button">Restart</button>`;

  $('#scoreDisplay').toggleClass('hidden');
  $('#question-container').html(resultsString);
  $('.restart-button').on('click', function(event){
    location.reload();
    $('#question-container').html('');
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