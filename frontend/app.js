const API = "http://localhost:5000";

const list = document.getElementById("list");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const profitEl = document.getElementById("profit");

async function load() {
  const txRes = await fetch(API + "/transactions");
  const tx = await txRes.json();

  list.innerHTML = tx.map(t =>
    `<li>${t.note} - ₹${t.amount} (${t.type})</li>`
  ).join("");

  const sumRes = await fetch(API + "/summary");
  const sum = await sumRes.json();

  incomeEl.textContent = sum.income;
  expenseEl.textContent = sum.expense;
  profitEl.textContent = sum.profit;
}

document.getElementById("form").onsubmit = async e => {
  e.preventDefault();

  await fetch(API + "/transactions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: type.value,
      amount: amount.value,
      note: note.value
    })
  });

  e.target.reset();
  load();
};

load();