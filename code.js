let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

window.onload = function() {
    displayExpenses();
};

// Function to add an expense
function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!description || !amount || amount <= 0) {
        alert('Please enter valid description and amount');
        return;
    }

    const expense = {
        description: description,
        amount: amount
    };

    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';

    displayExpenses();
}

// Function to display all expenses
function displayExpenses() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';  // Clear the list before displaying

    let total = 0;

    expenses.forEach((expense, index) => {
        total += expense.amount;

        const li = document.createElement('li');
        li.innerHTML = `
            ${expense.description} - $${expense.amount.toFixed(2)}
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(li);
    });

    document.getElementById('total-amount').innerText = total.toFixed(2);
}

// Function to delete an expense
function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
}
