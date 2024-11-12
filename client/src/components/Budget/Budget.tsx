import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { sendBudget } from "../../utils/budget-utils";

const Budget = () => {
  const { budget, setBudget } = useContext(AppContext); // Assuming `setBudget` is a function to update the budget in context
  const [newBudget, setNewBudget] = useState(budget); // Initialize with current budget

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      sendBudget(newBudget); // Send the new budget to the backend
      setBudget(newBudget); // Update the context with the new budget
    } catch (error) {
      console.error("Error updating budget:", error);
    }
  };

  return (
    <div className="alert alert-secondary p-3">
      <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-between">
        <label htmlFor="budget" className="me-2">Budget:</label>
        <input
          type="number"
          id="budget"
          className="form-control me-2"
          value={newBudget}
          onChange={(e) => setNewBudget(parseInt(e.target.value))}
        />
        <button type="submit" className="btn btn-primary">Set Budget</button>
      </form>
    </div>
  );
};

export default Budget;