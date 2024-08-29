function initLevel2() {
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
    // Adjust questions based on difficulty
    const quiz = getQuestionsByDifficulty(difficulty);
    runQuiz(quiz);
}

function getQuestionsByDifficulty(difficulty) {
    // Filter or select questions based on difficulty
    return quizData.filter(q => q.difficulty === difficulty);
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
            alert('Correct!');
            currentQuestion++;
            if (currentQuestion < quiz.length) {
                displayQuestion();
            } else {
                alert('Congratulations! You have completed this level.');
            }
        } else {
            alert('Incorrect. Try again.');
        }
    }
}
