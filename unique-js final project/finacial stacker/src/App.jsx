// src/FinancialTracker.js
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";

const FinancialTracker = () => {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");
    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });

  const [editingTransactionId, setEditingTransactionId] = useState(null);
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "income",
    date: "",
  });

  // Log transactions whenever they update
  useEffect(() => {
    console.log("🔄 Transactions Updated:", transactions);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateCharts();
  }, [transactions]);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add or update transaction
  const addTransaction = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount || !formData.date) {
      console.warn("⚠ Form fields cannot be empty!");
      return;
    }

    const newTransaction = {
      id: editingTransactionId || Date.now(),
      description: formData.description,
      amount: parseFloat(formData.amount),
      category: formData.category,
      date: formData.date,
    };

    setTransactions((prevTransactions) =>
      editingTransactionId
        ? prevTransactions.map((t) => (t.id === editingTransactionId ? newTransaction : t))
        : [...prevTransactions, newTransaction]
    );

    setEditingTransactionId(null);
    setFormData({ description: "", amount: "", category: "income", date: "" });

    console.log("✅ New Transaction Added:", newTransaction);
  };

  // Edit transaction
  const editTransaction = (id) => {
    const transaction = transactions.find((t) => t.id === id);
    if (transaction) {
      setFormData(transaction);
      setEditingTransactionId(id);
      console.log("✏ Editing Transaction:", transaction);
    }
  };

  // Delete transaction
  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
    console.log("🗑 Deleted Transaction ID:", id);
  };

  // Calculate totals
  const calculateTotal = (category) =>
    transactions
      .filter((t) => t.category === category)
      .reduce((sum, t) => sum + t.amount, 0);

  // Update Charts
  const updateCharts = () => {
    setTimeout(() => {
      updatePieChart();
      updateBarChart();
    }, 100);
  };

  const updatePieChart = () => {
    const ctx = document.getElementById("pieChart");
    if (!ctx) return;
    if (window.pieChart) window.pieChart.destroy();

    window.pieChart = new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Income", "Expenses"],
        datasets: [
          {
            data: [calculateTotal("income"), calculateTotal("expense")],
            backgroundColor: ["#4CAF50", "#FF5733"],
          },
        ],
      },
    });
  };

  const updateBarChart = () => {
    const ctx = document.getElementById("barChart");
    if (!ctx) return;
    if (window.barChart) window.barChart.destroy();

    const monthlyData = {};
    transactions.forEach((t) => {
      const month = new Date(t.date).toLocaleString("default", { month: "short" });
      if (!monthlyData[month]) monthlyData[month] = { income: 0, expense: 0 };
      monthlyData[month][t.category] += t.amount;
    });

    window.barChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: Object.keys(monthlyData),
        datasets: [
          { label: "Income", data: Object.values(monthlyData).map((m) => m.income), backgroundColor: "#4CAF50" },
          { label: "Expenses", data: Object.values(monthlyData).map((m) => m.expense), backgroundColor: "#FF5733" },
        ],
      },
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">Personal Financial Tracker</h1>

        {/* Financial Overview */}
        <section className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded-lg">
            <p className="text-gray-700">Total Income</p>
            <p className="text-lg font-bold text-green-600">${calculateTotal("income").toFixed(2)}</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg">
            <p className="text-gray-700">Total Expenses</p>
            <p className="text-lg font-bold text-red-600">${calculateTotal("expense").toFixed(2)}</p>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg">
            <p className="text-gray-700">Balance</p>
            <p className="text-lg font-bold text-blue-600">${(calculateTotal("income") - calculateTotal("expense")).toFixed(2)}</p>
          </div>
        </section>

        {/* Transaction Form */}
        <form onSubmit={addTransaction} className="mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Add Transaction</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required className="p-2 border rounded-lg" />
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Amount" required className="p-2 border rounded-lg" />
            <select name="category" value={formData.category} onChange={handleChange} className="p-2 border rounded-lg">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required className="p-2 border rounded-lg" />
          </div>
          <button type="submit" className="mt-4 bg-green-500 text-white p-2 rounded-lg w-full">
            {editingTransactionId ? "Update Transaction" : "Add Transaction"}
          </button>
        </form>

        {/* Charts */}
        <canvas id="pieChart" className="h-56"></canvas>
        <canvas id="barChart" className="h-56 mt-6"></canvas>

        {/* Transactions List */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Transaction Details</h2>
          <ul className="list-none">
            {transactions.length === 0 ? (
              <p className="text-center text-gray-500">No transactions yet</p>
            ) : (
              transactions.map((transaction) => (
                <li key={transaction.id} className="flex justify-between p-2 border-b">
                  <span>{transaction.description} - ${transaction.amount.toFixed(2)} ({transaction.date})</span>
                  <button onClick={() => deleteTransaction(transaction.id)}>🗑</button>
                </li>
              ))
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FinancialTracker;
