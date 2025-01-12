require("dotenv").config();
const express = require("express");
const {connect } = require("./services/database");
const cors = require("cors");
const Employee = require("./Models/Employee");
const { verifyToken } = require("./services/auth");

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

app.post("/api/auth/validate-session", async (req, res) => {
    const token = req.headers.authorization;
    console.log("token", req.headers);
    if (!token) {
        return res.status(401).json({ status: false, error: "Unauthorized" });
    }
    const decoded = await verifyToken(token);
    console.log("decoded", decoded);
    if (!decoded) {
        return res.status(401).json({ status: false, error: "Unauthorized" });
    }
    res.status(200).json({ status: true, message: "Token is valid" });
});

app.use("/api/v1/", require("./Routes/EmployeeRoutes"));


app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    await connect();
});