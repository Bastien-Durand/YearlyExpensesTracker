import { useState } from "react";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const ExpensesCollection = (props) => {
  const [yearFilter, setYearFilter] = useState("2021");

  const filterByYearData = (data) => {
    setYearFilter(data);
  };
  console.log(`YEAR STATE: ${yearFilter}`);

  const filteredExpenses = props.collection.filter((item) => {
    return item.date.getFullYear() == yearFilter;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          onHoistYearData={filterByYearData}
          selected={yearFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
};

export default ExpensesCollection;
