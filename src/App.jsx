import "./App.css";
import { useState } from "react";
import ExpensesCollection from "./components/Expenses/ExpensesCollection";
import ExpensesData from "./Data/ExpensesData";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const [stateExpensesData, setStateExpensesData] = useState(ExpensesData);

  const saveNewExpenseData = (newData) => {
    setStateExpensesData((prevState) => [newData, ...prevState]);
  };

  return (
    <>
      <NewExpense onSaveToAppjs={saveNewExpenseData} />
      <ExpensesCollection collection={stateExpensesData} />
    </>
  );
};

export default App;
