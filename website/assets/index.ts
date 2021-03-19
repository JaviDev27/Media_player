import MediaPlayer from "@javidev27/mediaplayerplatzi/lib/mediaPlayer";
import AutoPlay from "@javidev27/mediaplayerplatzi/lib/plugins/AutoPlay";
import AutoPause from "@javidev27/mediaplayerplatzi/lib/plugins/AutoPause";
import Ads  from "@javidev27/mediaplayerplatzi/lib/plugins/ads";

const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("#btnPlay");
const buttonMute: HTMLElement = document.querySelector("#btnMute");

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

//verifica si existe sevicios
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("../sw.js").catch((error) => {
    console.log(error.message);
  });
}
