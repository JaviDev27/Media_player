import MediaPlayer from "../mediaPlayer";

class AutoPause {
    private threshold: number;
    player: MediaPlayer /* Aqui vas a la clase y type script
    lo convierte a clase */

    constructor() {
      this.threshold = 0.25;
      this.handlerIntersection = this.handlerIntersection.bind(this);
    }
  
    run(player) {
      this.player = player;
      const observer = new IntersectionObserver(this.handlerIntersection, {
        threshold: this.threshold, //umbral de interseccion
      });
  
      observer.observe(this.player.media); //asignas al elemento que vas a observar
    }
    //entries son todos los objetos que observamos
    private handlerIntersection(entries:IntersectionObserverEntry[]) {
      const entry = entries[0];
  
      const isVisible = entry.intersectionRatio >= this.threshold;
      if (isVisible) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }
  }
  
  export default AutoPause;
  