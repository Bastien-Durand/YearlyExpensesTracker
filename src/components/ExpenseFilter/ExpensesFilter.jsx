import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const optionSelectorHandler = (e) => {
    const yearSelected = e.target.value;
    props.onHoistYearData(yearSelected);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={optionSelectorHandler}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
