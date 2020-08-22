class Modal {
    constructor(elemnt) {
        this.elemnt = elemnt;
        this.body = this.elemnt.querySelector('#modal-body');
        this.btnClose = this.elemnt.querySelector('#close');
        this.btnAceptar = this.elemnt.querySelector('#btn-a');
        this.btnCancelar = this.elemnt.querySelector('#btn-c');

        this.btnClose.onclick = () => {
            this.cerrar();
        }
        this.btnAceptar.onclick = () => {
            this.aceptar();
        }
        this.btnCancelar.onclick = () => {
            this.cancelar();
        }
        window.onclick = function(event) {
            if (event.target == elemnt) {
                elemnt.style.display = 'none';
            }
        }
    }

    open() {
        this.elemnt.style.display = 'block';
    }
    cerrar() {
        this.elemnt.style.display = 'none';
    }
    aceptar() {
        this.body.innerText = 'Felicidades..!'
    }
    cancelar() {
        this.elemnt.style.display = 'none';
    }
}

export default Modal;

















// /* eslint-disable */
// let modal = document.getElementById('mymodal');
// // let cerrar = document.getElementById('close');
// // let btn = document.getElementById('btn-modal');
// // let btnC = document.getElementById('btn-c');
// // let btnA = document.getElementById('btn-a');
// let btn = document.querySelectorAll('button');

// btn.forEach(btn => {
//     btn.addEventListener('click', Eventbutton)
// })

// function Eventbutton(event) {
//     if (event.target.id == 'btn-modal') {
//         modal.style.display = 'block';
//     }
//     if (event.target.id == 'close') {
//         modal.style.display = 'none';
//     }
//     if (event.target.id == 'btn-c') {
//         modal.style.display = 'none';
//     }
//     // if (event.target.id == 'close') {
//     //     modal.style.display = 'none';
//     // }
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }