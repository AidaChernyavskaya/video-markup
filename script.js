
let data = [];
let current = 0;

const level_map = {
    1: 'mood-columns__piece_level-1',
    2: 'mood-columns__piece_level-2',
    3: 'mood-columns__piece_level-3',
    4: 'mood-columns__piece_level-3',
}

const color_map = {
    0: 'mood-columns__piece_happiness',
    1: 'mood-columns__piece_sadness',
    2: 'mood-columns__piece_fear',
    3: 'mood-columns__piece_anger',
    4: 'mood-columns__piece_disgust',
    5: 'mood-columns__piece_astonishment',
}

const labelTop_map = {
    1: '.9rem',
    2: '-1.2rem',
    3: '-3.1rem',
    4: '-3.1rem',
}

const labelText_map = {
    0: '&#128516; радость',
    1: '&#128532; грусть',
    2: '&#128556; страх',
    3: '&#128545; гнев',
    4: '&#129314; отвращение',
    5: '&#128562; удивление',
}

//основные функции
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

// Вспомогательные функции
function loadData(){
    return [{"start": 0, "finish": 300, "emotions": [{"start": 0.0, "finish": 300, "number": 0, "value": 0}]}, {"start": 300, "finish": 600, "emotions": [{"start": 300, "finish": 600, "number": 0, "value": 0}]}, {"start": 600, "finish": 900, "emotions": [{"start": 600, "finish": 900, "number": 0, "value": 0}]}, {"start": 900, "finish": 1200, "emotions": [{"start": 900, "finish": 1200, "number": 0, "value": 0}]}, {"start": 1200, "finish": 1500, "emotions": [{"start": 1200, "finish": 1500, "number": 0, "value": 0}]}, {"start": 1500, "finish": 1800, "emotions": [{"start": 1500, "finish": 1800, "number": 0, "value": 0}]}, {"start": 1800, "finish": 2100, "emotions": [{"start": 1800, "finish": 2100, "number": 0, "value": 0}]}, {"start": 2100, "finish": 2400, "emotions": [{"start": 2100, "finish": 2400, "number": 0, "value": 0}]}, {"start": 2400, "finish": 2700, "emotions": [{"start": 2400, "finish": 2700, "number": 0, "value": 0}]}, {"start": 2700, "finish": 3000, "emotions": [{"start": 2700, "finish": 3000, "number": 0, "value": 0}]}, {"start": 3000, "finish": 3300, "emotions": [{"start": 3000, "finish": 3025.787424000009, "number": 0, "value": 0}, {"start": 3025.787424000009, "finish": 3086.400382000007, "number": 2, "value": 1}, {"start": 3086.400382000007, "finish": 3096.7531320000126, "number": 0, "value": 0}, {"start": 3096.7531320000126, "finish": 3098.8389050000114, "number": 3, "value": 1}, {"start": 3098.8389050000114, "finish": 3300, "number": 0, "value": 0}]}, {"start": 3300, "finish": 3600, "emotions": [{"start": 3300, "finish": 3600, "number": 0, "value": 0}]}, {"start": 3600, "finish": 3900, "emotions": [{"start": 3600, "finish": 3691.849957000013, "number": 0, "value": 0}, {"start": 3691.849957000013, "finish": 3730.1568000000116, "number": 1, "value": 1}, {"start": 3730.1568000000116, "finish": 3756.0537230000045, "number": 1, "value": 2}, {"start": 3756.0537230000045, "finish": 3803.8847830000013, "number": 0, "value": 0}, {"start": 3803.8847830000013, "finish": 3889.193523000009, "number": 4, "value": 1}, {"start": 3889.193523000009, "finish": 3900, "number": 4, "value": 2}]}, {"start": 3900, "finish": 4200, "emotions": [{"start": 3900, "finish": 3909.28669600001, "number": 4, "value": 2}, {"start": 3909.28669600001, "finish": 3928.523266000004, "number": 0, "value": 0}, {"start": 3928.523266000004, "finish": 3938.4630050000123, "number": 3, "value": 1}, {"start": 3938.4630050000123, "finish": 3949.8638590000046, "number": 3, "value": 2}, {"start": 3949.8638590000046, "finish": 3955.2460700000083, "number": 3, "value": 3}, {"start": 3955.2460700000083, "finish": 4029.212154000008, "number": 0, "value": 0}, {"start": 4029.212154000008, "finish": 4072.2245580000017, "number": 1, "value": 1}, {"start": 4072.2245580000017, "finish": 4082.1332690000127, "number": 1, "value": 4}, {"start": 4082.1332690000127, "finish": 4154.624860000011, "number": 0, "value": 0}, {"start": 4154.624860000011, "finish": 4200, "number": 2, "value": 1}]}, {"start": 4200, "finish": 4500, "emotions": [{"start": 4200, "finish": 4205.92813, "number": 2, "value": 1}, {"start": 4205.92813, "finish": 4236.311518000002, "number": 2, "value": 2}, {"start": 4236.311518000002, "finish": 4310.637317000001, "number": 0, "value": 0}, {"start": 4310.637317000001, "finish": 4325.310451000012, "number": 5, "value": 1}, {"start": 4325.310451000012, "finish": 4331.519097000011, "number": 5, "value": 2}, {"start": 4331.519097000011, "finish": 4422.806344000011, "number": 0, "value": 0}, {"start": 4422.806344000011, "finish": 4433.550840000011, "number": 6, "value": 1}, {"start": 4433.550840000011, "finish": 4450.342967000004, "number": 6, "value": 2}, {"start": 4450.342967000004, "finish": 4463.181150000004, "number": 6, "value": 3}, {"start": 4463.181150000004, "finish": 4500, "number": 0, "value": 0}]}, {"start": 4500, "finish": 4800, "emotions": [{"start": 4500, "finish": 4800, "number": 0, "value": 0}]}, {"start": 4800, "finish": 5100, "emotions": [{"start": 4800, "finish": 5100, "number": 0, "value": 0}]}, {"start": 5100, "finish": 5400, "emotions": [{"start": 5100, "finish": 5117.517813000013, "number": 0, "value": 0}]}]
}

