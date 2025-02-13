import React, { useState } from "react";
import "./EmployeeDetailsForm.css";

function EmployeeDetailsForm() {
  const [employeeData, setEmployeeData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    dob: "",
    phoneNo: "",
    email: "",
    hobbies: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNo" && !/^[0-9]{0,10}$/.test(value)) {
      errors.phoneNo = "Phone number must be 10 digits.";
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)  && value) {
      errors.email = "Invalid email format.";
    } else {
      delete errors[name];
    }

    setEmployeeData({
      ...employeeData,
      [name]: value,
    });

    setErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, dob, phoneNo, email, address } =
      employeeData;
    if (
      !firstName ||
      !lastName ||
      !dob ||
      !phoneNo ||
      !email ||
      !address
    ) {
      alert("Mandatory field(s) missing.");
      return;
    }
    alert("Data is saved.");
    console.log("Employee Data:", employeeData);
  };

  return (
    <div className="employee-form">
      <h1>EMPLOYEE DETAILS FORM</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>
            First Name <span className="required"> *</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Enter your first name"
            value={employeeData.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            placeholder="Enter your middle name"
            value={employeeData.middleName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="lastName">
            Last Name <span className="required"> *</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Enter your last name"
            value={employeeData.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="dob">
            Date of Birth <span className="required"> *</span>
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={employeeData.dob}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-input">
          <label>
            Phone Number <span className="required"> *</span>
          </label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            placeholder="Enter 10-digit number"
            value={employeeData.phoneNo}
            onChange={handleInputChange}
          />
          {errors.phoneNo && (
            <span className="error">{errors.phoneNo}</span>
          )}
        </div>

        <div className="form-input">
          <label htmlFor="email">
            Email ID <span className="required"> *</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter a valid email"
            value={employeeData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>

        <div className="form-input">
          <label htmlFor="hobbies">Hobbies</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            placeholder="Enter your hobbies"
            value={employeeData.hobbies}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-input">
          <label htmlFor="address">
            Address<span className="required"> *</span>
          </label>
          <textarea
            id="address"
            name="address"
            placeholder="Enter your address (max 100 characters)"
            maxLength={100}
            value={employeeData.address}
            onChange={handleInputChange}
          />
          {errors.address && (
            <span className="error">{errors.address}</span>
          )}
        </div>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EmployeeDetailsForm;
