const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
        correct: 0,
        fact: "HTML is the standard markup language for creating web pages."
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML", "JQuery", "CSS", "XML"],
        correct: 2,
        fact: "CSS (Cascading Style Sheets) describes how HTML elements are to be displayed."
    },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 60;

const startQuizButton = document.getElementById('start-quiz');
const nextQuestionButton = document.getElementById('next-question');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const feedbackElement = document.getElementById('feedback');
const didYouKnowElement = document.getElementById('did-you-know');
const timerElement = document.getElementById('time');
const scoreElement = document.getElementById('current-score');

startQuizButton.addEventListener('click', startQuiz);
nextQuestionButton.addEventListener('click', nextQuestion);

function startQuiz() {
    startQuizButton.style.display = 'none';
    nextQuestionButton.style.display = 'block';
    questionContainer.style.display = 'block';
    timer = setInterval(updateTimer, 1000);
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(selectedOptionIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correct) {
        score++;
        feedbackElement.textContent = 'Correct!';
    } else {
        feedbackElement.textContent = 'Incorrect!';
    }
    scoreElement.textContent = score;
    didYouKnowElement.textContent = "Did You Know? " + currentQuestion.fact;
    nextQuestionButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length && timeLeft > 0) {
        displayQuestion();
        feedbackElement.textContent = '';
        didYouKnowElement.textContent = '';
        nextQuestionButton.disabled = true;
    } else {
        endQuiz();
    }
}

function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
    }
}

function endQuiz() {
    questionContainer.style.display = 'none';
    feedbackElement.textContent = `Quiz Over! You scored ${score} out of ${quizData.length}.`;
    didYouKnowElement.style.display = 'none';
    nextQuestionButton.style.display = 'none';
}
