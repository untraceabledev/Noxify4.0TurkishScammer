let player = null;
let currentVideo = null;
let paused = false;
let timeTick = null;

window.onmessage = (event) => {
    if (!event.data || event.data.resource !== "np-cinema") return;

    const { type, data } = event.data;

    switch (type) {
        case "set-video":
            return setVideo(data);
        case "set-time":
            return setTime(data);
        case "set-volume":
            return setVolume(data);
        case "get-time":
            return getTime();
        case "set-paused":
            return setPause(data);
    }
}

function setVideo(data) {
    const url = data.url;
    if (!url) return;

    if (timeTick) {
        clearInterval(timeTick);
    }

    timeTick = setInterval(() => {
        getTime();
        checkForEnd();
    }, 1000);

    currentVideo = url;
    if (player) {
        return player.loadVideoById(url);
    }
    if (typeof YT === 'undefined') {
        return setTimeout(() => setVideo(data), 500);
    }
    player = new YT.Player('player', {
        height: '100vh',
        width: '100vw',
        videoId: url,
        events: {
            'onReady': onPlayerReady,
            'onError': onError,
        },
        playerVars: {
            controls: 0,
            origin: window.location.href
        }
    });
}

function onError(event) {
    if (event.data === 150 || event.data === 101) {
        sendNuiEvent('end', {
            currentVideo
        });
    }
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function setPause(data) {
    if (!player || typeof player.pauseVideo !== 'function') {
        return setTimeout(() => setPause(data), 500);
    }
    if (data.paused) {
        player.pauseVideo();
        paused = true;
    } else {
        player.playVideo();
        paused = false;
    }

    sendNuiEvent('pause', { paused });
}

function setVolume(data) {
    if (!player || typeof player.setVolume !== 'function') {
        return setTimeout(() => setVolume(data), 500);
    }
    player.setVolume(data.volume);
}

function setTime(data) {
    if (!player || typeof player.seekTo !== 'function') {
        return setTimeout(() => setTime(data), 500);
    }
    player.seekTo(data.time, true);
}

function getTime() {
    if (!player) return;
    const time = player.getCurrentTime()

    sendNuiEvent('time', {
        time,
        percentage: (time / player.getDuration()) * 100,
    });
}

function checkForEnd() {
    if (player.getPlayerState() === 0) {
        sendNuiEvent('end', {
            currentVideo
        });
    }
}

async function sendNuiEvent(action, data) {
    await fetch(`https://np-cinema/${action}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(data),
    });
}