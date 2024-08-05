import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/svg/login.svg";
import line from "../assets/svg/line.svg";
import "../App.css";

const Forget = () => {
  const [formData, setFormData] = useState({
    email: "",
    error: null,
  });

  const navigate = useNavigate();

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (event) => {
    const inputEmail = event.target.value;
    const error = !isValidEmail(inputEmail) ? "Email is invalid" : null;

    setFormData({
      ...formData,
      email: inputEmail,
      error: error,
    });
  };

  const handleContinue = () => {
    if (isValidEmail(formData.email)) {
      navigate("/reset");
    } else {
      setFormData({
        ...formData,
        error: "Email is invalid. Please correct it.",
      });
    }
  };

  return (
    <>
      <section className="login">
        <div className="container-Div">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="ingin">
            <h2 className="se">Forgot Password ?</h2>
          </div>
          <div className="line">
            <img src={line} alt="Line" />
          </div>
          <div className="register">
            <h2>Enter Your Registered Email Address to reset password.</h2>
          </div>

          <div className="password-div">
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email Address"
              size="30"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              style={{
                fontSize: "15px",
                marginBottom: "-3px",
              }}
            />
            {formData.error && (
              <p
                style={{
                  color: "red",
                  marginTop: "3px",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {formData.error}
              </p>
            )}
          </div>

          <div>
            <button className="signBtn-forget" onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Forget;
