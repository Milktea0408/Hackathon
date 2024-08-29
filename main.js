let currentQuestionIndex = 0;
let score = 0;
let level = 1;
let timer;
let timeLeft = 10;
const defaultTime = 10;
let answerSelected = false;

const startQuizButton = document.getElementById('start-quiz');
const nextQuestionButton = document.getElementById('next-question');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const feedbackElement = document.getElementById('feedback');
const didYouKnowElement = document.getElementById('did-you-know');
const timerElement = document.getElementById('time');
const scoreElement = document.getElementById('current-score');
const levelElement = document.getElementById('current-level');
const progressBar = document.getElementById('progress-bar');

startQuizButton.addEventListener('click', startQuiz);
nextQuestionButton.addEventListener('click', nextQuestion);

function startQuiz() {
    startQuizButton.style.display = 'none';
    nextQuestionButton.style.display = 'block';
    questionContainer.style.display = 'block';
    displayQuestion();
}

function displayQuestion() {
    resetTimer();
    answerSelected = false; // Reset the flag when a new question is displayed
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(button);
    });

    updateProgressBar();
}

function selectAnswer(selectedOptionIndex) {
    if (answerSelected) return;

    answerSelected = true;
    clearInterval(timer);

    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correct) {
        score += currentQuestion.points * level;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.style.color = 'green';
        confettiEffect();
    } else {
        feedbackElement.textContent = 'Incorrect!';
        feedbackElement.style.color = 'red';
        sadEffect();
    }
    scoreElement.textContent = score;
    didYouKnowElement.textContent = "Did You Know? " + currentQuestion.fact;
    nextQuestionButton.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        if (currentQuestionIndex % 3 === 0) {
            level++;
            levelElement.textContent = level;
            feedbackElement.textContent = `Level Up! Welcome to Level ${level}`;
            feedbackElement.style.color = 'orange';
            setTimeout(() => {
                feedbackElement.textContent = '';
                displayQuestion();
            }, 1500);
        } else {
            displayQuestion();
            feedbackElement.textContent = '';
            didYouKnowElement.textContent = '';
            nextQuestionButton.disabled = true;
        }
    } else {
        endQuiz();
    }
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = defaultTime;
    timerElement.textContent = timeLeft;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
    }
}

function updateProgressBar() {
    const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressBar.style.width = progressPercentage + '%';
}

function endQuiz() {
    clearInterval(timer); // Ensure the timer stops
    questionContainer.style.display = 'none';
    feedbackElement.textContent = `Quiz Over! You scored ${score} points and reached Level ${level}.`;
    feedbackElement.style.color = 'black';
    didYouKnowElement.style.display = 'none';
    nextQuestionButton.style.display = 'none';
}

function confettiEffect() {
    const confetti = document.createElement('div');
    confetti.innerHTML = '🎉';
    confetti.style.position = 'absolute';
    confetti.style.left = '50%';
    confetti.style.top = '50%';
    confetti.style.transform = 'translate(-50%, -50%)';

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const fontSize = Math.min(viewportWidth, viewportHeight) * 0.3;
    confetti.style.fontSize = `${fontSize}px`;

    confetti.style.animation = 'enlargeFadeOut 2s forwards';
    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 700);
}

function sadEffect() {
    const sad = document.createElement('div');
    sad.innerHTML = '😿';
    sad.style.position = 'absolute';
    sad.style.left = '50%';
    sad.style.top = '50%';
    sad.style.transform = 'translate(-50%, -50%)';

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const fontSize = Math.min(viewportWidth, viewportHeight) * 0.3;
    sad.style.fontSize = `${fontSize}px`;

    sad.style.animation = 'enlargeFadeOut 2s forwards';
    document.body.appendChild(sad);

    setTimeout(() => {
        sad.remove();
    }, 700);
}
