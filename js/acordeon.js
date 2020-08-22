class Acordeon {
    constructor(element) {
        this.element = element;
        this.items = this.element.querySelector('.text-detail');

        this.items.addEventListener('mouseleave', function() {
            this.classList.toggle('show')
            console.log(this);
        })
    }
    open() {
        this.items.classList.toggle('show');
    }

}
export default Acordeon;