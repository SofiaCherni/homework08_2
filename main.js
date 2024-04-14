const player = document.querySelector('.player');
const playBtn = document.querySelector('.player__btn-play');
const prevBtn = document.querySelector('.player__btn-prev');
const nextBtn = document.querySelector('.player__btn-next');
const audio = document.querySelector('.player__audio');
const progressContainer = document.querySelector('.player__progress_container');
const progress = document.querySelector('.player__progress');
const title = document.querySelector('.player__song');
const picture = document.querySelector('.player__img');
const btnSpecial = document.querySelector('.player__btn-play--special');
const video = document.querySelector('.video-player__container');
const playButton = document.querySelector('.video-player__play-btn');
const playButtonImg = document.querySelector('.video-player__img-btn');

const songs = ['The Way It Is','Automatic Stop','Reptilia','The End Has No End','You Talk Way Too Much'];

let songIndex = 0;

function loadSong(song) {
    title.innerHTML = song;
    audio.src = `audio/${song}.mp3`;
}

loadSong(songs[songIndex]);

function playSong(){
    player.classList.add('.player__btn-play');
    picture.classList.add('active');
    btnSpecial.src = 'images/free-icon-font-pause-3917542.png';
    audio.play();
}

function pauseSong(){
    player.classList.remove('.player__btn-play');
    picture.classList.remove('active');
    btnSpecial.src = 'images/free-icon-font-play-3917517.png';
    audio.pause();
}

playBtn.addEventListener('click', function(){
    const isPlaing = player.classList.contains('.player__btn-play');
    if (isPlaing){
        pauseSong();
    }
    else {
        playSong();
    }
})

function nextSong () {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

nextBtn.addEventListener('click', nextSong);

function prevSong () {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

prevBtn.addEventListener('click', prevSong);

function updateprogress (e) {
const {duration, currentTime} = e.srcElement;
const progressPresent = (currentTime / duration) * 100;
progress.style.width = `${progressPresent}%`;
}

audio.addEventListener('timeupdate', updateprogress);

function setProgress(e){
    const widht = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / widht) * duration;
}

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);

function toggleVideoStatus() {
    if (video.paused) {
        // video.setAttribute("controls", "controls");
        video.play()
    } else {
        video.pause()
    }}
    
playButton.addEventListener('click', toggleVideoStatus);
    
    playButtonImg.addEventListener("click", function() {
        playButtonImg.classList.toggle('active');
})