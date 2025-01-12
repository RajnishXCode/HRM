const Employee = require("../Models/Employee");
const bcrypt = require("bcrypt");
const { generateRandomPassword } = require("../services/utility");
const { generateToken } = require("../services/auth");

module.exports = {
  async registerEmployee(req, res) {
    try {
      console.log("req.body", req.body.employee_id);
      let randomPassword = generateRandomPassword(7);
      let hashedPassword = await bcrypt.hash(randomPassword, 10);

      const finalObject = {
        ...req.body,
        default_code: randomPassword,
        employee_code: hashedPassword,
      };

      let employee = await Employee.findOne({
        where: { employee_id: req.body.employee_id },
      });

      if (employee) {
        return res.status(400).json({
          status: false,
          error: "Employee already exists",
        });
      } else {
        await Employee.create(finalObject);
        res.status(200).json({
          status: true,
          message: "Employee created successfully",
          default_code: randomPassword,
          employee_id: req.body.employee_id,
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
      return res
        .status(500)
        .json({ status: false, error: errorMessages.internalServerError });
    }
  },

  async loginEmployee(req, res) {
    try {
      const { email, password } = req.body;
  
      const employee = await Employee.findOne({ where: { email } });
  
      if (!employee) {
        return res.status(404).json({ status: false, error: "Invalid Email" });
      }
  
      // Verify the password
      const isPasswordValid = await bcrypt.compare(password, employee.employee_code);
  
      if (!isPasswordValid) {
        return res.status(400).json({ status: false, error: "Invalid Password" });
      }
  
      const token = await generateToken({ id: employee.id, email: employee.email });
  
      return res.status(200).json({
        status: true,
        token,
        message: "Employee logged in successfully",
      });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ status: false, error: "Internal server error" });
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
