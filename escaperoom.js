function initEscapeRoom() {
    const canvas = document.getElementById('escapeRoomCanvas');
    const ctx = canvas.getContext('2d');
    let activeModal = null;
    let viruses = [];

    // Play background music
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();

    const background = new Image();
    background.src = 'images/bin_background.jpg';

    background.onload = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        spawnViruses(ctx);
        moveViruses();
    };

    function spawnViruses(ctx) {
        const virusPositions = [
            {x: 100, y: 200, dx: 2, dy: 2},
            {x: 400, y: 300, dx: -2, dy: 2},
            {x: 700, y: 400, dx: 2, dy: -2},
        ];

        virusPositions.forEach(pos => {
            viruses.push(pos);
            drawVirus(ctx, pos.x, pos.y);
        });

        canvas.addEventListener('click', (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            viruses.forEach((virusPos, index) => {
                if (x > virusPos.x && x < virusPos.x + 50 && y > virusPos.y && y < virusPos.y + 50) {
                    if (!activeModal) {
                        askQuestion(ctx, virusPos, index);
                    }
                }
            });
        });
    }

    function drawVirus(ctx, x, y) {
        ctx.font = '48px sans-serif';
        ctx.textBaseline = 'top';
        ctx.fillText('👾', x, y);
    }

    function moveViruses() {
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            viruses.forEach((virus, index) => {
                virus.x += virus.dx;
                virus.y += virus.dy;

                if (virus.x <= 0 || virus.x >= canvas.width - 50) virus.dx *= -1;
                if (virus.y <= 0 || virus.y >= canvas.height - 50) virus.dy *= -1;

                drawVirus(ctx, virus.x, virus.y);
            });
        }, 30);
    }

    function askQuestion(ctx, pos, virusIndex) {
        const randomIndex = Math.floor(Math.random() * quizData.length);
        const question = quizData[randomIndex];

        const modal = document.createElement('div');
        modal.classList.add('modal');

        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        modal.appendChild(questionText);

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(ctx, pos, index, modal, randomIndex, virusIndex));
            modal.appendChild(button);
        });

        document.body.appendChild(modal);
        activeModal = modal;
    }

    function checkAnswer(ctx, pos, selectedOptionIndex, modal, questionIndex, virusIndex) {
        const question = quizData[questionIndex];
        if (selectedOptionIndex === question.correct) {
            ctx.clearRect(pos.x, pos.y, 50, 50);
            document.body.removeChild(modal);
            activeModal = null;
            viruses.splice(virusIndex, 1);
            alert('Correct! Virus removed.');

            if (viruses.length === 0) {
                alert('All viruses cleared! Level 1 complete.');
                closeCanvasAndReturnHome();
            }
        } else {
            document.body.removeChild(modal);
            activeModal = null;
            alert('Incorrect. Try another question!');
            askQuestion(ctx, pos, virusIndex);
        }
    }

    function closeCanvasAndReturnHome() {
        canvas.style.display = 'none';

        setTimeout(() => {
            goHome();
        }, 2000);
    }
}

function goHome() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    window.location.href = 'index.html';
}

window.onload = function() {
    initEscapeRoom();

    // Volume control
    const volumeControl = document.getElementById('volume');
    const backgroundMusic = document.getElementById('backgroundMusic');

    volumeControl.addEventListener('input', function() {
        backgroundMusic.volume = this.value;
    });
};
