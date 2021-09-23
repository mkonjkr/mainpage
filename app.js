
import {App} from './bg.js';

const COLOR = ['#81ecec', '#ff7675', '#a29bfe', '#ffeaa7']
const list = document.querySelectorAll('.main_menu');
const shadow_txt = [];
const app = new App();

const init = () => {
    updateBG();
    
}

const background = (idx) => {

    list[idx].onmouseover = () => {
        document.body.style.background = COLOR[idx];
        
        shadow_txt[idx] = list[idx].innerText;
        app.draw(shadow_txt[idx]);
        
    };

    list[idx].onmouseout = () => {
        document.body.style.background = "#fff";
        app.resize();
    };
}

const updateBG = () => {
    for(var i = 0; i < list.length; i++) {
        background(i);
        
    }
}

init();

/* class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
        window.requestAnimationFrame(this.animate.bind(this));
    }
    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeigt = document.body.clientHeight;
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeigt * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
    }
    animate() {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeigt);
        this.fillstyle="#555";
        this.ctx.fillRect(100, 100, 100,100);
    }
}
    new App();
 */


/* const onDown = (e) => {
    console.log(e.target);
    background();
}
function background() {
    document.body.style.background = COLOR;
    console.log("k");
  
}*/
/* 
for( let i = 0; i < list.length; i ++) {
    list[i].addEventListener("mousedown", onDown);
};  */