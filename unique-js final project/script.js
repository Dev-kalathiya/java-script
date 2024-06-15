document.getElementById('transaction-form').addEventListener('submit', addTransaction);

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let chart;

function addTransaction(event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    if (description && amount && category && date) {
        const transaction = {
            id: Date.now(),
            description,
            amount,
            category,
            date
        };

        transactions.push(transaction);
        updateLocalStorage();
        updateUI();
        document.getElementById('transaction-form').reset();
    }
}

function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    updateUI();
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function updateUI() {
    const transactionsList = document.getElementById('transactions-list');
    const totalIncome = calculateTotal('income');
    const totalExpenses = calculateTotal('expense');
    const balance = totalIncome - totalExpenses;

    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
    document.getElementById('balance').textContent = balance.toFixed(2);

    transactionsList.innerHTML = '';
    transactions.forEach(transaction => {
        const transactionItem = document.createElement('li');
        transactionItem.className = transaction.category === 'income' ? 'income' : 'expense';
        transactionItem.innerHTML = `
            ${transaction.description}: $${transaction.amount.toFixed(2)} (${transaction.date})
            <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">Delete</button>
        `;
        transactionsList.appendChild(transactionItem);
    });

    updateChart();
}

function updateChart() {
    const incomeTotal = calculateTotal('income');
    const expenseTotal = calculateTotal('expense');
    const total = incomeTotal + expenseTotal;

    const data = {
        labels: ['Income', 'Expenses'],
        datasets: [{
            data: [incomeTotal, expenseTotal],
            backgroundColor: [
                '#4CAF50', // Green
                '#FFC107'// Yellow
            
            ],
            hoverOffset: 4
        }]
    };

    const ctx = document.getElementById('myChart').getContext('2d');

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        generateLabels: function(chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map(function(label, i) {
                                    const meta = chart.getDatasetMeta(0);
                                    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                                    const value = data.datasets[0].data[i];
                                    const percentage = ((value / total) * 100).toFixed(2);
                                    return {
                                        text: `${label}: ${percentage}%`,
                                        fillStyle: data.datasets[0].backgroundColor[i],
                                        hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
                                        index: i
                                    };
                                });
                            }
                            return [];
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.raw !== null) {
                                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.raw / total) * 100).toFixed(2);
                                label += `$${context.raw.toFixed(2)} (${percentage}%)`;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

function calculateTotal(category) {
    const filteredTransactions = transactions.filter(transaction => transaction.category === category);
    return filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
}

// Initialize UI with data from local storage
updateUI();
