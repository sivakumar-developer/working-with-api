//GET fetch API to display the users data n landing page
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>
     //console.log(response)
     (response.json())
)
.then((data) => {
    console.log(data)
    let containerListEl = document.getElementById('containerList')
    data.forEach(item => {
                const listItem = document.createElement('li');
                const nameEl = document.createElement('p');
                const emailEl = document.createElement('p');
                nameEl.textContent = item.name;
                emailEl.textContent = item.email;
                listItem.classList.add('list-item')
                nameEl.classList.add('description')
                emailEl.classList.add('description')
                listItem.appendChild(nameEl)
                listItem.appendChild(emailEl)
                containerListEl.appendChild(listItem)
            }        
        )
    }
)

.catch((err) => console.log(err))



//POST fetch API to add user

let addFormEl = document.getElementById('addUserForm');
let addNameEl = document.getElementById('addName');
let nameErrorEl = document.getElementById('nameErr');

let addEmailEl = document.getElementById('email');
let emailErrorEl = document.getElementById('emailErr');

let addUserNameEl = document.getElementById('userName');
let userNameErrorEl = document.getElementById('userNameErr');
let addButtonEl = document.getElementById("addButton");

let formData = {
    name: "",
    email: "",
    userName: ""
};

addNameEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        nameErrorEl.textContent = "Required";
    } else {
        nameErrorEl.textContent = "";
    }

    formData.name = event.target.value;
})

addEmailEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        emailErrorEl.textContent = "Required";
    } else {
        emailErrorEl.textContent = "";
    }

    formData.email = event.target.value;
})

addUserNameEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        userNameErrorEl.textContent = "Required";
    } else {
        userNameErrorEl.textContent = "";
    }

    formData.userName = event.target.value;
});

function validateFormData(formData){
    const {name, email, userName} = formData;
    if (name === "") {
        nameErrorEl.textContent = "Required";
    }
    if (email === "") {
        emailErrorEl.textContent = "Required";
    }
    if (userName === "") {
        userNameErrorEl.textContent = "Required";
    }
}

function submitData(formData) {
    let options = {
        method: "POST",
        headers: {
            "Content-type": 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(formData)
    }

    fetch("https://jsonplaceholder.typicode.com/users", options)
    .then(response => response.json())
    .then(jsonData => 
        console.log(jsonData)
    )
}

addButtonEl.addEventListener("submit", function(event){
    event.preventDefault();
    validateFormData(formData);
    submitData(formData);
})



