let customerList = JSON.parse(localStorage.getItem("customerList")) || [];

function btnaddCustomrOnAction() {


    let customer = {
        id:document.getElementById("txtid").value,
        name:document.getElementById("txtname").value,
        age:document.getElementById("txtage").value,
        address:document.getElementById("txtaddress").value
    }
    // console.log(customer);
    customerList.push(customer);
    // console.log(customerList);
    localStorage.setItem("customerList", JSON.stringify(customerList));
    //btnLoadTableOnAction();
    
}

function btnSearchCustomrOnAction() {
    let id = document.getElementById("txtid").value

    let customer = customerList.find(c=> c.id === id);

    if(customer){
        document.getElementById("txtname").value = customer.name;
        document.getElementById("txtage").value = customer.age;
        document.getElementById("txtaddress").value = customer.address;

    }else{
        alert("customer not found");
    }
}

function btnDeleteCustomrOnAction() {
   let id = document.getElementById("txtid").value

   let index = customerList.findIndex(c=> c.id === id);

   if(index!== -1){
    customerList.splice(index,1);
    localStorage.setItem("customerList", JSON.stringify(customerList));
    btnLoadTableOnAction();
   }
}

function btnUpdateCustomrOnAction() {
    alert("update customer");
}

function btnClearStorageOnAction() {
    localStorage.clear();
    customerList = [];
   // btnLoadTableOnAction();
    
}

function btnLoadTableOnAction() {
    // alert("load table");

    let tblbdy = "";

    customerList.forEach(customer => {
        tblbdy += `
            <tr>
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
        </tr>
        `;
    });
    document.getElementById("tblCustomer").innerHTML = tblbdy;
}

btnLoadTableOnAction();