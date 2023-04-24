
// Create an array to store the meals
let meals = [];

// Function to add a meal to the meals array
function addMeal() {
    // Get the values from the form
    let name = document.getElementById("name").value;
    let category = document.getElementById("category").value;

    // Create a new meal object
    let meal = {
        name: name,
        category: category
    };

    // Add the meal to the meals array
    meals.push(meal);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";

    // Refresh the meals table
    refreshMealsTable();
}

// Function to refresh the meals table
function refreshMealsTable() {
    // Get the search query
    let searchQuery = document.getElementById("search").value.toLowerCase();

    // Get the meals table body
    let mealsTableBody = document.getElementById("meals");

    // Clear the meals table body
    mealsTableBody.innerHTML = "";

    // Loop through the meals array and add each meal to the meals table
    meals.forEach(function (meal) {
        // Check if the meal name contains the search query
        if (meal.name.toLowerCase().indexOf(searchQuery) >= 0) {
            // Create a new row
            let row = document.createElement("tr");

            // Create a new name cell and add it to the row
            let nameCell = document.createElement("td");
            nameCell.innerHTML = meal.name;
            row.appendChild(nameCell);

            // Create a new category cell and add it to the row
            let categoryCell = document.createElement("td");
            categoryCell.innerHTML = meal.category;
            row.appendChild(categoryCell);

            // Add the row to the meals table body
            mealsTableBody.appendChild(row);
        }
    });

    // If there are no meals to display, show a message
    if (mealsTableBody.innerHTML == "") {
        mealsTableBody.innerHTML = "<tr><td colspan='2' id='no-results'>No results found.</td></tr>";
    }
}

// Function to search for meals
function searchMeals() {
    refreshMealsTable();
}

// Attach event listeners to the search input field and the Add Meal button
document.getElementById("search").addEventListener("keyup", searchMeals);
document.getElementById("add-meal").addEventListener("click", addMeal);
