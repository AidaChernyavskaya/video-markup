
function html_ready() {
    data = loadData();
    drawDataSection(data[current]);
    updateButtonState();

    init_events_handlers();
}

function toRight(){
    current += 1;
    clearMoodColumns();
    drawDataSection(data[current]);
    updateButtonState();

    let video = document.getElementById('video-player');
    timeUpdateListener(Math.round(video.currentTime));

    console.log("check right");
}

function toLeft(){
    current -= 1;
    clearMoodColumns();
    drawDataSection(data[current]);
    updateButtonState();

    let video = document.getElementById('video-player');
    timeUpdateListener(Math.round(video.currentTime));

    console.log("check left");
}

document.addEventListener("DOMContentLoaded", html_ready);
