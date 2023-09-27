import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
    const savedData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setShowForm(false);
    props.onSaveToAppjs(savedData);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const disableShowFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          disableFormFunction={disableShowFormHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
