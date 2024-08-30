function initChooseYourAdventure() {
    const container = document.getElementById('chooseAdventureContainer');
    container.innerHTML = `
        <h2>Choose Your Path</h2>
        <button id="choose-front-end" class="button">Front-end</button>
        <button id="choose-back-end" class="button">Back-end</button>
    `;

    document.getElementById('choose-front-end').addEventListener('click', () => choosePath('front-end'));
    document.getElementById('choose-back-end').addEventListener('click', () => choosePath('back-end'));
}

function choosePath(path) {
    const container = document.getElementById('chooseAdventureContainer');
    container.innerHTML = `
        <h2>You've chosen ${path}. Select difficulty:</h2>
        <button id="easy" class="button">Easy</button>
        <button id="medium" class="button">Medium</button>
        <button id="hard" class="button">Hard</button>
    `;

    document.getElementById('easy').addEventListener('click', () => startQuiz('easy'));
    document.getElementById('medium').addEventListener('click', () => startQuiz('medium'));
    document.getElementById('hard').addEventListener('click', () => startQuiz('hard'));
}

function startQuiz(difficulty) {
    const container = document.getElementById('chooseAdventureContainer');
    container.innerHTML = '<div id="quizContainer"></div>';
    const quiz = getQuestionsByDifficulty(difficulty);
    runQuiz(quiz);
}

function getQuestionsByDifficulty(difficulty) {
    return scenarios.filter(q => q.difficulty === difficulty);
}

function runQuiz(quiz) {
    let currentQuestion = 0;
    displayQuestion();

    function displayQuestion() {
        const question = quiz[currentQuestion];
        const container = document.getElementById('quizContainer');
        container.innerHTML = `
            <h3>${question.question}</h3>
            <div id="quizOptions"></div>
        `;

        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'button';
            btn.textContent = option;
            btn.addEventListener('click', () => checkAnswer(index));
            document.getElementById('quizOptions').appendChild(btn);
        });
    }

    function checkAnswer(selectedIndex) {
        const question = quiz[currentQuestion];
        if (selectedIndex === question.correct) {
            confettiEffect();
            alert('Correct!');
            currentQuestion++;
            if (currentQuestion < quiz.length) {
                displayQuestion();
            } else {
                alert('Congratulations! You have completed this level.');
                confettiEffect(); // Trigger confetti effect upon completing the quiz
            }
        } else {
            sadEffect(); // Trigger sad effect on incorrect answer
            alert('Incorrect. Try again.');
        }
    }
}

function goHome() {
    window.location.href = 'index.html';
}

window.onload = function() {
    initChooseYourAdventure();
};

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
    }, 2000);
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
    }, 2000);
}
