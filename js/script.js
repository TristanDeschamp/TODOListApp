// Get references to the input box and the list container elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask(){
	// Check if the input box is empty
	if (inputBox.value === ''){
		alert("Vous devez écrire quelque chose !"); // Alert if no task is entered
	}
	else{
		// Create a new list item (li) and set its inner HTML to the input box value
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li); // Add the new list item to the list container

		// Create a span element for the close (delete) button
		let span = document.createElement("span");
		span.innerHTML = "\u00d7"; // Unicode character for the multiplication sign (×)
		li.appendChild(span); // Add the close button to the list item
	}
	inputBox.value = ""; // Clear the input box after adding the task
	saveData(); // Save the updated list to local storage
};

// Add an event listener to the list container to handle clicks on list items and close buttons
listContainer.addEventListener("click", function(e){
	// If a list item (li) is clicked, toggle the 'checked' class
	if (e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData(); // Save the updated list to local storage
	}
	// If a close button (span) is clicked, remove the parent list item
	else if (e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
		saveData(); // Save the updated list to local storage
	}
}, false);

// Function to save the current list to local storage
function saveData(){
	localStorage.setItem("data", listContainer.innerHTML);
};

// Function to show the saved tasks from local storage
function showTask(){
	listContainer.innerHTML = localStorage.getItem("data");
};

// Show the saved tasks when the page loads
showTask();