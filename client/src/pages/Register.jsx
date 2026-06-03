import { useState } from "react";
import {Link,useNavigate}from "react-router-dom";
import API from "../api";
import "../css/Auth.css";
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({username:"",email:"",password:"",});
  const handleChange = (e) => {
    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/", {
        replace: true,
      });

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h2>Register</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit"> Register</button>
        <p>  Already have an account?
          <Link to="/">Login </Link>
        </p>

      </form>

    </div>
  );
}

export default Register;