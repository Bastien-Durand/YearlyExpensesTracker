import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [newExpenseData, setNewExpenseData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewExpenseData((newExpenseData) => ({
      ...newExpenseData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpensePayload = newExpenseData;
    newExpensePayload.date = new Date(newExpensePayload.date);
    newExpensePayload.amount = parseInt(newExpensePayload.amount);
    props.onSaveExpenseData(newExpensePayload);
    setNewExpenseData({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Groceries"
            value={newExpenseData.title}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            placeholder="$"
            min="0.01"
            step="0.01"
            name="amount"
            value={newExpenseData.amount}
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2021-12-31"
            name="date"
            value={newExpenseData.date}
            onChange={onChangeHandler}
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="button"
          onClick={() => {
            props.disableFormFunction();
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
