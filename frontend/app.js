const form = document.getElementById("expense-form");
const list = document.getElementById("list");
const balanceEl = document.getElementById("balance");

let API = "http://localhost/backend";

form.addEventListener("submit", async e => {
  e.preventDefault();

  const titleVal = document.getElementById("title").value;
  const amountVal = document.getElementById("amount").value;

  await fetch(API + "/add.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: titleVal, amount: amountVal })
  });

  form.reset();
  loadExpenses();
});

async function loadExpenses() {
  const res = await fetch(API + "/get.php");
  const data = await res.json();

  list.innerHTML = "";
  let balance = 0;

  data.forEach(e => {
    balance += Number(e.amount);

    const li = document.createElement("li");
    li.textContent = `${e.title}: ₹${e.amount}`;
    list.appendChild(li);
  });

  balanceEl.textContent = balance;
}

loadExpenses();
