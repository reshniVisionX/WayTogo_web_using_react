import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/navbar.css";

function NavBar() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    number: '',
    email: '',
    password: '',
    rpassword: '',
  });

  const validateInputs = () => {
    let success = true;
    const { number, email, password, rpassword } = formData;

    const setError = (element, message) => {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector(".error");
      errorElement.innerText = message;
      inputGroup.classList.add("error");
      inputGroup.classList.remove("success");
    }

    const setSuccess = (element) => {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector(".error");
      errorElement.innerText = "";
      inputGroup.classList.add("success");
      inputGroup.classList.remove("error");
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9-]+\.){1,}[a-zA-Z]{2,}$/
        );
    };

    if (number < 10) {
      success = false;
      setError(number, "Phone number invalid");
    } else setSuccess(number);

    if (email === "") {
      success = false;
      setError(email, "Email is required");
    } else if (!validateEmail(email)) {
      success = false;
      setError(email, "Email is invalid");
    } else setSuccess(email);

    if (password === "") {
      success = false;
      setError(password, "Password is required");
    } else if (password.length < 8) {
      success = false;
      setError(password, "Password must be 8 characters long");
    } else setSuccess(password);

    if (rpassword !== password) {
      success = false;
      setError(rpassword, "Password doesn't match");
    } else setSuccess(rpassword);

    if (success) {
      console.log("User inputs are valid");
      submitForm();
    }
  }

  const submitForm = async () => {
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          number: formData.number,
          email: formData.email,
          password: formData.password,
          rpassword: formData.rpassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      } else {
        console.log("Stored in db");
      }

      window.location.href = "/contact";
    } catch (error) {
      console.error(error);
      alert("Error in inputs");
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <div className="header-nav">
        <div className="head-container">
          <h1 style={{ display: "inline-block" }}>
            <span style={{ color: "#0ceedf" }}>Way</span>{" "}
            <span style={{ color: "#170234" }}>To</span>Go{" "}
          </h1>
          <img
            src="logos/logo.png"
            alt="logo"
            style={{ display: "inline-block", height: "50px", width: "50px" }}
          />
        </div>
        <div className="navbar">
          <h3>
            <Link to="/">Home</Link>
          </h3>
          <h3>
            <Link to="/trending">Trending</Link>
          </h3>
          <h3>
            <Link to="/destinations">Our Destinations</Link>
          </h3>
          <h3>
            <Link to="/resources">Resources</Link>
          </h3>
          <h3>
            <Link to="/services">Our Services</Link>
          </h3>
          <h3>
            <Link to="/contact">Contact us</Link>
          </h3>
          <button onClick={() => setFormVisible(true)} style={{ width: "auto" }}>
            Register
          </button>
        </div>
      </div>

      <div id="id01" className={`modal ${isFormVisible ? "show" : ""}`}>
        <form
          className="modal-content animate"
          id="form"
          action="/register"
          method="post"
        >
          <div className="imgcontainer">
            <span
              onClick={() => setFormVisible(false)}
              className="close"
              title="Close Modal"
            >
              &times;
            </span>
            <img
              src="https://cdn2.iconfinder.com/data/icons/business-man-8/512/7-1024.png"
              alt="Avatar"
              className="avatar"
            />
          </div>
          <div className="container-log" style={{ textAlign: "center" }}>
            <h1>Register</h1>
            <div className="input-group-nav">
              <input  className = "number-ph"
                type="number"
                id="number"
                name="number"
                placeholder="Enter phone number..."
                value={formData.number}
                onChange={handleInputChange}
              />
              <div className="error"></div>
            </div>
            <div className="input-group">
              <input
                type="text"
                id="email1"
                name="email"
                placeholder="Email id"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className="error"></div>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password1"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="error"></div>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="rpassword"
                name="rpassword"
                placeholder="Re-enter Password"
                value={formData.rpassword}
                onChange={handleInputChange}
              />
              <div className="error"></div>
            </div>
            <button
              type="submit"
              id="btn-login2"
              onClick={() => validateInputs()}
              style={{ width: "auto" }}
            >
              Register
            </button>
            <br />
            <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
              <button
                type="button"
                onClick={() => validateInputs()}
                className="cancelbtn-r"
              >
                Cancel
              </button>
              <span className="psw">
                Forgot <a href="/">password?</a>
              </span>
              <span className="label success1">Google</span>
              <span className="label info1">Facebook</span>
              <span className="label warning">Twitter</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NavBar;
