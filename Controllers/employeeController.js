const Employee = require("../Models/Employee");
const bcrypt = require("bcrypt");

module.exports = {
  async registerEmployee(req, res) {
    try {
      console.log("req.body", req.body.employee_id);

      let employee = await Employee.findOne({
        where: { employee_id: req.body.employee_id },
      });

      if (employee) {
        return res.status(400).json({
          status: false,
          error: "Employee already exists",
        });
      } else {
        await Employee.create(req.body);
        res.status(200).json({
          status: true,
          message: "Employee created successfully",
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ status: false, error: errorMessages.internalServerError });
    }
  },

  async fetchAllEmployee(req, res) {
    try {
      const employees = await Employee.findAll();
      return res.status(200).json({ status: true, employees });
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ status: false, error: errorMessages.internalServerError });
    }
  },

  async fetchEmployeeById(req, res) {
    try {
        console.log("req.params.id", req.body.id);
      const employee = await Employee.findOne({
        where: { employee_id: req.body.id },
      });
      if (employee) {
        return res.status(200).json({ status: true, employee });
      } else {
        return res
          .status(404)
          .json({ status: false, error: "Employee not found" });
      }
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ status: false, error: errorMessages.internalServerError });
    }
  },
  
};
