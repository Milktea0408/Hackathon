document.getElementById('start-escape-room').addEventListener('click', startEscapeRoom);
document.getElementById('start-choose-your-adventure').addEventListener('click', startChooseYourAdventure);

function startEscapeRoom() {
    document.getElementById('game-content').innerHTML = '<canvas id="escapeRoomCanvas"></canvas>';
    initEscapeRoom();
}

function startChooseYourAdventure() {
    document.getElementById('game-content').innerHTML = '<div id="chooseAdventureContainer"></div>';
    initChooseYourAdventure();
}


// document.getElementById('start-escape-room').addEventListener('click', function() {
//     window.location.href = 'escaperoom.html';
// });

// document.getElementById('start-choose-your-adventure').addEventListener('click', function() {
//     window.location.href = 'chooseyouradventure.html';
// });
