// Step 1: Define the asynchronous function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Step 3: Select the container where data will be displayed
  const dataContainer = document.getElementById("api-data");

  try {
    // Step 4: Fetch data from the API
    const response = await fetch(apiUrl);

    // Check if the fetch was successful (HTTP status in the 200 range)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Step 4b: Convert the response into JSON
    const users = await response.json();

    // Step 5: Clear the loading message
    dataContainer.innerHTML = "";

    // Step 6: Create a list element to hold users
    const userList = document.createElement("ul");

    // Step 7: Loop through each user and add to the list
    users.forEach((user) => {
      const listItem = document.createElement("li"); // Create <li>
      listItem.textContent = user.name; // Set name as text
      userList.appendChild(listItem); // Add to <ul>
    });

    // Step 8: Append the complete list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 9: Handle errors
    dataContainer.innerHTML = ""; // Clear content
    dataContainer.textContent = "Failed to load user data.";
    console.error("Error fetching user data:", error);
  }
}

// Step 10: Run fetchUserData when the page has loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
