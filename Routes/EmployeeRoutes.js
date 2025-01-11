const route = require("express").Router();
const { registerEmployee, fetchAllEmployee, fetchEmployeeById } = require("../Controllers/employeeController");

route.post("/employee/register", registerEmployee);
route.get("/employee/fetchAll", fetchAllEmployee);
route.get("/employee/fetchOne", fetchEmployeeById);

module.exports = route;


