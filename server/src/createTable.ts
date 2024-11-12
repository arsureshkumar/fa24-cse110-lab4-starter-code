import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Dummy expenses data
export const expenses = [
  { id: "0", description: "Groceries", cost: 100 },
  { id: "1", description: "Gas", cost: 50 },
];

const initDB = async () => {
  // Open the database connection
  const db = await open({
    filename: "database.sqlite",
    driver: sqlite3.Database,
  });

  // Create an "expenses" table if it doesn't exist
  await db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
      id TEXT PRIMARY KEY,
      description TEXT NOT NULL,
      cost INTEGER NOT NULL
    );
  `);

  // Insert dummy data into the "expenses" table
  for (const expense of expenses) {
    await db.run(
      `INSERT OR IGNORE INTO expenses (id, description, cost) VALUES (?, ?, ?);`,
      [expense.id, expense.description, expense.cost]
    );
  }

  return db;
};

export default initDB;
