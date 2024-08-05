import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/svg/login.svg";
import line from "../assets/svg/line.svg";
import "../App.css";

const Reset = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    passwordError: "",
    confirmPasswordError: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.password.trim()) {
      errors.passwordError = "Password is required";
    } else if (formData.password.trim().length < 8) {
      errors.passwordError = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword.trim()) {
      errors.confirmPasswordError = "Please confirm your password";
    } else if (formData.confirmPassword.trim() !== formData.password.trim()) {
      errors.confirmPasswordError = "Passwords do not match";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleResetPassword = () => {
    const isValid = validateForm();
    if (isValid) {
      navigate("/");
    }
  };

  return (
    <>
      <section className="login">
        <div className="container-reset">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="ingin">
            <h2 className="se">Reset Password</h2>
          </div>
          <div className="line">
            <img src={line} alt="Line" />
          </div>

          <div className="password-Div">
            <input
              type="password"
              id="password"
              placeholder="Enter New Password"
              autoComplete="off"
              value={formData.password}
              onChange={handleChange}
              style={{
                fontSize: "15px",
              }}
            />
            {formErrors.passwordError && (
              <p className="error-message">{formErrors.passwordError}</p>
            )}
          </div>

          <div className="password-div-reset">
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-Enter New Password"
              autoComplete="off"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={{
                fontSize: "15px",
                marginTop: "5px",
              }}
            />
            {formErrors.confirmPasswordError && (
              <p className="error-message">{formErrors.confirmPasswordError}</p>
            )}
          </div>

          <div>
            <button className="signBtn" onClick={handleResetPassword}>
              Reset Password
            </button>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Reset;
