// let expenses = [];
// let totalAmount = 0;

// const categorySelect = document.getElementById('category-select');
// const expenseInput = document.getElementById('expense-input');
// const amountInput = document.getElementById('amount-input');
// const dateInput = document.getElementById('date-input');
// const addBtn = document.getElementById('add-btn');
// const expenseTableBody = document.getElementById('expense-table-body');
// const totalAmountCell = document.getElementById('total-amount');

// // Add Expense Event
// addBtn.addEventListener('click', function () {
//     const category = categorySelect.value;
//     const expenseName = expenseInput.value; // Changed 'Expense' to 'expenseName'
//     const amount = Number(amountInput.value);
//     const date = dateInput.value;

//     // Input Validation
//     if (category === '') {
//         alert('Please select a category.');
//         return;
//     }
//     if (expenseName.trim() === '') { // Use .trim() to avoid empty input with spaces
//         alert('Please enter a valid expense name.');
//         return;
//     }
//     if (isNaN(amount) || amount <= 0) {
//         alert('Please enter a valid amount.');
//         return;
//     }
//     if (date === '') {
//         alert('Please select a date.');
//         return;
//     }

//     // Create Expense Object and Add to Array
//     const expense = { category, expenseName, amount, date };
//     expenses.push(expense);

//     // Update Total Amount
//     totalAmount += amount;
//     totalAmountCell.textContent = totalAmount;

//     // Insert New Row in Table
//     const newRow = expenseTableBody.insertRow();
//     const categoryCell = newRow.insertCell();
//     const expenseCell = newRow.insertCell();
//     const amountCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();
//     const deleteCell = newRow.insertCell();

//     categoryCell.textContent = category;
//     expenseCell.textContent = expenseName;
//     amountCell.textContent = amount;
//     dateCell.textContent = date;

//     // Create Delete Button
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-button');

//     // Delete Button Event
//     deleteBtn.addEventListener('click', function () {
//         const index = expenses.indexOf(expense);
//         if (index > -1) {
//             expenses.splice(index, 1);
//         }

//         totalAmount -= expense.amount;
//         totalAmountCell.textContent = totalAmount;

//         expenseTableBody.removeChild(newRow);
//     });

//     deleteCell.appendChild(deleteBtn);

//     // Clear Inputs
//     categorySelect.value = ''; // Reset category dropdown
//     expenseInput.value = '';
//     amountInput.value = '';
//     dateInput.value = '';
// });



let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const expenseInput = document.getElementById('expense-input');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expenseTableBody = document.getElementById('expense-table-body');
const totalAmountCell = document.getElementById('total-amount');

// Add Expense Event
addBtn.addEventListener('click', function () {
    const category = categorySelect.value;
    const expenseName = expenseInput.value.trim();
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    // Input Validation
    if (category === '') {
        alert('Please select a category.');
        return;
    }
    if (expenseName === '') {
        alert('Please enter a valid expense name.');
        return;
    }
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
    }
    if (date === '') {
        alert('Please select a date.');
        return;
    }

    // Create Expense Object and Add to Array
    const expense = { category, expenseName, amount, date };
    expenses.push(expense);

    // Update Total Amount
    totalAmount += amount;
    totalAmountCell.textContent = totalAmount;

    // Insert New Row in Table
    const newRow = expenseTableBody.insertRow();
    const categoryCell = newRow.insertCell();
    const expenseCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const actionsCell = newRow.insertCell();

    categoryCell.textContent = category;
    expenseCell.textContent = expenseName;
    amountCell.textContent = amount;
    dateCell.textContent = date;

    // Create Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-button');

    // Edit Button Event
    editBtn.addEventListener('click', function () {
        // Populate fields with current values for editing
        categorySelect.value = expense.category;
        expenseInput.value = expense.expenseName;
        amountInput.value = expense.amount;
        dateInput.value = expense.date;

        // Remove expense from array and row for re-insertion
        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
        }
        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    });

    // Create Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-button');

    // Delete Button Event
    deleteBtn.addEventListener('click', function () {
        const index = expenses.indexOf(expense);
        if (index > -1) {
            expenses.splice(index, 1);
        }

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;

        expenseTableBody.removeChild(newRow);
    });

    actionsCell.appendChild(editBtn);
    actionsCell.appendChild(deleteBtn);

    // Clear Inputs
    categorySelect.value = '';
    expenseInput.value = '';
    amountInput.value = '';
    dateInput.value = '';
});


