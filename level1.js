function initLevel1() {
    const canvas = document.getElementById('escapeRoomCanvas');
    const ctx = canvas.getContext('2d');

    // Example: set canvas background to the bin image
    const background = new Image();
    background.src = 'bin_background.jpg'; // Replace with the actual image path

    background.onload = function() {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        spawnViruses(ctx);
    };

    function spawnViruses(ctx) {
        // Define positions for viruses
        const virusPositions = [
            {x: 50, y: 100},
            {x: 200, y: 150},
            {x: 350, y: 250},
        ];

        virusPositions.forEach(pos => {
            const virus = new Image();
            virus.src = 'virus.png'; // Replace with the actual virus image path

            virus.onload = function() {
                ctx.drawImage(virus, pos.x, pos.y, 50, 50);
            };

            canvas.addEventListener('click', (event) => {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;

                // Check if clicked within the virus image bounds
                if (x > pos.x && x < pos.x + 50 && y > pos.y && y < pos.y + 50) {
                    askQuestion(ctx, pos);
                }
            });
        });
    }

    function askQuestion(ctx, pos) {
        const question = quizData[currentQuestionIndex];
        const userAnswer = prompt(question.question); // Simple prompt for demo

        if (userAnswer.toLowerCase() === question.options[question.correct].toLowerCase()) {
            alert('Correct! Virus removed.');
            ctx.clearRect(pos.x, pos.y, 50, 50); // Remove virus
            currentQuestionIndex++;
        } else {
            alert('Incorrect. Try again!');
        }

        if (currentQuestionIndex >= quizData.length) {
            alert('All viruses cleared! Level 1 complete.');
            // Proceed to next level or show completion message
        }
    }
}
