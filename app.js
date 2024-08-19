// script.js
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Display form data
    const formDataDisplay = document.getElementById('formDataDisplay');
    formDataDisplay.innerHTML = `
        <h3>Submitted Data:</h3>
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
});


document.getElementById('signupForm').addEventListener('submit' , function(event){
    event.preventDefault();

    //get form data

    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var password=document.getElementById('password').value;

    //display form data
    var formDataDisplay=document.getElementById('formDataDisplay');
    formDataDisplay.innerHTML =`

    <h3>Submitted Data:</h3>
    <p><strong>Username:</strong> ${username}</p>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>Password:</strong>${password}</p>
    `;


});

function expand(){
    var para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet obcaecati consequatur aut ducimus voluptas debitis praesentium doloremque quas dolores rerumeius cumque, quia provident aspernatur, placeat libero impedit molestiae."


    document.getElementById("para").innerHTML=para
}


//3

document.getElementById("studentForm").addEventListener('submit', function(e){
    e.preventDefault()
    var name=document.getElementById("name").value
    var age=document.getElementById("age").value
    var className=document.getElementById("class").value

    var table=document.getElementById("studentTable").querySelector("tbody")
    var newTr=table.insertRow();

    var td1=newTr.insertCell(0);
    var td2=newTr.insertCell(1);
    var td3=newTr.insertCell(2);
    var td4=newTr.insertCell(3);


    td1.innerHTML=name
    td2.innerHTML=age;
    td3.innerHTML=className;
    td4.innerHTML= `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`


    document.getElementById("studentForm").reset()
})


function deleteRow(button){
    var tr=button.parentNode.parentNode
    tr.parentNode.removeChild(tr)
}

function editRow(button){
    var tr=button.parentNode.parentNode

    var index=tr.rowIndex-1;
    var name=tr.cells[0].innerHTML;
    var age=tr.cells[1].innerHTML;
    var className=tr.cells[2].innerHTML;
    
    document.getElementById("editIndex").value=index
    document.getElementById("editName").value=name
    document.getElementById("editAge").value=age
    document.getElementById("editClass").value=className


    document.getElementById("editFormContent").classList.remove("hidden")
}


document.getElementById("editForm").addEventListener("submit",function (e){

    e.preventDefault()


    var index=document.getElementById("editIndex").value
    var name=document.getElementById("editName").value
    var age=document.getElementById("editAge").value
    var className=document.getElementById("editClass").value

    var table=document.getElementById("studentTable").querySelector("tbody")
    var tr=table.rows[index]


    tr.cells[0].innerHTML=name
    tr.cells[1].innerHTML=age
    tr.cells[2].innerHTML=className

    document.getElementById("editFormContent").classList.add("hidden")

})