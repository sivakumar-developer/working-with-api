//PUT fetch API to update user

let editFormEl = document.getElementById('editUserForm');
let userIdEl = document.getElementById('userId');
let idErrorEl = document.getElementById('idErr');

let editNameEl = document.getElementById('editName');
let editNameErrorEl = document.getElementById('editNameErr');

let editEmailEl = document.getElementById('editEmail');
let editEmailErrorEl = document.getElementById('editEmailErr');
let editButtonEl = document.getElementById("editButton");

let editFormData = {
    id: "",
    name: "",
    email: ""
};

userIdEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        idErrorEl.textContent = "*Required";
    } else {
        idErrorEl.textContent = "";
    }

    editFormData.id = event.target.value;
})

editNameEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        editNameErrorEl.textContent = "*Required";
    } else {
        editNameErrorEl.textContent = "";
    }

    editFormData.name = event.target.value;
})

editEmailEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        editEmailErrorEl.textContent = "*Required";
    } else {
        editEmailErrorEl.textContent = "";
    }

    editFormData.email = event.target.value;
});

function validateFormData(editFormData){
    const {id, name, email} = editFormData;
    if (id === "") {
        idErrorEl.textContent = "*Required";
    }
    if (name === "") {
        editNameErrorEl.textContent = "*Required";
    }
    if (email === "") {
        editEmailErrorEl.textContent = "*Required";
    }
}

function submitData(editFormData) {
    let options = {
        method: "PUT",
        headers: {
            "Content-type": 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(editFormData)
    }

    let id = editFormData.id;
    fetch("https://jsonplaceholder.typicode.com/users/"+id, options)
    .then(response => response.json())
    .then(jsonData => 
        console.log(jsonData)
    )
}

editButtonEl.addEventListener("submit", function(event){
    event.preventDefault();
    validateFormData(editFormData);
    submitData(editFormData);
})


