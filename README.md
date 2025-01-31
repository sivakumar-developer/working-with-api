# Project Documentation: User Management Website

## Project Overview

This project is a User Management System where users can add, update, and delete their details. The system uses HTML, CSS, and JavaScript (JS). It interacts with a server-side API via the fetch API to perform CRUD operations (Create, Read, Update, Delete). The application allows users to manage their information, providing a seamless and interactive experience.

### Features

#### Add User Details:

Users can input their details into a form (e.g., name, email, phone, etc.).
The form data is sent to the server using a POST request via the fetch API.

#### View User Details:

All users' details are displayed in a table format.
The data is fetched from the server using a GET request via the fetch API.

#### Update User Details:

Users can select any user from the displayed list to update their details.
Upon clicking the 'Update' button, the selected user's details can be edited and saved back to the server via a PUT request.

#### Delete User Details:

Users can delete their details by clicking the delete button beside each user in the list.
This action is executed using a DELETE request via the fetch API.

### Technologies Used

- HTML: Used for creating the structure of the user interface (UI).

- CSS: Used to style the website to make it visually appealing and responsive.

- JavaScript: Handles the dynamic aspects of the web application, including interacting with the server using the fetch API.

- Fetch API: A modern JavaScript API used to make asynchronous HTTP requests to interact with the backend server.

### Prerequisites

- A browser with JavaScript support.

- A running server with a RESTful API to handle the CRUD operations for user data (could be implemented using any backend technology such as Node.js, Python, PHP, etc.).

### File Structure

/working-with-API

  ├── index.html                # The main HTML file

  ├── addNew.html               # This file contains the HTML structure to add new user

  ├── editFile.html             # This file contains the HTML structure to edit the existing user

  ├── deleteUser.html           # This file contains the HTML structure to delete the existing user
  
  ├── index.css                 # The stylesheet for the website
  
  ├── index.js                  # JavaScript file containing logic for fetching data and handling creating a new user

  ├── editUser.js               # JavaScript file containing logic for fetching data and handling editing the existing user

  ├── deleteUser.js             # JavaScript file containing logic for fetching data and handling  deleting a user

### Detailed Description

#### 1. index.html

This is the main HTML file, which contains the basic structure of the page, including:

- A list to display all the users.
- Buttons for actions like adding, updating, and deleting user details.

#### 2. addNew.html

This is the HTML file, which contains the basic structure of the page, including:

- A form for adding user details.
- Buttons for actions like submitting the user details and returning to the home page.

#### 3. editFile.html

This is the main HTML file, which contains the basic structure of the page, including:

- A form for updating user details.
- Buttons for actions like submitting the existing user details to be updated and returning to the home page.

#### 4. deleteUser.html

This is the main HTML file, which contains the basic structure of the page, including:

- A form for deleting user details.
- Buttons for actions like submitting the existing user details to be deleted and returning to the home page.

#### 5. style.css
This CSS file contains the website's styles, ensuring a clean and user-friendly interface. It includes styles for the form, description, and buttons.

#### 5. index.js
This JavaScript file handles the functionality of the application:

Fetching and Displaying Data: It uses the fetch API to make a GET request to fetch user details from the server and dynamically populate the table.
Adding New Users: When the user submits the form to add a new user, the data is sent to the server using a POST request.

#### 6. editUser.js
This JavaScript file handles the functionality of the application:

Updating User Details: It handles the update form, which sends the updated data to the server using a PUT request.

#### 7. deleteUser.js
This JavaScript file handles the functionality of the application:

Deleting User: Each user in the table has a delete button that sends a DELETE request to remove the user from the system.

### Instructions for Use
1. Open the index.html file in your browser to view the website.
2. The user details will be displayed in a table.
3. You can add, update, or delete any user's information by clicking the appropriate buttons.
4. Use the form to add a new user's details by clicking the add button.
5. Use the form to update an existing user's details by clicking the edit button.
6. Use the form to delete an existing user's details by clicking the delete button.

### Conclusion
This project is a simple yet effective demonstration of CRUD operations using HTML, CSS, JavaScript, and the Fetch API. It provides an intuitive interface for managing user information and demonstrates how to interact with a server-side API.

