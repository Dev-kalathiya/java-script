// document.getElementById('transaction-form').addEventListener('submit', addTransaction);

// let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
// let chart;

// function addTransaction(event) {
//     event.preventDefault();

//     const description = document.getElementById('description').value;
//     const amount = parseFloat(document.getElementById('amount').value);
//     const category = document.getElementById('category').value;
//     const date = document.getElementById('date').value;

//     if (description && amount && category && date) {
//         const transaction = {
//             id: Date.now(),
//             description,
//             amount,
//             category,
//             date
//         };

//         transactions.push(transaction);
//         updateLocalStorage();
//         updateUI();
//         document.getElementById('transaction-form').reset();
//     }
// }

// function deleteTransaction(id) {
//     transactions = transactions.filter(transaction => transaction.id !== id);
//     updateLocalStorage();
//     updateUI();
// }

// function updateLocalStorage() {
//     localStorage.setItem('transactions', JSON.stringify(transactions));
// }

// function updateUI() {
//     const transactionsList = document.getElementById('transactions-list');
//     const totalIncome = calculateTotal('income');
//     const totalExpenses = calculateTotal('expense');
//     const balance = totalIncome - totalExpenses;

//     document.getElementById('total-income').textContent = totalIncome.toFixed(2);
//     document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
//     document.getElementById('balance').textContent = balance.toFixed(2);

//     transactionsList.innerHTML = '';
//     transactions.forEach(transaction => {
//         const transactionItem = document.createElement('li');
//         transactionItem.className = transaction.category === 'income' ? 'income' : 'expense';
//         transactionItem.innerHTML = `
//             ${transaction.description}: $${transaction.amount.toFixed(2)} (${transaction.date})
//             <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">Delete</button>
//         `;
//         transactionsList.appendChild(transactionItem);
//     });

//     updateChart();
// }

// function updateChart() {
//     const incomeTotal = calculateTotal('income');
//     const expenseTotal = calculateTotal('expense');
//     const total = incomeTotal + expenseTotal;

//     const data = {
//         labels: ['Income', 'Expenses'],
//         datasets: [{
//             data: [incomeTotal, expenseTotal],
//             backgroundColor: [
//                 '#4CAF50', // Green
//                 '#FFC107'// Yellow

//             ],
//             hoverOffset: 4
//         }]
//     };

//     const ctx = document.getElementById('myChart').getContext('2d');

//     if (chart) {
//         chart.destroy();
//     }

//     chart = new Chart(ctx, {
//         type: 'pie',
//         data: data,
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//                 legend: {
//                     position: 'top',
//                     labels: {
//                         generateLabels: function(chart) {
//                             const data = chart.data;
//                             if (data.labels.length && data.datasets.length) {
//                                 return data.labels.map(function(label, i) {
//                                     const meta = chart.getDatasetMeta(0);
//                                     const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
//                                     const value = data.datasets[0].data[i];
//                                     const percentage = ((value / total) * 100).toFixed(2);
//                                     return {
//                                         text: `${label}: ${percentage}%`,
//                                         fillStyle: data.datasets[0].backgroundColor[i],
//                                         hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
//                                         index: i
//                                     };
//                                 });
//                             }
//                             return [];
//                         }
//                     }
//                 },
//                 tooltip: {
//                     callbacks: {
//                         label: function(context) {
//                             let label = context.label || '';
//                             if (label) {
//                                 label += ': ';
//                             }
//                             if (context.raw !== null) {
//                                 const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
//                                 const percentage = ((context.raw / total) * 100).toFixed(2);
//                                 label += `$${context.raw.toFixed(2)} (${percentage}%)`;
//                             }
//                             return label;
//                         }
//                     }
//                 }
//             }
//         }
//     });
// }

// function calculateTotal(category) {
//     const filteredTransactions = transactions.filter(transaction => transaction.category === category);
//     return filteredTransactions.reduce((sum, t) => sum + t.amount, 0);
// }

// // Initialize UI with data from local storage
// updateUI();


// Initialize variables
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let chart;
const { jsPDF } = window.jspdf;


