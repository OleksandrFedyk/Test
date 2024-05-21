// Get all dropdown menus
var dropdowns = document.querySelectorAll('.popup_content');

// Get all dropdown trigger buttons
var dropdownTriggers = document.querySelectorAll('.popup_trigger');

// Variable to hold the timeout IDs
var timeoutIds = [];

// Function to show the dropdown menu
function showDropdown(index) {
    clearTimeout(timeoutIds[index]);
    dropdowns[index].style.display = 'block';
}

// Function to hide the dropdown menu after a delay
function hideDropdown(index) {
    timeoutIds[index] = setTimeout(function() {
        dropdowns[index].style.display = 'none';
    }, 100);
}

// Event listeners for all dropdown trigger buttons
dropdownTriggers.forEach(function(trigger, index) {
    // Show the dropdown menu when the button is hovered
    trigger.addEventListener('mouseenter', function() {
        showDropdown(index);
    });

    // Hide the dropdown menu when the button is not hovered for 300 milliseconds
    trigger.addEventListener('mouseleave', function() {
        hideDropdown(index);
    });

    // Show the dropdown menu when the menu itself is hovered
    dropdowns[index].addEventListener('mouseenter', function() {
        clearTimeout(timeoutIds[index]);
    });

    // Hide the dropdown menu when the menu itself is not hovered for 300 milliseconds
    dropdowns[index].addEventListener('mouseleave', function() {
        hideDropdown(index);
    });
});
