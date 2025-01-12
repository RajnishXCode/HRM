const route = require("express").Router();
const {
  registerEmployee,
  loginEmployee,
  fetchAllEmployee,
  fetchEmployeeById,
} = require("../Controllers/employeeController");

route.post("/employee/register", registerEmployee);
route.get("/employee/fetchAll", fetchAllEmployee);
route.get("/employee/fetchOne", fetchEmployeeById);
route.post("/employee/signin", loginEmployee);

module.exports = route;
