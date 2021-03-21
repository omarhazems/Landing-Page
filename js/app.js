/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
let activeSec; /* used in chaneActiveSec() function */
const pageTop = document.querySelector(".main__hero"); /* element considered page top reference */
let getSections = document.querySelectorAll("section"); /* get all available sections */
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */


function changeActiveSec(newSec) {
    /* remove your-active-class from section and gives it to new section */

    activeSec = document.getElementsByClassName('your-active-class'); /* get function currently with class: your-active-class */
    activeSec[0].classList.remove('your-active-class'); /* remove class from this element */
    activeSec = document.getElementById(newSec); /* get the new element getting the your-active-class */
    activeSec.className = "your-active-class"; /* assign the your-active class to the new element */
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav    
function createHandleSecNav() {
    /* creates new li inside the ul element for each available section with a listner for clicking on li */

    for (let i = 1; i <= getSections.length; i++) {
        /* loop over to add sections in header according to number of sections available */

        const secText = "Section " + i; /* create text added to list element */
        const secId = "section" + i;
        const newLi = document.createElement("LI"); /* create the new list element */
        newLi.textContent = secText; /* add text to the new list element */
        newLi.addEventListener("click", function () {
            /* listen to click on sec, scroll to its equivalent section and updates active class  */
            document.getElementById("section" + i).scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
           // changeActiveSec("section" + i);
        });
        document.getElementById('navbar__list').appendChild(newLi); /* insert the new list element inside the unordered list */
    }

}

// Scroll to anchor ID using scrollTO event
function navPressed() {
    /* this function opens and closes navigation menu on every click */

    const dashesElement = document.querySelector(".threeDashes"); /* get nav menue element */
    dashesElement.addEventListener("click", function () {
        /* add event listner on clicking the nav element */
        let listViewState = document.getElementById("navbar__list"); /* return the unordered list element */
        if (listViewState.style.display === "none") {
            /* an if conditional to check and toggle the display of the ul and so the menu */
            listViewState.style.display = "block";
        }
    });

}

function closeNavOnClick() {

    document.body.addEventListener('click', function () {
        /* addded another function to close menu is user clicks anywhere  */
        let listViewState = document.getElementById("navbar__list"); /* return the unordered list element */
        listViewState.style.display = "none";
        event.preventDefault()
    }, true);
}

function backToTop() {
    const topIconElement = document.getElementById("Top");
    topIconElement.addEventListener("click", function () {
        event.preventDefault()
        pageTop.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });
}


// Add class 'active' to section when near top of viewport

function activeOnViewPort() {
    window.setInterval(function () {
        for (let i = 1; i <= getSections.length; i++) {
            let dis = document.getElementById("section" + i).getBoundingClientRect();
            if ((dis.y) <= 200 && (dis.y) > 0) {
                changeActiveSec("section" + i);
            }
        }
    }, 100);
}



/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
createHandleSecNav();
// Scroll to section on link click
navPressed();
closeNavOnClick();
// Set sections as active
activeOnViewPort();
// jump to top of page with one click (button in bottom)
backToTop();
