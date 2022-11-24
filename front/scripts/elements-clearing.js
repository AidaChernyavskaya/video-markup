function clearMoodColumns(){
    document.getElementById('mood-columns').innerHTML='';
}

function clearProgressBar(){
    // let progressBar = document.querySelector('.progress-bar');
    let progressBarPassed = document.querySelector('.progress-bar__passed');
    let progressBarCursor = document.querySelector('.progress-bar__cursor');

    progressBarPassed.style.width = '0';
    progressBarCursor.style.display = 'none';
}