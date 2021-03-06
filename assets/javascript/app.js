// Creates variables to select html elements.
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

// Creates questions.
const myQuestions = [
    {
    question: 'Who is the best basketball player?',
    answers: {
        a: 'Kobe Bryant',
        b: 'Lebron James',
        c: 'Michael Jordan'
    },
    correctAnswer: 'a'
},
    {
    question: 'What is the tallest building in the world?',
    answers: {
        a: 'Empire State building',
        b: 'Burj Khalifa',
        c: 'Shanghai Tower'
    },
    correctAnswer: 'b'
},
    {
    question: 'Who said, "Ive never seen a thin person drinking diet coke?"',
    answers: {
        a: 'Bill Burr',
        b: 'Seth Rogan',
        c: 'Donald Trump'
    },
    correctAnswer: 'c'
},
    {
    question: "Who is the founder of Rapture?",
    answers: {
      a: "Bill Mcdonagh",
      b: "Cohen Sanders",
      c: "Andrew Ryan"
    },
    correctAnswer: "c"
},
{
    question: "What is the name for the Jewish New Year?",
    answers: {
      a: 'Kwanza',
      b: 'Yom Kippur',
      c: 'Hanukkah'
  },
  correctAnswer: 'c'
},
{
    question: "Which one of these characters is not friends with Harry Potter?",
    answers: {
      a: 'Ron Weasley',
      b: 'Draco Malfoy',
      c: 'Neville Longbottom'
  },
  correctAnswer: 'b'
},
{
    question: 'What is the color of Donald Duck’s bowtie?',
    answers: {
      a: 'Red',
      b: 'Blue',
      c: 'Black'
  },
  correctAnswer: 'a'
},
{
    question: 'Which animal does not appear in the Chinese zodiac?',
    answers: {
      a: 'Dragon',
      b: 'Rabbit',
      c: 'Hummingbird'
  },
  correctAnswer: 'c'
},
{
    question: "Which country held the 2016 Summer Olympics?",
    answers: {
      a: 'Brazil',
      b: 'China',
      c: 'Italy'
  },
  correctAnswer: 'a'
},
{
    question: "Which planet is the hottest?",
    answers: {
      a: 'Saturn',
      b: 'Venus',
      c: 'Mars'
  },
  correctAnswer: 'b'
},
];
// Main quiz logic.
function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){
              answers.push(
                `<label>
                  <input type="radio" name="question${questionNumber}" value="${letter}">
                  ${letter} :
                  ${currentQuestion.answers[letter]}
                </label>`
              );
            }
            output.push(
              `<div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join('')} </div>`
            );
          }
        );

        quizContainer.innerHTML = output.join("");
      }

// Determines results of quiz.
function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer===currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }

  });
// Displays score.
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

// Calls quiz function.
buildQuiz();

submitButton.addEventListener('click', showResults);
