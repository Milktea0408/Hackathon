document.getElementById('start-level1').addEventListener('click', startLevel1);
document.getElementById('start-level2').addEventListener('click', startLevel2);

function startLevel1() {
    // Load level 1 specific scripts and styles
    document.getElementById('game-content').innerHTML = '<canvas id="escapeRoomCanvas"></canvas>';
    initLevel1();
}

function startLevel2() {
    // Load level 2 specific scripts and styles
    document.getElementById('game-content').innerHTML = '<div id="chooseAdventureContainer"></div>';
    initLevel2();
}