// DOM Elements
const transactionForm = document.getElementById('transaction-form');
const resetBtn = document.getElementById('reset-btn');
const dateInput = document.getElementById('date');
const currentMonthElement = document.getElementById('current-month');

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Set current month display
    const now = new Date();
    currentMonthElement.textContent = now.toLocaleString('default', { month: 'long', year: 'numeric' });

    // Set date input to today and restrict to current month
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
    setDateRestrictions();

    // Event listeners
    transactionForm.addEventListener('submit', addTransaction);
    resetBtn.addEventListener('click', resetAllTransactions);
    document.getElementById('view-type').addEventListener('change', updateViewType);
    document.getElementById('filter-category').addEventListener('change', filterTransactions);

    updateUI();
});

// Set date restrictions to current month only
function setDateRestrictions() {
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];

    dateInput.setAttribute('min', firstDay);
    dateInput.setAttribute('max', lastDay);

    dateInput.addEventListener('change', function () {
        const selectedDate = new Date(this.value);
        const currentDate = new Date();

        if (selectedDate.getMonth() !== currentDate.getMonth() ||
            selectedDate.getFullYear() !== currentDate.getFullYear()) {
            showToast('You can only add transactions for the current month', 'error');
            this.value = currentDate.toISOString().split('T')[0];
        }
    });
}

// Add new transaction
function addTransaction(event) {
    event.preventDefault();

    const description = document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const date = document.getElementById('date').value;

    // Validation
    if (!description || isNaN(amount) || !date) {
        showToast('Please fill all fields correctly', 'error');
        return;
    }

    const transaction = {
        id: Date.now(),
        description,
        amount: category === 'income' ? Math.abs(amount) : -Math.abs(amount),
        category,
        date
    };

    transactions.push(transaction);
    updateLocalStorage();
    updateUI();
    transactionForm.reset();
    showToast('Transaction added successfully');
}

// Delete a transaction
function deleteTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
    updateLocalStorage();
    updateUI();
    showToast('Transaction deleted', 'warning');
}

// Reset all transactions
function resetAllTransactions() {
    if (transactions.length === 0) {
        showToast('No transactions to reset', 'warning');
        return;
    }

    if (confirm('Are you sure you want to reset all data? This cannot be undone.')) {
        transactions = [];
        updateLocalStorage();
        updateUI();
        showToast('All data has been reset', 'warning');
    }
}

// Reset filters
function resetFilters() {
    document.getElementById('view-type').value = 'all';
    document.getElementById('filter-category').value = 'all';
    document.getElementById('start-date').value = '';
    document.getElementById('end-date').value = '';
    document.getElementById('custom-range-filters').style.display = 'none';
    renderTransactionsList();
    showToast('Filters reset');
}

// Update view type (all/month/year/custom)
function updateViewType() {
    const viewType = document.getElementById('view-type').value;
    const customRangeFilters = document.getElementById('custom-range-filters');

    if (viewType === 'custom') {
        customRangeFilters.style.display = 'flex';
        // Set default range to current month
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().split('T')[0];
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().split('T')[0];
        document.getElementById('start-date').value = firstDay;
        document.getElementById('end-date').value = lastDay;
    } else {
        customRangeFilters.style.display = 'none';
    }

    filterTransactions();
}

// Filter transactions based on view type and category
function filterTransactions() {
    const viewType = document.getElementById('view-type').value;
    const categoryFilter = document.getElementById('filter-category').value;

    let filtered = [...transactions];

    // Apply view type filter
    const now = new Date();
    switch (viewType) {
        case 'month':
            filtered = filtered.filter(t => {
                const transDate = new Date(t.date);
                return transDate.getMonth() === now.getMonth() &&
                    transDate.getFullYear() === now.getFullYear();
            });
            break;
        case 'year':
            filtered = filtered.filter(t => {
                const transDate = new Date(t.date);
                return transDate.getFullYear() === now.getFullYear();
            });
            break;
        case 'custom':
            const startDate = document.getElementById('start-date').value;
            const endDate = document.getElementById('end-date').value;
            if (startDate && endDate) {
                filtered = filtered.filter(t => t.date >= startDate && t.date <= endDate);
            }
            break;
        // 'all' - no date filtering
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
        filtered = filtered.filter(t => t.category === categoryFilter);
    }

    renderTransactionsList(filtered);
}

