
function gotRecordCallback(response) {
    console.log(response);
    data = response.periods;
    drawDataSection(data[current]);
    updateButtonState();

    document.getElementById("video-player").src = response.video;
}

function getRecordId(){
    console.log(document.location.href.split('/')[4]);
    return document.location.href.split('/')[4];
}

function html_ready() {
    init_events_handlers();
    getRecordById(getRecordId(), gotRecordCallback);
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
