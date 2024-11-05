import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("create expense", () => {
  const app = render(
    <App/>
  );
  const createName = screen.getByTestId("name");
  const createCost = screen.getByTestId("cost");
  const createButton = screen.getByText("Save");

  fireEvent.change(createName, { target: { value: "New Expense" } });
  fireEvent.change(createCost, { target: { value: 100 } });
  fireEvent.click(createButton);

  expect(screen.getByText("New Expense")).toBeInTheDocument();
  expect(screen.getByText("Remaining: $900")).toBeInTheDocument();
  expect(screen.getByText("Spent so far: $100")).toBeInTheDocument();
});

test("delete expense", () => {
  const app = render(
    <App/>
  );
  const createName = screen.getByTestId("name");
  const createCost = screen.getByTestId("cost");
  const createButton = screen.getByText("Save");

  fireEvent.change(createName, { target: { value: "New Expense" } });
  fireEvent.change(createCost, { target: { value: 100 } });
  fireEvent.click(createButton);

  const expenseName = screen.getByText("New Expense");
  expect(expenseName).toBeInTheDocument();
  expect(screen.getByText("Remaining: $900")).toBeInTheDocument();
  expect(screen.getByText("Spent so far: $100")).toBeInTheDocument();

  const deleteButton = screen.getByText("x");
  fireEvent.click(deleteButton);

  expect(expenseName).not.toBeInTheDocument();
  expect(screen.getByText("Remaining: $1000")).toBeInTheDocument();
  expect(screen.getByText("Spent so far: $0")).toBeInTheDocument();
});

test("delete expense", () => {
  const app = render(
    <App/>
  );
  const createName = screen.getByTestId("name");
  const createCost = screen.getByTestId("cost");
  const createButton = screen.getByText("Save");

  fireEvent.change(createName, { target: { value: "New Expense" } });
  fireEvent.change(createCost, { target: { value: 100 } });
  fireEvent.click(createButton);

  const expenseName = screen.getByText("New Expense");
  expect(expenseName).toBeInTheDocument();
  expect(screen.getByText("Remaining: $900")).toBeInTheDocument();
  expect(screen.getByText("Spent so far: $100")).toBeInTheDocument();

  const deleteButton = screen.getByText("x");
  fireEvent.click(deleteButton);

  expect(expenseName).not.toBeInTheDocument();
  expect(screen.getByText("Remaining: $1000")).toBeInTheDocument();
  expect(screen.getByText("Spent so far: $0")).toBeInTheDocument();

  fireEvent.change(createName, { target: { value: "New Expense" } });
  fireEvent.change(createCost, { target: { value: 100 } });
  fireEvent.click(createButton);
});