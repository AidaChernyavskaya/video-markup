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