const quizContainer = document.querySelector('.quiz-container');
const questionsContainer = quizContainer.querySelector('.questions-container');
const submitBtn = quizContainer.querySelector('.submit-btn');
const resultContainer = quizContainer.querySelector('.result-container');
const questionTemplate = document.querySelector('#question-template');

let numCorrect = 0;
let answeredQuestions = 0;

const quizData = [
   {  question: ' What country has the highest life expectancy? ',  
    options: ['West Coast', 'Hong Kong', 'North Pole'],
    answer: 'Hong Kong'
  },
  {
    question: ' What disease commonly spread on pirate ships? ',
    options: ['STD', 'Malaria', 'Scurvy', 'Flu'],
    answer: 'Scurvy'
  },
  {
    question: ' What Saints Day is celebrated (particularly in Ireland) on 17th March each year?',
    options: ['President day', 'womens day', 'St Patricks Day', 'culture day'],
    answer: 'St Patricks Day'
  },
  {
    question: ' What is the capital city of Canada?',
    options: ['Toronto', 'Ottawa', 'Montreal', 'Vancouver'],
    answer: 'Ottawa'
  },
  {
    question: ' Which sea creature has three hearts?',
    options: ['sea lion', 'Octopus', 'star fish', 'shark'],
    answer: 'Octopus'
  },
  {
    question: 'In the traditional rhyme, how many mice were blind?',
    options: ['Yes', 'No', 'Maybe', 'No Idea'],
    answer: 'Yes'
  },
  {
    question: '  Will Everyone finish this bootcamp?',
    options: ['one', 'five', 'Three', 'eight'],
    answer: 'Three'
  },
  {
    question: 'What is the capital city of France?',
    options: ['Paris', 'Berlin', 'Boston', 'London'],
    answer: 'Paris'
  },
  {
    question: ' Water boils at 212 degrees on which temperature scale?',
    options: ['degree', 'Fahrenheit', 'celisus', 'kelvin'],
    answer: 'Paris'
  },
  
]

quizData.forEach((question, index) => {
  const questionBox = questionTemplate.content.cloneNode(true).querySelector('.question-box')
  const questionNumber = questionBox.querySelector('.question-number')
  const questionText = questionBox.querySelector('.question-text')
  const answerOptions = questionBox.querySelector('.answer-options');
  const answerInput = questionBox.querySelector('.answer-input')
  const submitAnswerBtn = questionBox.querySelector('.submit-answer-btn')
  
  questionNumber.textContent = index + 1;
  questionText.textContent = question.question
  
  
  question.options.forEach(option => {
    const label = document.createElement('label')
    const input = document.createElement('input')
    input.type = 'radio';
    input.name = `q${index + 1}`;
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    answerOptions.appendChild(label);
  });
  
  submitAnswerBtn.addEventListener('click', () => {
    const selectedAnswer = questionBox.querySelector(`input[name="q${index + 1}"]:checked`);
    if (selectedAnswer && selectedAnswer.value.toLowerCase() === question.answer.toLowerCase()) {
      questionBox.classList.remove('incorrect')
      questionBox.classList.add('correct')
      textarea.classList.remove('incorrect')
      textarea.classList.add('correct')
      numCorrect++
    } else {
      questionBox.classList.remove('correct')
      questionBox.classList.add('incorrect')
    }
    
    answerInput.disabled = true
    submitAnswerBtn.disabled = true
    answeredQuestions++
  });
  
  questionsContainer.appendChild(questionBox)
});