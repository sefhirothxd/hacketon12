import Modal from './modal.js';
import Dropdawn from './dropdown.js';
import Acordeon from './acordeon.js';

let btn = document.querySelectorAll('button');
let modal = new Modal(document.getElementById('mymodal'));
let dropdown = new Dropdawn(document.getElementById('mydrop'));
let dropdown2 = new Dropdawn(document.getElementById('mydrop2'));
let acordeon = new Acordeon(document.getElementById('txt-uno'));
let acordeonDos = new Acordeon(document.getElementById('txt-dos'));
let acordeonTres = new Acordeon(document.getElementById('txt-tres'));

btn.forEach(btn => {
    btn.addEventListener('click', EventButton);
})

function EventButton(event) {
    if (event.target.id == 'btn-modal') {
        modal.open();
    }
    if (event.target.id == 'btn-drop') {
        dropdown.open();
    }
    if (event.target.id == 'btn-drop2') {
        dropdown2.open();
    }
    if (event.target.id == 'btnTxt-uno') {
        acordeon.open();
    }
    if (event.target.id == 'btnTxt-dos') {
        acordeonDos.open();
    }
    if (event.target.id == 'btnTxt-tres') {
        acordeonTres.open();
    }
}