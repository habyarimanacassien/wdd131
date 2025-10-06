// Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chaptersArray with stored chapters or empty array
let chaptersArray = getChapterList() || [];

// Display all chapters from localStorage on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Add event listener to the button
button.addEventListener('click', () => {
  if (input.value != '') {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ''; // clear the input
    input.focus(); // set the focus back to the input
  }
});

// Function to display a chapter in the list
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');
  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');
  li.append(deletebutton);
  list.append(li);
  deletebutton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// Function to save the chapters array to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to retrieve the chapters array from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter from the array and localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // remove the ❌ character
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}