function drawDataSection(dataObject){
    console.log("draw data:", dataObject);
    drawBorderlineTime(dataObject.start, dataObject.finish);
    drawMoodColumns(dataObject);
}

function drawBorderlineTime(start, finish){
    document.getElementById('time-line_start').innerHTML = secondsToStr(start);
    document.getElementById('time-line_finish').innerHTML = secondsToStr(finish);
}

function drawMoodColumns(interval){
    let moodColumns = document.getElementById('mood-columns');
    interval.emotions.forEach(emotion => {
        if (emotion.value !== 0){
            let moodContainer = document.createElement("div");
            moodContainer.classList.add('mood-columns__container');

            createMoodColumn(moodContainer, emotion, interval.start);
            createLabel(moodContainer, emotion, interval.start);
            createTimePointer(moodContainer, emotion, interval.start);

            moodColumns.appendChild(moodContainer);
        }
    })
}

function createMoodColumn(moodContainer, emotion, intervalStart){
    let column = document.createElement("div");
    column.classList.add('mood-columns__piece');
    let width = (emotion.finish - emotion.start) * 100 / 300;
    column.style.width = `${width}%`;

    let left = (emotion.start - intervalStart) * 100 / 300;
    column.style.left = `${left}%`;

    column.classList.add(level_map[emotion.value]);
    column.classList.add(color_map[emotion.number]);

    moodContainer.appendChild(column);
}

function createLabel(moodContainer, emotion, intervalStart){
    let label = document.createElement("div");
    label.classList.add('label');
    let left = ((emotion.start - intervalStart) * 100 / 300) + ((emotion.finish - emotion.start) * 100 / 300);
    label.style.left = `${left}%`;
    label.style.top = labelTop_map[emotion.value];

    let labelText = document.createElement('p');
    labelText.classList.add('label__text');
    labelText.innerHTML = labelText_map[emotion.number];
    label.appendChild(labelText);
    moodContainer.appendChild(label);
}

