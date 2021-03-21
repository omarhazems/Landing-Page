# Landing Page Project

this code converts the static landing page into a dynamic, interactive one. it uses a group of functions, listed bellow each function and its use
also this data is mentioned in comments through the code.

** changeActiveSec(newSec) : this function is used to change the class of the active section and will be used more than once in different major functions, it takes an input which is the ID of the current active section.

** createHandleSecNav() : this function estimates the number of sections in the HTML file and generates a list element with the name of each section in the navigation unordered list element.

** navPressed() : this function determines if the navigation symbol is pressed in order to view the hidden unordered list containing the links to available sections. to close this list just press a section or press anywhere in the page.

** closeNavOnClick() : this function handles the closing of the navigation list when user clicks anywhere on the screen.

** backToTop() : this function scrolls the screen back to the top of the page when a specifically designed icon at bottom of the page is clicked.

** activeOnViewPort() : this function determines which section is now viewed and uses the changeActiveSec(newSec) function to set it to the currently viewed section. this function was first designed using an addEventListener method which detects where the mouse is hovering but then it was found that if the user is scrolling and the mouse is not over the page (section) it won't work correctly, so alternatively the .setInterval method was found while searching for a solution and used.


/*/*/*/*/*/*/*/*/*/*/*/*/*//*/*/*/*/*/*/*/*/*/*/*/*/*//*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*

Finally the navigation menu icon and the top arrow icon were both designed using HTML and CSS, some modifications were applied to the CSS code for better experience but nothing rather than the added icons was altered in the HTML file. the page was also tested in different modes using the chrome inspecotr.

this project should completely fulfill all requirements mentioned in the project's rubric.

all code lines were genuinely developed by the student: omar hazem sabry, and no code is copied from any other source.