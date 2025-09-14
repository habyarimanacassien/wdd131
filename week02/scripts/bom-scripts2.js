// BOM Top 10 Application - Event Handling
// Assuming you have these elements already selected from previous activity
const button = document.querySelector('button'); // Add Chapter button
const input = document.querySelector('#favchap'); // Input field
const list = document.querySelector('#list'); // UL element

// Add Chapter button click event listener
button.addEventListener('click', function() {
  // Check if input is not blank
  if (input.value.trim() !== '') {
    // Create the list item
    const li = document.createElement('li');
    
    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    
    // Set the list item text content to the input value
    li.textContent = input.value.trim();
    
    // Append the delete button to the list item
    li.append(deleteButton);
    
    // Append the list item to the list
    list.append(li);
    
    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });
    
    // Clear the input field
    input.value = '';
  }
  
  // Set focus back to the input field (whether item was added or not)
  input.focus();
});

// Optional: Add Enter key support for better user experience
input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    button.click(); // Trigger the button click event
  }
});