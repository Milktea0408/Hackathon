
# Coding Adventure Game

## Overview

**Coding Adventure** is an interactive web-based game designed for high school students (Years 7-12) to make learning programming fun and engaging. The game consists of multiple levels, each with a different theme. Players can challenge themselves with coding-related questions and advance through the levels by answering correctly.

## Game Levels

1. **Level 1: Escape Room**
   - In this level, players must find and remove "viruses" roaming in a bin background. Clicking on a virus triggers a multiple-choice question related to programming. Answer correctly to remove the virus. Once all viruses are removed, the level is complete.
   - The viruses hover around the screen, making the challenge more dynamic.

2. **Level 2: Choose Your Adventure**
   - Players choose their coding adventure path (e.g., Front-End or Back-End development) and select their difficulty level. They then answer questions to advance through the levels.

## Features

- **Interactive Gameplay**: Users interact with the game by clicking on moving elements (viruses) and answering questions.
- **Dynamic Levels**: Each level offers a unique experience with different themes and backgrounds.
- **Responsive Design**: The game is designed to be fully responsive and works on all device screen sizes.
- **Animated Elements**: Viruses in the escape room hover around the screen, making the gameplay more engaging.

## Installation

To run the game locally on your machine, follow these steps:

1. **Clone the Repository**:
   \`\`\`bash
   git clone https://github.com/Milktea0408/Hackathon/tree/main
   cd coding-adventure
   \`\`\`

2. **Open the Game in Your Browser**:
   - Simply open the \`index.html\` file in your preferred web browser to start playing the game.

## Files and Structure

- **index.html**: The main landing page of the game where users can select which level they want to play.
- **escaperoom.html**: The page for the Escape Room game level.
- **style.css**: The main stylesheet that defines the look and feel of the game.
- **datastore.js**: Contains the quiz data (questions and answers) used throughout the game.
- **main.js**: Handles the navigation from the main menu to the game levels.
- **escaperoom.js**: Contains the logic for the Escape Room game level.
- **chooseyouradventure.js**: Contains the logic for the Choose Your Adventure game level (to be implemented).
- **images/**: Directory containing images used in the game, such as the background for the escape room.

## How to Play

1. **Start the Game**:
   - Open \`index.html\` in your browser.
   - Choose a game level: Escape Room or Choose Your Adventure.

2. **Escape Room**:
   - Click on moving virus emojis to trigger a programming question.
   - Answer the question correctly to remove the virus.
   - Once all viruses are removed, you complete the level.

3. **Choose Your Adventure**:
   - Select your adventure path and difficulty level.
   - Answer coding questions to advance through the levels.

## Future Enhancements

- **More Levels**: Additional levels with different themes and challenges.
- **Leaderboards**: Track player progress and display high scores.
- **Enhanced Animations**: Add more interactive elements and effects to make the gameplay more engaging.
- **Sound Effects**: Add background music and sound effects for button clicks and other actions.