function createTimePointer(moodContainer, emotion, intervalStart){
    let left = (emotion.start - intervalStart) * 100 / 300;
    let width = (emotion.finish - emotion.start) * 100 / 300;
    if(left !==0 && left !== 100){
        let timePointer = document.createElement('div');
        timePointer.classList.add('time-pointer');
        timePointer.style.left = `${left}%`;

        let timeValue = document.createElement('p');
        timeValue.classList.add('time-pointer__time-value');
        if (left > 90){
            timeValue.style.transform = 'translateX(-100%)';
        }
        timeValue.innerHTML = secondsToStr(emotion.start);
        timePointer.appendChild(timeValue);

        moodContainer.appendChild(timePointer);
    }

    if (width > 15 && (left + width !== 100) || left === 0){
        let timePointerEnd = document.createElement('div');
        timePointerEnd.classList.add('time-pointer');
        timePointerEnd.style.left = `${left + width}%`;

        let timeValueEnd = document.createElement('p');
        timeValueEnd.classList.add('time-pointer__time-value');
        if (left !== 0){
            timeValueEnd.style.transform = 'translateX(-100%)';
        }
        timeValueEnd.innerHTML = secondsToStr(emotion.finish);
        timePointerEnd.appendChild(timeValueEnd);

        moodContainer.appendChild(timePointerEnd);
    }
}

function clearMoodColumns(){
    document.getElementById('mood-columns').innerHTML='';
}

function secondsToStr(seconds){
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 3600 % 60);
    return `${FormatNumberLength(h, 2)}:${FormatNumberLength(m, 2)}:${FormatNumberLength(s, 2)}`;
}

function FormatNumberLength(num, length) {
    let r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}

function updateButtonState(){
    let arrowLeft = document.getElementById('arrow_left_additional');
    let arrowRight = document.getElementById('arrow_right_additional');
    if(data[current].start === 0){
        arrowLeft.classList.add('arrow__empty');
        document.getElementById('arrow_left').style.pointerEvents = 'none';
    }else if (data[data.length - 1].finish === data[current].finish){
        arrowRight.classList.add('arrow__empty');
        document.getElementById('arrow_right').style.pointerEvents = 'none';
    } else{
        arrowLeft.classList.remove('arrow__empty');
        arrowRight.classList.remove('arrow__empty');
        document.getElementById('arrow_left').style.pointerEvents = 'auto';
        document.getElementById('arrow_right').style.pointerEvents = 'auto';
    }
}

function showLegend(){
    document.getElementById('icon-minus').classList.toggle('icon__expand');
    document.getElementById('icon-minus').classList.toggle('icon__collapse');
    document.getElementById('icon-plus').classList.toggle('icon__expand');
    document.getElementById('icon-plus').classList.toggle('icon__collapse');
    document.getElementById('legend').classList.toggle('row-2_none');
}

function init_events_handlers(){
    document.getElementById('arrow_right').onclick = toRight;
    document.getElementById('arrow_left').onclick = toLeft;
    document.getElementById('iconLegend').onclick = showLegend;

    let video = document.getElementById('video-player');
    video.addEventListener('timeupdate', function () {
        timeUpdateListener(Math.round(video.currentTime));
    })

}

document.addEventListener("DOMContentLoaded", html_ready);

function drawProgressBar(second){
    let progressBar = document.querySelector('.progress-bar');
    let progressBarPassed = document.querySelector('.progress-bar__passed');
    let progressBarCursor = document.querySelector('.progress-bar__cursor');

    clearProgressBar();
    progressBarPassed.style.width = (second * 100) / 300 + '%';
    progressBarCursor.style.display = 'block';
    progressBarCursor.style.left = (second * 100) / 300 + '%';

}

function clearProgressBar(){
    // let progressBar = document.querySelector('.progress-bar');
    let progressBarPassed = document.querySelector('.progress-bar__passed');
    let progressBarCursor = document.querySelector('.progress-bar__cursor');

    progressBarPassed.style.width = '0';
    progressBarCursor.style.display = 'none';
}


function timeUpdateListener(currentSecond){
    let period = calculatePeriod(currentSecond);
    let progressBarPassed = document.querySelector('.progress-bar__passed');
    let progressBarCursor = document.querySelector('.progress-bar__cursor');
    let second_of_period = calculateSecondOfPeriod(currentSecond, period);

    if (period === current){
        drawProgressBar(second_of_period);
    } else if (period > current) {
        progressBarPassed.style.width = '100%';
        progressBarCursor.style.display = 'none';
    } else if (period < current) {
        progressBarPassed.style.width = '0%';
        progressBarCursor.style.display = 'none';
    }

}

function calculatePeriod(currentSecond){
    return Math.floor(currentSecond / 300);
}

function calculateSecondOfPeriod(currentSecond, period){
    return currentSecond - (300 * period);
}