let modal = document.getElementById('mymodal');
let cerrar = document.getElementById('close');
let btn = document.getElementById('btn-modal');

btn.onclick = function() {
    modal.style.display = 'block';
}

cerrar.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        console.log(event.target);
    }
}