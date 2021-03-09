import MediaPlayer from "./mediaPlayer.js";

import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("button");
const buttonMute = document.querySelector("button");

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

button.onclick = () => player.play();
buttonMute.onclick = () => player.toogleMute();
