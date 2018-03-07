mapboxgl.accessToken = 'pk.eyJ1IjoiYXB1cm9vcHMiLCJhIjoiY2lnemRhOHhkMHZ5YnZxbTNxOHYybGM0NyJ9.n_qBeCNOUxmR5vPeUPUfXA';

var chapters = {
    'part-1': {
        center: [82.8, 23.88],
        zoom: 3,
        bearing: 0,
        pitch: 0,
    },
    'part-2': {
        center: [72.795,19.043],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-3': {
        center: [77.123767,28.653458],
        zoom: 10,
        bearing: 0,
        pitch: 52,
    },
    'part-4': {
        center: [77.59796,12.96991],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-5': {
        center: [78.46667,17.36667],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-6': {
        center: [72.58,23.03],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-7': {
        center: [80.27,13.09],
        zoom: 11,
        bearing: 0,
        pitch: 0,
    },
    'part-8': {
        center: [88.33778,22.54111],
        zoom: 11,
        bearing: 0,
        pitch: 30,
    },
    'part-9': {
        center: [72.83,21.17],
        zoom: 11.1,
        bearing: 0,
        pitch: 52,
    },
    'part-10': {
        center: [73.84778,18.52361],
        zoom: 10,
        bearing: 0,
        pitch: 0,
    },
    'part-11': {
        center: [75.769,26.928],
        zoom: 10.5,
        bearing: 0,
        pitch: 0,
    },
    'part-12': {
        center: [82.8, 23.88],
        zoom: 3,
        bearing: 0,
        pitch: 0,
    }
};

var map;

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/apuroops/cjefaklplok3x2sjot4cgizqy',
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
}

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'part-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}