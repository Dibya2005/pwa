const express = require('express');
const app = express();
app.use(express.json());

let transactions = [];

app.get('/transactions', (req, res) => {
  res.json(transactions);
});

app.post('/transactions', (req, res) => {
  const { type, amount, note } = req.body;
  const newTx = { id: Date.now(), type, amount: Number(amount), note };
  transactions.push(newTx);
  res.json(newTx);
});

app.get('/summary', (req, res) => {
  const income = transactions
    .filter(t => t.type === 'income')
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === 'expense')
    .reduce((a, b) => a + b.amount, 0);

  res.json({
    income,
    expense,
    profit: income - expense
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));