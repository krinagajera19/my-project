import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import logo from "../assets/svg/login.svg";
import line from "../assets/svg/line.svg";
import "../App.css";

const Login = () => {
  const { t,i18n } = useTranslation();
  
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleForgotPasswordClick = () => {
    navigate("/forget");
  };
  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const validateCredentials = () => {
    const errors = {};

    if (!credentials.username.trim()) {
      errors.username = "Username is required";
    } else if (!/@|\$/.test(credentials.username)) {
      errors.username = "Username must include either '@' or '$'";
    }

    if (!credentials.password.trim()) {
      errors.password = "Password is required";
    } else if (credentials.password.length < 8) {
      errors.password = "Password must be at least 8 characters ";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  const handleResetPassword = () => {
    if (validateCredentials()) {
      navigate("/dashboard");
    }
  };

  const handleTogglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <div>
        <button onClick={() => i18n.changeLanguage('en')}>English</button>
        <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
    </div>
    <div>
      <h1>{t('login_title')}</h1>
      <form>
        <button type="submit">{t('login_submit')}</button>
      </form>
    </div>
      <section className="login">
        <div className="container-reset">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="ingin">
            <h2 className="se">Sign In</h2>
          </div>
          <div className="line">
            <img src={line} alt="Line" />
          </div>
          <div className="username-Div">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Username"
              autoComplete="off"
              value={credentials.username}
              onChange={handleChange}
              style={{
                fontSize: "15px",
              }}
            />
            {error.username && (
              <p className="error-message">{error.username}</p>
            )}
          </div>

          <div className="password-Div">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Password"
              size="20"
              autoComplete="off"
              value={credentials.password}
              onChange={handleChange}
              style={{
                fontSize: "15px",
              }}
            />

            <button
              type="button"
              className="visibilityBtn"
              onClick={handleTogglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                >
                  <path
                    d="M12.997 4.72632C16.2581 4.72632 18.9048 7.37302 18.9048 10.6341C18.9048 11.3962 18.7512 12.1229 18.4853 12.7904L21.9414 16.2465C23.7255 14.7577 25.1316 12.8318 26 10.6341C23.95 5.44711 18.9107 1.77246 12.997 1.77246C11.3429 1.77246 9.75961 2.06783 8.28857 2.59953L10.8407 5.14576C11.5082 4.88583 12.2349 4.72632 12.997 4.72632Z"
                    fill="#A7A3FF"
                  />
                  <path
                    d="M1.18153 1.50648L3.87547 4.20042L4.4131 4.73804C2.46354 6.26225 0.921611 8.28863 0 10.634C2.0441 15.821 7.08931 19.4956 12.9971 19.4956C14.8285 19.4956 16.5772 19.1411 18.1782 18.4972L18.6804 18.9994L22.1246 22.4495L23.6311 20.9489L2.68801 0L1.18153 1.50648ZM7.71555 8.03457L9.54105 9.86007C9.48788 10.1141 9.45244 10.3681 9.45244 10.634C9.45244 12.5895 11.0416 14.1786 12.9971 14.1786C13.2629 14.1786 13.517 14.1432 13.7651 14.09L15.5906 15.9155C14.8049 16.3054 13.9306 16.5417 12.9971 16.5417C9.73601 16.5417 7.08931 13.8951 7.08931 10.634C7.08931 9.70056 7.32564 8.82619 7.71555 8.03457Z"
                    fill="#A7A3FF"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="23"
                  viewBox="0 0 26 23"
                  fill="none"
                >
                  <path
                    d="M12.997 4.72632C16.2581 4.72632 18.9048 7.37302 18.9048 10.6341C18.9048 11.3962 18.7512 12.1229 18.4853 12.7904L21.9414 16.2465C23.7255 14.7577 25.1316 12.8318 26 10.6341C23.95 5.44711 18.9107 1.77246 12.997 1.77246C11.3429 1.77246 9.75961 2.06783 8.28857 2.59953L10.8407 5.14576C11.5082 4.88583 12.2349 4.72632 12.997 4.72632Z"
                    fill="#A7A3FF"
                  />
                  <path
                    d="M1.18153 1.50648L3.87547 4.20042L4.4131 4.73804C2.46354 6.26225 0.921611 8.28863 0 10.634C2.0441 15.821 7.08931 19.4956 12.9971 19.4956C14.8285 19.4956 16.5772 19.1411 18.1782 18.4972L18.6804 18.9994L22.1246 22.4495L23.6311 20.9489L2.68801 0L1.18153 1.50648ZM7.71555 8.03457L9.54105 9.86007C9.48788 10.1141 9.45244 10.3681 9.45244 10.634C9.45244 12.5895 11.0416 14.1786 12.9971 14.1786C13.2629 14.1786 13.517 14.1432 13.7651 14.09L15.5906 15.9155C14.8049 16.3054 13.9306 16.5417 12.9971 16.5417C9.73601 16.5417 7.08931 13.8951 7.08931 10.634C7.08931 9.70056 7.32564 8.82619 7.71555 8.03457Z"
                    fill="#A7A3FF"
                  />
                </svg>
              )}
            </button>
            {error.password && (
              <p className="error-message">{error.password}</p>
            )}
          </div>

          <div>
            <button className="signBtn" onClick={handleResetPassword}>
              Sign In
            </button>
          </div>
          <div className="forget" onClick={handleForgotPasswordClick}>
            <h2>Forgot Password ?</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;






