import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const remainingBalance = budget - totalExpenses;
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  // Exercise: Create an alert when Remaining is less than 0.
  const [remaining, setRemaining] = useState(budget - expenses.reduce((total, expense) => total + expense.cost, 0)); // Calculate initial remaining balance

  // Update remaining balance whenever budget or expenses change
  useEffect(() => {
    const totalExpenses = expenses.reduce((total, expense) => total + expense.cost, 0);
    setRemaining(budget - totalExpenses);
  }, [budget, expenses]);

  useEffect(() => {
    if (remainingBalance < 0) {
      alert("Alert: You have exceeded your budget!");
    }
  }, [remainingBalance]);

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${remainingBalance}</span>
    </div>
  );
};

export default Remaining;
