let customerArray = [];


function displayCustomerData(){
    const customerTable = document.getElementById("customer_table");

    customerTable.innerHTML = (`
        <tr class="table_title_bar">
            <th>Name</th>
            <th>Income</th>
            <th>Date Of Birth</th>
        </tr>
    `)

    for (var i = 0; i < customerArray.length; i++){
        const newRow = customerTable.insertRow();
        newRow.innerHTML = `
            <td>${customerArray[i]._customerName}</td>
            <td>${customerArray[i]._customerIncome}</td>
            <td>${customerArray[i]._customerDOB}</td>
        `;
    }
}

function InputCustomerData(
    customerName,
    customerDOB,
    customerIncome
){
    customerArray.push(
        {
            _customerName: customerName,
            _customerDOB: customerDOB,
            _customerIncome: customerIncome,
        });
    displayCustomerData();
}