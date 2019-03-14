// Carousel


class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');

        // STEP 2
        this.images = this.element.querySelectorAll('.carouselImage');
        //console.log(this.images);

        // STEP 3
        this.currentIndex = 0;
        this.images[0].style.display = 'block';

        // STEP 4
        this.leftButton.addEventListener('click', () => {
            this.leftButtonClick();
            console.log('left arrow clicked!');
            //console.log(this.images[0]);
        });
        this.rightButton.addEventListener('click', () => {
            this.rightButtonClick();
            console.log('right arrow clicked!');
        });
    }

    // Methods

    leftButtonClick() {
        this.images[this.currentIndex].style.display = 'none'
        if (this.currentIndex === 0) {
            this.currentIndex = this.images.length - 1
        } else {
            this.currentIndex = this.currentIndex - 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }

    rightButtonClick() {
        this.images[this.currentIndex].style.display = 'none'
        if (this.currentIndex === this.images.length - 1) {
            this.currentIndex = 0
        } else {
            this.currentIndex = this.currentIndex + 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }
}


// STEP 1
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
//console.log(carousel);