// Render transactions list
function renderTransactionsList(transactionsToRender = transactions) {
    const transactionsList = document.getElementById('transactions-list');

    transactionsList.innerHTML = '';

    if (transactionsToRender.length === 0) {
        transactionsList.innerHTML = '<li class="no-transactions">No transactions found</li>';
        return;
    }

    // Sort by date (newest first)
    const sortedTransactions = [...transactionsToRender].sort((b, a) => new Date(b.date) - new Date(a.date));

    sortedTransactions.forEach(transaction => {
        const transactionItem = document.createElement('li');
        transactionItem.className = transaction.category === 'income' ? 'income' : 'expense';
        transactionItem.innerHTML = `
            


            <div class="transaction-details">
            <span class="transaction-amount">₹${Math.abs(transaction.amount).toFixed(2)}</span>
            </div>

            <div class="transaction-main">
                <span class="transaction-description">${transaction.description}</span>
              
              
            </div>

            <div class="transaction-details">
           
            <span class="transaction-date">${formatDate(transaction.date)}</span>
            </div>
            
            
            <button class="delete-btn" onclick="deleteTransaction(${transaction.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        transactionsList.appendChild(transactionItem);
    });
}

// Calculate total for a category
function calculateTotal(category) {
    const filteredTransactions = transactions.filter(transaction => transaction.category === category);
    return filteredTransactions.reduce((sum, t) => sum + Math.abs(t.amount), 0);
}

// Update the chart
function updateChart() {
    const incomeTotal = calculateTotal('income');
    const expenseTotal = calculateTotal('expense');
    const total = incomeTotal + expenseTotal;

    const data = {
        labels: ['Income', 'Expenses'],
        datasets: [{
            data: [incomeTotal, expenseTotal],
            backgroundColor: ['#4CAF50', '#FFC107'],
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
                        generateLabels: function (chart) {
                            const data = chart.data;
                            if (data.labels.length && data.datasets.length) {
                                return data.labels.map(function (label, i) {
                                    const meta = chart.getDatasetMeta(0);
                                    const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                                    const value = data.datasets[0].data[i];
                                    const percentage = total > 0 ? ((value / total) * 100).toFixed(2) : '0';
                                    return {
                                        text: `${label}: ₹${value.toFixed(2)} (${percentage}%)`,
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
                        label: function (context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.raw !== null) {
                                label += `₹${context.raw.toFixed(2)}`;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Update the UI
function updateUI() {
    const totalIncome = calculateTotal('income');
    const totalExpenses = calculateTotal('expense');
    const balance = totalIncome - totalExpenses;

    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
    document.getElementById('balance').textContent = balance.toFixed(2);

    // Update balance color
    const balanceElement = document.getElementById('balance');
    balanceElement.style.color = balance >= 0 ? '#28a745' : '#dc3545';

    renderTransactionsList();
    updateChart();
}

// Update local storage
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Export to PDF




function exportToPDF() {
  if (!transactions || transactions.length === 0) {
    showToast('No transactions to export', 'warning');
    return;
  }

  const doc = new jsPDF();
  const now = new Date();
  const title = `Financial Report - ${now.toLocaleDateString()}`;
  const currency = 'INR ';

  // Title
   // Header Title
   doc.setFont("helvetica", "bold");
   doc.setFontSize(18);
   doc.setTextColor(44, 62, 80); // Dark Blue
   doc.text(title, 14, 20);
 
   // Summary Section
   doc.setFontSize(12);
   doc.setFont("helvetica", "normal");
   doc.setTextColor(33, 33, 33);
 
   const totalIncome = calculateTotal("income");
   const totalExpenses = calculateTotal("expense");
   const balance = totalIncome - totalExpenses;
 
   let summaryStartY = 35;
   const lineSpacing = 8;
 
   doc.setFont("helvetica", "bold");
   doc.text("Summary", 14, summaryStartY);
   doc.setFont("helvetica", "normal");
 
   doc.text(`${currency}${totalIncome.toFixed(2)} - Total Income`, 14, summaryStartY + lineSpacing);
   doc.text(`${currency}${totalExpenses.toFixed(2)} - Total Expenses`, 14, summaryStartY + 2 * lineSpacing);
   doc.text(`${currency}${balance.toFixed(2)} - Balance`, 14, summaryStartY + 3 * lineSpacing);
 
   // Table Headers
   const headers = [["Date", "Description", "Category", "Amount"]];
   const data = transactions.map(t => [
     formatDate(t.date),
     t.description,
     capitalizeFirstLetter(t.category),
     `${currency}${Math.abs(t.amount).toFixed(2)}`
   ]);
 
   // AutoTable
   doc.autoTable({
     head: headers,
     body: data,
     startY: summaryStartY + 5 * lineSpacing,
     styles: {
       fontSize: 10,
       cellPadding: 4,
       lineColor: [220, 220, 220],
       lineWidth: 0.2,
       textColor: [34, 34, 34],
       valign: 'middle'
     },
     headStyles: {
       fillColor: [0, 123, 255],
       textColor: 255,
       fontStyle: 'bold',
       halign: 'center'
     },
     alternateRowStyles: {
       fillColor: [248, 249, 250]
     },
     columnStyles: {
       0: { cellWidth: 30 }, // Date
       1: { cellWidth: 80 }, // Description
       2: { cellWidth: 30 }, // Category
       3: { cellWidth: 30, halign: 'right' } // Amount
     },
     didDrawPage: function (data) {
       doc.setFontSize(10);
       doc.setTextColor(150);
       doc.text(`Page ${data.pageCount}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
     }
   });
 
   // Save the PDF
   const filename = `financial_report_${now.toISOString().split("T")[0]}.pdf`;
   doc.save(filename);
 
   showToast("PDF exported successfully");
 }
 
 // Helper functions
 function formatDate(date) {
   return new Date(date).toLocaleDateString("en-IN", {
     year: "numeric",
     month: "short",
     day: "numeric"
   });
 }
 
 function capitalizeFirstLetter(str) {
   return str.charAt(0).toUpperCase() + str.slice(1);
 }
 

  
  // Utilities
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function formatDate(date) {
    return new Date(date).toLocaleDateString();
  }

