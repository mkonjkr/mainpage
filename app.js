import {App} from './bg.js';

const COLOR = ['#81ecec', '#ff7675', '#a29bfe', '#ffeaa7']
const list = document.querySelectorAll('li>a');
const shadow_txt = [];
const app = new App();

const init = () => {
    updateBG();
    
}

const background = (idx) => {

    list[idx].onmouseover = () => {
        document.body.style.background = COLOR[idx];
        
        /* shadow_txt[idx] = list[idx].innerText;
        app.draw(shadow_txt[idx]); */

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