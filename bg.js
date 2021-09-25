export class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);

    this.resize();

  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeigt = document.body.clientHeight;
    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeigt * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);
    this.ctx.clearRect(0, 0, 1000, 1000);
  }

  draw(text) {
    this.ctx.fillStyle = "#333";
    this.ctx.globalAlpha = 0.2;
    this.ctx.font = "500px Poppins";
    this.ctx.fillText(text, this.stageWidth / 4, this.stageHeigt /1.4, this.stageWidth / 2);
    
    console.log(text);
  }
}