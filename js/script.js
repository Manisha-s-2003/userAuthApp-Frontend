// Handle logout
function logout() {
    alert("You have been logged out!");
    // Redirect to login page or handle logout logic here
}

// Hall Booking Functionality
function bookHall() {
    const hallList = document.getElementById("hall-list");
    hallList.innerHTML = `
        <div>Hall 1 - Available</div>
        <div>Hall 2 - Booked</div>
        <button onclick="reserveHall('Hall 1')">Reserve Hall 1</button>
    `;
}

function reserveHall(hall) {
    alert(`${hall} has been reserved.`);
}

// Decoration Functionality
function manageDecorations() {
    const decorationList = document.getElementById("decoration-list");
    decorationList.innerHTML = `
        <div>Theme: Classic</div>
        <div>Theme: Modern</div>
        <button onclick="addDecoration()">Add New Decoration</button>
    `;
}

function addDecoration() {
    alert("Add decoration functionality.");
}

// Food Functionality
function manageFood() {
    const foodList = document.getElementById("food-list");
    foodList.innerHTML = `
        <div>Menu: Veg</div>
        <div>Menu: Non-Veg</div>
        <button onclick="addFood()">Add New Food Item</button>
    `;
}

function addFood() {
    alert("Add food functionality.");
}
