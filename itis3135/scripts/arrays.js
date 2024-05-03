let persons = [];
let salaries = [];

window.onload = function() {
    document.getElementById("employeeName").focus();
};

function addSalary() {
    const name = document.getElementById("employeeName").value.trim();
    const salary = parseFloat(document.getElementById("employeeSalary").value);
    
    if (name === "" || isNaN(salary)) {
        alert("Please enter a valid name and a numeric salary.");
        document.getElementById("employeeName").focus();
        return;
    }

    persons.push(name);
    salaries.push(salary);
    document.getElementById("employeeName").value = "";
    document.getElementById("employeeSalary").value = "";
    document.getElementById("employeeName").focus();
}

function modifySalary() {
    const name = prompt("Enter the name of the employee to modify:");
    const index = persons.indexOf(name);
    if (index === -1) {
        alert("Employee not found.");
        return;
    }

    const newSalary = parseFloat(prompt("Enter the new salary:"));
    if (isNaN(newSalary)) {
        alert("Please enter a numeric salary.");
        return;
    }

    salaries[index] = newSalary;
}

function displayResults() {
    if (salaries.length === 0) {
        alert("No salaries to display.");
        return;
    }

    const average = salaries.reduce((acc, cur) => acc + cur, 0) / salaries.length;
    const max = Math.max(...salaries);

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = `<h2>Results</h2><p>Average Salary: ${average.toFixed(2)}</p><p>Highest Salary: ${max.toFixed(2)}</p>`;
}

function displaySalary() {
    let tableBody = document.getElementById("results_table").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear previous entries

    persons.forEach((person, index) => {
        let row = tableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = person;
        cell2.innerHTML = salaries[index].toFixed(2);
    });
}
