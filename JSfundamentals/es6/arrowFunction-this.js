function Book() {
    this.currentPage = 0;
    let that = this; //self that

    setInterval(function nextPage() {
        that.currentPage++;        

        console.log('this is my this:', that);
        console.log('current page is: ', that.currentPage);
    }, 1000);
}

let book1 = new Book();

// arrowfunction
function Book2() {
    this.currentPage = 0;
    let that = this; //self that

    setInterval(function nextPage() {
        that.currentPage++;        

        console.log('this is my this:', that);
        console.log('current page is: ', that.currentPage);
    }, 1000);
}

let book1 = new Book2();

// 
function BookArrow() {
    this.currentPage = 0;
    

    setInterval(() => {
        this.currentPage++;
        console.log('this is my this:', this);
        console.log('current page is: ', this.currentPage);
    }, 1000);
}

let book1 = new BookArrow();