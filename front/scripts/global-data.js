
let data = [];
let current = 0;
let activeCurrent = 0;
let flag = true;

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