/**
 * @typedef Employee
 * @property {number} id - Unique number for the employees
 * @property {string} name - Name of employee
 */
const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

/* WARNING: this must remain the default export in order for the tests to work! */
export default employees;

/**
 *
 * @returns employees
 */
export function getEmployees() {
  return employees;
}

/**
 *
 * @returns {employee} a random employee
 */
export function randomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}

/**
 *
 * @param {number} id - ID of employee to return
 * @returns {employee} the employee with the given ID
 * @returns {undefined} if no employee with the ID exists
 */
export function getEmployeeByID(id) {
  return employees.find((employee) => employee.id === id);
}

export function addEmployee(name) {
  // employee ID must be unique
  const employee = { id: employees.length + 1, name };
  employees.push(employee);
  return employee;
}
