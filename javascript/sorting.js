let customerArray = [];
let highestIncome = true;
let highestDOB = true;

function DisplayCustomerData(){
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
    if (customerName == "" || customerDOB == "" || customerIncome == ""){
        alert("Woops, you forgot something!")
        if (customerName == ""){
            customerName = prompt("What is the name?", "John Doe");
        }
        if (customerDOB == ""){
            customerDOB = prompt("What is their date of birth?", "YYYY/MM/DD");
        }
        if (customerIncome == ""){
            customerIncome = prompt("What is their income?", "125000")
        }
        customerArray.push(
            {
                _customerName: customerName,
                _customerDOB: customerDOB,
                _customerIncome: customerIncome,
            });
        DisplayCustomerData();
    } else {
        customerArray.push(
            {
                _customerName: customerName,
                _customerDOB: customerDOB,
                _customerIncome: customerIncome,
            });
        DisplayCustomerData();
    }
}

function SortIncome() {
    if (highestIncome) {
        document.getElementById("income").textContent = "Income: Low to High"
        customerArray.sort(function (a, b) {
            return b._customerIncome - a._customerIncome; //Highest First
        });
        highestIncome = !highestIncome
    } else {
        document.getElementById("income").textContent = "Income: High to Low"
        customerArray.sort(function (a, b) {
            return a._customerIncome - b._customerIncome; //LowestFirst
        })
        highestIncome = !highestIncome
    }
    DisplayCustomerData();
}

function SortDOB() {
    if (highestDOB) {
        document.getElementById("dob").textContent = "DOB: Low to High"
        customerArray.sort(function (a, b) {
            return new Date(b._customerDOB) - new Date(a._customerDOB); //Highest First
        });
        highestDOB = !highestDOB
    } else {
        document.getElementById("dob").textContent = "DOB: High to Low"
        customerArray.sort(function (a, b) {
            return new Date(a._customerDOB) - new Date(b._customerDOB); //LowestFirst
        })
        highestDOB = !highestDOB
    }
    DisplayCustomerData();
}