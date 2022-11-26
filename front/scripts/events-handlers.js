function init_events_handlers(){
    document.getElementById('arrow_right').onclick = toRight;
    document.getElementById('arrow_left').onclick = toLeft;
    document.getElementById('iconLegend').onclick = showLegend;

    let video = document.getElementById('video-player');
    video.addEventListener('timeupdate', function () {
        timeUpdateListener(Math.round(video.currentTime));
    });

    let checkBox = document.getElementById('flipping');
    checkBox.addEventListener('change', function (){
        updateFlagState();
        console.log(flag)
    })
}

function init_events_handlers_main_page(){
    document.getElementById('btnAdd').onclick = showFormSection;
}