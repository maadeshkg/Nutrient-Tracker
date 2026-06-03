import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import "../css/Auth.css";
function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("email");
  const verifyOtp = async () => {
    try {

      const res = await API.post(

        "/auth/verify-otp",

        {
          email,
          otp,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/home", {
        replace: true,
      });

    } catch (err) {

      alert(
        err.response?.data?.message
      );
    }
  };

  const resendOtp = async () => {

    try {

      await API.post(
        "/auth/resend-otp",
        { email }
      );

      alert("OTP resent");

    } catch (err) {

      alert("Resend failed");
    }
  };

  return (

    <div className="auth-container">

      <div className="auth-form">

        <h2>Verify OTP</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) =>
            setOtp(e.target.value)
          }
        />

        <button onClick={verifyOtp}>
          Verify OTP
        </button>

        <button onClick={resendOtp}>
          Resend OTP
        </button>

      </div>

    </div>
  );
}

export default VerifyOtp;