(function(){

    var doc = document.documentElement;
    var w = window;

    /*
    define four vairables: curScroll, prevScroll, curDirection, prevDirection
    */

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var curDirection = prevDirection = 0;

    /*
    how it works:
    -----------------
    create a scroll event listener

    create a function to check position on each scroll event
    compare curScroll and prevScroll values to find the scroll direction
    scroll up - 1, scroll down - 2, initial - 0

    then set the direction value to curDirection

    compare curDirection and prevDirection

    if they are different, call another function to show or hide the header

    example:
    step 1: user scrolls down: curDirection 2, prevDirection 0 > hide header
    step 2: user scrolls down again: curDirection 2, prevDirection 2 > do nothing
    step 3: user scrolls up: curDirection 1, prevDirection 2 > show header
    */

    var header = document.getElementById('header-container');

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            // scrolled down
            curDirection = 2;
        } 
        else {
           // scrolled up
           curDirection = 1; 
        }
        if(curDirection !== prevDirection) {
            toggleHeader();
        }
        prevDirection = curDirection;
        prevScroll = curScroll;
    };

    var toggleHeader = function() {
        if(curDirection === 2) {
            header.classList.add('hide');
        }
        else if(curDirection === 1) {
            header.classList.remove('hide');
        }
    };
    window.addEventListener('scroll', checkScroll);

})();