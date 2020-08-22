class Dropdawn {
    constructor(element) {
        this.element = element;
        this.items = this.element.querySelector('.content-dropdown');

        this.items.addEventListener('mouseleave', function() {
            this.classList.toggle('show')
            console.log(this);
        })
    }
    open() {
        this.items.classList.toggle('show');
    }

}
export default Dropdawn;