import express from "express";
const app = express();
export default app;

import employeesRouter from "./api/employees.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

// Error catch all
app.use((err, req, res, next) => {
  console.error(err);
  next(err);
});

app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong, sorry");
});
