
class Preview {
    constructor(element) {
        // assign this.domElement to the passed in domElement
        this.element = element;

        // create a reference to the ".full-story-btn" class
        this.fullStoryBtn = this.element.querySelector('.full-story-btn');

        // set a click handler on the fullstorybtn reference, calling the expandStory method
        this.fullStoryBtn.addEventListener('click', this.expandStory.bind(this));

        // arrow method alternative: 
        //this.fullStoryBtn.addEventListener('click', () => this.expandStory());
    }

    expandStory() {
        this.element.classList.toggle('article-open');

        if (this.fullStoryBtn.innerHTML === "Read full story") {
            this.fullStoryBtn.innerHTML = "Close";
        } else {
            this.fullStoryBtn.innerHTML = "Read full story";
        };
    }
}



// START HERE:

let previews = document.querySelectorAll('.preview');

previews.forEach(function (preview) {
    // checking to see that all previews are being accessed
    console.log(preview);

    // return newly constructed DOM element
    return new Preview(preview);
})