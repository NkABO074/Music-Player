const MUSIC = document.querySelector("audio");
const PREV_BTN = document.getElementById("prev");
const PLAY_BTN = document.getElementById("play");
const NEXT_BTN = document.getElementById("next");
const TITLE = document.getElementById("title");
const ARTIST = document.getElementById("artist");
const IMAGE = document.querySelector("img");

// Our Tracs
const SONGS = [
  {
    name: "music-1",
    display_name: "Electric chill Machine",
    artist: "John Doe",
  },
  {
    name: "music-2",
    display_name: "Chill Dude",
    artist: "John Doe",
  },
  {
    name: "music-3",
    display_name: "Dawg",
    artist: "John Doe",
  },
  {
    name: "music-4",
    display_name: "I am HIM",
    artist: "John Doe",
  },
];

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

/**
 * Update the DOM
 * @param {{name: string;display_name: string;artist: string;}[]} song object holding the sound infos
 * */
function loadSong(song) {
  TITLE.textContent = song.display_name;
  ARTIST.textContent = song.artist;
  MUSIC.src = `./assets/music/${song.name}.mp3`;
  IMAGE.src = `./assets/img/${song.name}.jpg`;
}

// Current song
let song_index = 0;

/**
 * Previous song
 */
function prevSong() {
  song_index--;
  if (song_index < 0) {
    song_index = SONGS.length - 1;
  }
  loadSong(SONGS[song_index]);
  playSong();
}

/**
 * Next song
 */
function nextSong() {
  song_index++;
  if (song_index >= SONGS.length - 1) {
    song_index = 0;
  }
  loadSong(SONGS[song_index]);
  playSong();
}

// On load select first song
loadSong(SONGS[song_index]);

// Envent listeners
PREV_BTN.addEventListener("click", prevSong);
NEXT_BTN.addEventListener("click", nextSong);
