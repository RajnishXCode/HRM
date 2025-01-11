require("dotenv").config();
const express = require("express");
const {connect } = require("./Utility/database");
const cors = require("cors");
const Employee = require("./Models/Employee");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use("/api/employee", require("./Routes/Employee"));

app.get("/", (req, res) => {
    res.send("Welcome to HRM API");
});

app.use("/api/v1/", require("./Routes/EmployeeRoutes"));


app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connect();
});