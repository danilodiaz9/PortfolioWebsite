var projectGalleryContainer = document.getElementById('galleryContainer');
var projectGalleryDescription = document.getElementById('galleryTextContainer');
var prevButton = document.getElementById('leftArrow');
var nextButton = document.getElementById('rightArrow');


var projectArry = ['resources/images/expenseTracker.png','resources/images/toDoList.png']
var projectDescriptionArry = ['This project involves CSS, Javascript, HTML.  It takes the information from the form and dynamically adds it to a table that tracks the info.  Each entry also gives the ability to delete through a delete button.',
'This project was a simple To Do List to manage tasks and keep track of which ones have been completed. I used CSS, Javascript, and HTML.']
var arryCounter = 0;
nextButton.onclick = function () {
    arryCounter++;
    projectGalleryContainer.src = projectArry[arryCounter];
    projectGalleryDescription.innerHTML = projectDescriptionArry[arryCounter];
}
prevButton.onclick = function () {
    arryCounter--;
    projectGalleryContainer.src = projectArry[arryCounter];
    projectGalleryDescription.innerHTML = projectDescriptionArry[arryCounter];
}

projectGalleryContainer.src = projectArry[arryCounter];

projectGalleryDescription.innerHTML = projectDescriptionArry[arryCounter];