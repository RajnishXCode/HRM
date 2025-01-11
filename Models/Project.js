// const mongoose = require("mongoose");
const { DataTypes } = require("sequelize");
const {sequelize} = require("../Utility/database");

const Project = sequelize.define("Project", {
    project_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    project_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    project_start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    project_final_deadline: {
        type: DataTypes.DATE,
        allowNull: true
    },
    project_manager: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    project_leader: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    project_team: { // Array of Active and Inactive Employees {active: [emp_id1, emp_id2], inactive: [emp_id3, emp_id4]} 
        type: DataTypes.JSONB,
        allowNull: false
    },
    project_status: {
        type: DataTypes.ENUM("In-Progress", "Completed"),
        allowNull: false
    }
});

module.exports = Project;