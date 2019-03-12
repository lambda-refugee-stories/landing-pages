// Carousel


class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');

        // STEP 2
        this.images = this.element.querySelectorAll('.carouselImage');
        //console.log(this.images);

        // STEP 3
        this.currentIndex = 0;
        this.images[0].style.display = 'block';
        // this.totalImages = this.images.length;
        // this.currentImage = this.images[0];
        //console.log(this.totalImages);

        // STEP 4
        this.leftButton.addEventListener('click', () => {
            this.leftButtonClick();
            //this.nextImage(-1);
            console.log('left arrow clicked!');
            console.log(this.images[0]);
        });
        this.rightButton.addEventListener('click', () => { 
            this.rightButtonClick();
            //this.nextImage(1); 
            console.log('right arrow clicked!');
        });
    }

    // Methods
    // nextImage(index){
    //     this.currentImage.classList.remove('current');

    //     this.counter = this.counter + index;

    //     if (index === -1 && this.counter < 0) {
    //         this.counter = this.totalImages -1;
    //         // if the index is on the first image and you click left, brings you to the last image
    //     }
    //     if (index === 1 && !this.images[this.counter]) {
    //         this.counter = 0;
    //         // if on the last image and you click right, brings you to the first image
    //     }

    //     this.currentImage = this.images[this.counter];
    //     this.currentImage.classList.add('current');
    //}

    leftButtonClick(){
        this.images[this.currentIndex].style.display = 'none'
        if(this.currentIndex === 0){
            this.currentIndex = this.images.length - 1
        } else {
            this.currentIndex = this.currentIndex - 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }

    rightButtonClick(){
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


/*



class Carousel {
    constructor(ele) {
        this.ele = ele;
        this.leftBtn = this.ele.querySelector('.left-button');
        this.rightBtn = this.ele.querySelector('.right-button');

        //STEP 2
        this.images = this.ele.querySelectorAll('.carousel img');
        //console.log(this.images);

        //STEP 3
        this.counter = 0;
        this.numOfImages = this.images.length;
        this.currentImage = this.images[0];
        //console.log(this.numOfImages);


        //STEP 4
        this.leftBtn.addEventListener('click', () => {
            this.changeImage(-1);
            console.log('left arrow clicked!');
        });

        this.rightBtn.addEventListener('click', () => {
            this.changeImage(1);
            console.log('right arrow clicked!');
        });
    }

    changeImage(index) {
        this.currentImage.classList.remove('current');

        this.counter = this.counter + index;
        //console.log(this.index);



        if (index === -1 && this.counter < 0) {
            this.counter = this.numOfImages - 1;
            //if the index is on the first image and you click left,
            //brings you to the last image
        } if (index === 1 && !this.images[this.counter]) {
            this.counter = 0;
            //if on the last image and you click right, 
            //brings you to the first image
        }

        console.log(this.counter);

        this.currentImage = this.images[this.counter];

        this.currentImage.classList.add('current');
    }

}

//STEP 1
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
//console.log(carousel);


*/ 





/*

SPRINT CHALLENGE CAROUSEL

class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        this.images = element.querySelectorAll('img');
        this.currentIndex = 0;
        this.images[0].style.display = 'block';
        this.leftButton.addEventListener('click', () => {this.leftButtonClick()})
        this.rightButton.addEventListener('click', () => { this.rightButtonClick() })
    }

    leftButtonClick(){
        this.images[this.currentIndex].style.display = 'none'
        if(this.currentIndex === 0){
            this.currentIndex = this.images.length - 1
        } else {
            this.currentIndex = this.currentIndex - 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }

    rightButtonClick(){
        this.images[this.currentIndex].style.display = 'none'
        if (this.currentIndex === this.images.length - 1) {
            this.currentIndex = 0
        } else {
            this.currentIndex = this.currentIndex + 1
        }
        this.images[this.currentIndex].style.display = 'block'
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

*/


