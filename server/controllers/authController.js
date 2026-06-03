const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");
const transporter = require("../config/mail");

exports.register = async (req, res) => {

  try {

    const {
      username,
      email,
      password,
    } = req.body;

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {

      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = new User({

      username,

      email,

      password: hashedPassword,
    });

    await user.save();

    res.json({
      message: "Registration successful",
    });

  } catch (err) {

    res.status(500).json({
      message: "Registration failed",
    });
  }
};


exports.login = async (req, res) => {

  try {

    const {
      email,
      password,
    } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid password",
      });
    }


    const otp = otpGenerator.generate(6, {

      upperCaseAlphabets: false,

      lowerCaseAlphabets: false,

      specialChars: false,
    });

    user.otp = otp;

    user.otpExpire =
      Date.now() + 5 * 60 * 1000;

    await user.save();

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Nutrient Tracker OTP",

      text: `Your OTP is ${otp}`,
    });

    res.json({

      message: "OTP sent",

      email,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Login failed",
    });
  }
};


exports.verifyOtp = async (req, res) => {

  try {

    const {
      email,
      otp,
    } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });
    }

    if (user.otp !== otp) {

      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    if (user.otpExpire < Date.now()) {

      return res.status(400).json({
        message: "OTP Expired",
      });
    }

    const token = jwt.sign(

      {
        id: user._id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }
    );

    res.json({

      token,

      message: "Login successful",
    });

  } catch (err) {

    res.status(500).json({
      message: "OTP verification failed",
    });
  }
};


exports.resendOtp = async (req, res) => {

  try {

    const { email } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {

      return res.status(400).json({
        message: "User not found",
      });
    }

    const otp = otpGenerator.generate(6, {

      upperCaseAlphabets: false,

      lowerCaseAlphabets: false,

      specialChars: false,
    });

    user.otp = otp;

    user.otpExpire =
      Date.now() + 5 * 60 * 1000;

    await user.save();

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      to: email,

      subject: "Resend OTP",

      text: `Your OTP is ${otp}`,
    });

    res.json({
      message: "OTP resent",
    });

  } catch (err) {

    res.status(500).json({
      message: "Resend failed",
    });
  }
};