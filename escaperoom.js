function initEscapeRoom() {
    const canvas = document.getElementById('escapeRoomCanvas');
    const ctx = canvas.getContext('2d');
    let activeModal = null; // Track the active modal to prevent multiple modals
    let viruses = [];

    // Set canvas background to the bin image
    const background = new Image();
    background.src = 'images/bin_background.jpg';

    background.onload = function() {
        canvas.width = window.innerWidth; // Make canvas fill the window
        canvas.height = window.innerHeight; // Make canvas fill the window
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        spawnViruses(ctx);
        moveViruses(); // Start moving the viruses
    };

    function spawnViruses(ctx) {
        // Define positions for viruses
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

            // Check if clicked within the virus emoji bounds
            viruses.forEach((virusPos, index) => {
                if (x > virusPos.x && x < virusPos.x + 50 && y > virusPos.y && y < virusPos.y + 50) {
                    if (!activeModal) { // Ensure only one question at a time
                        askQuestion(ctx, virusPos, index);
                    }
                }
            });
        });
    }

    function drawVirus(ctx, x, y) {
        ctx.font = '48px sans-serif';
        ctx.textBaseline = 'top'; // Align the emoji to the top
        ctx.fillText('👾', x, y);
    }

    function moveViruses() {
        setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

            viruses.forEach((virus, index) => {
                virus.x += virus.dx;
                virus.y += virus.dy;

                // Bounce off the walls
                if (virus.x <= 0 || virus.x >= canvas.width - 50) virus.dx *= -1;
                if (virus.y <= 0 || virus.y >= canvas.height - 50) virus.dy *= -1;

                drawVirus(ctx, virus.x, virus.y);
            });
        }, 30);
    }

    function askQuestion(ctx, pos, virusIndex) {
        // Randomly select a question from the quizData
        const randomIndex = Math.floor(Math.random() * quizData.length);
        const question = quizData[randomIndex];

        // Create a modal for the question
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const questionText = document.createElement('p');
        questionText.textContent = question.question;
        modal.appendChild(questionText);

        // Create buttons for each option
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => checkAnswer(ctx, pos, index, modal, randomIndex, virusIndex));
            modal.appendChild(button);
        });

        document.body.appendChild(modal);
        activeModal = modal; // Track the active modal
    }

    function checkAnswer(ctx, pos, selectedOptionIndex, modal, questionIndex, virusIndex) {
        const question = quizData[questionIndex];
        if (selectedOptionIndex === question.correct) {
            ctx.clearRect(pos.x, pos.y, 50, 50); // Clear the virus from the canvas
            document.body.removeChild(modal); // Close the modal
            activeModal = null; // Reset active modal
            viruses.splice(virusIndex, 1); // Remove the virus from the array
            alert('Correct! Virus removed.');

            if (viruses.length === 0) {
                alert('All viruses cleared! Level 1 complete.');
                closeCanvasAndReturnHome(); // Close the canvas and return home
            }
        } else {
            document.body.removeChild(modal); // Close the modal
            activeModal = null; // Reset active modal
            alert('Incorrect. Try another question!');
            askQuestion(ctx, pos, virusIndex); // Ask a different question
        }
    }

    function closeCanvasAndReturnHome() {
        // Hide the canvas
        canvas.style.display = 'none';

        // Redirect to home after a short delay
        setTimeout(() => {
            goHome();
        }, 2000); // Adjust the delay as needed
    }
}

function goHome() {
    window.location.href = 'index.html';
}

window.onload = function() {
    initEscapeRoom();
};
