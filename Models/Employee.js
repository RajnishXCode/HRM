const { DataTypes } = require("sequelize");
const {sequelize} = require("../Utility/database");

const Employee = sequelize.define("Employee", {
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // Personal Information
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dob: {
        type: DataTypes.DATE,
        allowNull: false
    },
    bloodGroup: {
        type: DataTypes.ENUM("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pincode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // Employee Government IDs records with image upload links
    aadhar_no: {
        type: DataTypes.JSON,
        allowNull: false
    },
    pan_no: {
        type: DataTypes.JSON,
        allowNull: false
    },
    passport_no: {
        type: DataTypes.JSON,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // Employee Highest Qualification Information
    qualification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    institute: {
        type: DataTypes.STRING,
        allowNull: false
    },
    passing_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    // Employee Bank Account Information
    bank_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    account_no: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ifsc_code: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // General Official Information
    hire_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    workLocation: {
        type: DataTypes.ENUM("office", "remote"),
        defaultValue: "office",
        allowNull: false
    },
    workStatus: {
        type: DataTypes.ENUM("Allocated", "Unallocated", "On-Bench"),
        defaultValue: "Unallocated",
        allowNull: false
    },
    skills: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    proficiency_level : {
        type: DataTypes.ENUM("Beginner", "Intermediate", "Expert"),
        defaultValue: "Beginner",
        allowNull: false
    },
    // Employee Official Documents records with image upload links
    resume: {
        type: DataTypes.STRING,
        allowNull: false
    },
    offer_letter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    joining_letter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    experience_letter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    relieving_letter: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // Employee Emergency Contact Information
    emergency_contact_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emergency_contact_relation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emergency_contact_phone: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Employee;
