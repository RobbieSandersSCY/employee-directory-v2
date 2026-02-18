import express from "express";
const router = express.Router();
export default router;

import employees, {
  addEmployee,
  getEmployeeByID,
  getEmployees,
  randomEmployee,
} from "#db/employees";

router.get("/", (req, res) => {
  const employees = getEmployees();
  res.status(200).send(employees);
});

router.post("/", (req, res) => {
  // send 400 if no body
  if (!body) return res.status(400).send("Request must have a body");

  const { name } = req.body;
  // send 400 if issue with name
  if (!name) return res.status(400).send("Employee needs a name");

  const employee = addEmployee(name);
  res.status(201).send(employee);
});

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
router.get("/random", (req, res) => {
  const employee = randomEmployee();
  res.send(employee);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  const employee = getEmployeeByID(+id);

  if (!employee) {
    return res.status(404).send("Employee not found");
  }

  res.send(employee);
});
