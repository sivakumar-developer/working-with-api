//DELETE fetch API 
let deleteUserFormEl = document.getElementById("deleteUserForm");
let deleteUserIdEl = document.getElementById("deleteUserId");
let userIdErrorEl = document.getElementById("userIdErr");

let deleteButtonEl = document.getElementById("deleteButton");
let deleteData = {
    id: ""
};

deleteUserIdEl.addEventListener("blur", function(event) {
    if (event.target.value === ""){
        userIdErrorEl.textContent = "*Required";
    } else {
        userIdErrorEl.textContent = "";
    }
    deleteData.id = event.target.value;
})

function validateFormData(deleteData){
    const {id} = deleteData;
    if (id === "") {
        userIdErrorEl.textContent = "*Required";
    }
}

function submitData(deleteData) {

    let id = deleteData.id
    
    fetch("https://jsonplaceholder.typicode.com/users/" + id, {
        method: 'DELETE',
    })
    .then(response => response.json())
    .then(jsonData => 
        console.log(jsonData)
    )
}

deleteButtonEl.addEventListener("click", function(event){
    event.preventDefault();
    validateFormData(deleteData);
    submitData(deleteData);
})
