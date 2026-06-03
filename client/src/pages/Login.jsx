import { useState } from "react";
import {Link,useNavigate,}from "react-router-dom";
import API from "../api";
import "../css/Auth.css";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({email:"",password:"",});
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(

        "/auth/login",

        formData
      );

      localStorage.setItem(

        "email",

        formData.email
      );

      alert(res.data.message);

      navigate("/verify-otp", {

        replace: true,
      });

    } catch (err) {

      alert(

        err.response?.data?.message ||

        "Login failed"
      );
    }
  };

  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
        <p>Don’t have an account?<Link to="/register"> Register</Link></p>

      </form>

    </div>
  );
}

export default Login;