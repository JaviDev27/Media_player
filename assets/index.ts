import MediaPlayer from "./mediaPlayer";
import AutoPlay from "../plugins/AutoPlay";
import AutoPause from "../plugins/AutoPause";

const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("#btnPlay");
const buttonMute: HTMLElement = document.querySelector("#btnMute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

//verifica si existe sevicios
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../sw.js").catch((error) => {
    console.log(error.message);
  });
}
