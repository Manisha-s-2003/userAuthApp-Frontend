// Handle logout
function logout() {
    alert("You have been logged out!");
    // Redirect to login page or handle logout logic here
}

// Hall Booking Functionality
function bookHall() {
    window.location.href = 'hallbooking.html';
}

function reserveHall(hall) {
    alert(`${hall} has been reserved.`);
}

// Decoration Functionality
function manageDecorations() {
    window.location.href = 'decoration.html';

    
}

function addDecoration() {
    alert("Add decoration functionality.");
}

// Food Functionality
function manageFood() {
    window.location.href = 'cateringservice.html';

}

function addFood() {
    alert("Add food functionality.");
}
