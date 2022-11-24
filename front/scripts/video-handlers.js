
function timeUpdateListener(currentSecond){
    let period = calculatePeriod(currentSecond);
    let progressBarPassed = document.querySelector('.progress-bar__passed');
    let progressBarCursor = document.querySelector('.progress-bar__cursor');
    let second_of_period = calculateSecondOfPeriod(currentSecond, period);

    if (period === current){
        drawProgressBar(second_of_period);
        activeCurrent = current;
    } else if (period > current) {
        progressBarPassed.style.width = '100%';
        progressBarCursor.style.display = 'none';
        if (current === activeCurrent && flag){
            toRight();
        }
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

function updateFlagState(){
    flag = !flag;
    return flag;
}