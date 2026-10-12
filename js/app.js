let customerList = JSON.parse(localStorage.getItem(customerList)) || [];

function btnaddCustomrOnAction() {
    alert("add customer");
}

function btnSearchCustomrOnAction() {
    alert("search customer");
}

function btnDeleteCustomrOnAction() {
    alert("delete customer");
}

function btnUpdateCustomrOnAction() {
    alert("update customer");
}

function btnClearStorageOnAction() {
    localStorage.clear();
    customerList = [];
}

function btnLoadTableOnAction() {
    alert("load table");

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