document.addEventListener('DOMContentLoaded', function() {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

    // Load existing employees from local storage
    let employees = JSON.parse(localStorage.getItem('employees')) || [];

    // Function to render employees in the table
    function renderEmployees() {
        employeeTable.innerHTML = '';
        employees.forEach((employee, index) => {
            const row = employeeTable.insertRow();
            row.innerHTML = `
                <td>${employee.employeeId}</td>
                <td>${employee.name}</td>
                <td>${employee.dateOfJoining}</td>
                <td>${employee.salary}</td>
            `;
        });
    }

    // Event listener for form submission
    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const employeeId = document.getElementById('employeeId').value;
        const name = document.getElementById('name').value;
        const dateOfJoining = document.getElementById('dateOfJoining').value;
        const salary = document.getElementById('salary').value;

        const newEmployee = {
            employeeId,
            name,
            dateOfJoining,
            salary
        };

        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        renderEmployees();

        employeeForm.reset();
    });

    // Initial rendering of employees
    renderEmployees();
});