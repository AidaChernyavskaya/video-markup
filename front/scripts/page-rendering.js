
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

function drawProgressBar(second){
    // let progressBar = document.querySelector('.progress-bar');
    let progressBarPassed = document.querySelector('.progress-bar__passed');
    let progressBarCursor = document.querySelector('.progress-bar__cursor');

    clearProgressBar();
    progressBarPassed.style.width = (second * 100) / 300 + '%';
    progressBarCursor.style.display = 'block';
    progressBarCursor.style.left = (second * 100) / 300 + '%';

}

function showLegend(){
    document.getElementById('icon-minus').classList.toggle('icon__expand');
    document.getElementById('icon-minus').classList.toggle('icon__collapse');
    document.getElementById('icon-plus').classList.toggle('icon__expand');
    document.getElementById('icon-plus').classList.toggle('icon__collapse');
    document.getElementById('legend').classList.toggle('row-2_none');
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