// Helper functions
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}


// Helper functions
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}



// For Excel export
function exportToExcel() {
    if (transactions.length === 0) {
        showToast('No transactions to export', 'warning');
        return;
    }

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(transactions.map(t => ({
        Date: formatDate(t.date),
        Description: t.description,
        Category: t.category.charAt(0).toUpperCase() + t.category.slice(1),
        Amount: Math.abs(t.amount),
        Type: t.category === 'income' ? 'Income' : 'Expense'
    })));

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Transactions");

    // Add summary sheet
    const summaryData = [
        ["Total Income", calculateTotal('income')],
        ["Total Expenses", calculateTotal('expense')],
        ["Balance", calculateTotal('income') - calculateTotal('expense')]
    ];
    const ws2 = XLSX.utils.aoa_to_sheet(summaryData);
    XLSX.utils.book_append_sheet(wb, ws2, "Summary");

    // Export file
    XLSX.writeFile(wb, `financial_report_${new Date().toISOString().slice(0, 10)}.xlsx`);
    showToast('Excel file exported successfully');
}

// Export to JSON
function exportToJSON() {
    if (transactions.length === 0) {
        showToast('No transactions to export', 'warning');
        return;
    }

    const dataStr = JSON.stringify(transactions, null, 2);
    downloadFile(dataStr, 'transactions.json', 'application/json');
    showToast('Data exported to JSON');
}

// Helper function to download files
function downloadFile(content, fileName, contentType) {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-exclamation-triangle'}"></i> ${message}`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
    }, 100);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 3000);
}