const MUSIC = document.querySelector("audio");
const PREV_BTN = document.getElementById("prev");
const PLAY_BTN = document.getElementById("play");
const NEXT_BTN = document.getElementById("next");

// Check if playing
let is_playing = false;

/**
 * play a song
 */
function playSong() {
  is_playing = true;
  PLAY_BTN.classList.replace("fa-play", "fa-pause");
  PLAY_BTN.setAttribute("title", "Pause");
  MUSIC.play();
}

/**
 * pause a song
 */
function pauseSong() {
  is_playing = false;
  PLAY_BTN.classList.replace("fa-pause", "fa-play");
  PLAY_BTN.setAttribute("title", "Play");
  MUSIC.pause();
}

// Play or pause eventListener
PLAY_BTN.addEventListener("click", () =>
  is_playing ? pauseSong() : playSong()
);
