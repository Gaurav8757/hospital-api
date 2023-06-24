const jwt = require("jsonwebtoken");
const Doctor = require("../models/doctor");
const bcrypt = require("bcryptjs");

//to register the doctor
module.exports.createDoctor = async (req, res) => {
  try {
    //check if password and confirm password matches
    if (req.body.password != req.body.confirm_password) {
      return res.status(200).json({
        message: "Passwords do not match",
      });
    }
    //find the doctor using the phone first before signing up - if email already exists
    let doctor = await Doctor.findOne({ phone: req.body.phone });

    //if doctor doesn't exist - create the user
    if (!doctor) {
      // Hash the password
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      // Create the doctor with the hashed password
      await Doctor.create({ ...req.body, password: hashedPassword });

      return res.status(200).json({
        message: "Doctor registered successfully",
      });
    } else {
      //if user/email exists - redirect back
      return res.status(422).json({
        message: "Doctor already exists",
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

//logging in a doctor
module.exports.createSession = async (req, res) => {
  try {
    //find the doctor if he/she exists using phone no
    let doctor = await Doctor.findOne({ phone: req.body.phone });
    //if do not exists or exists and password do not match
    if (
      !doctor ||
      !(await bcrypt.compare(req.body.password, doctor.password))
    ) {
      return res.status(422).json({
        message: "Invalid username or password",
      });
    }

    //if doctor exists and passwords match - login and generate jwt token
    return res.status(200).json({
      message: "Sign in successfully",
      doctorID: doctor._id,
      Name: doctor.name,
      data: {
        token: jwt.sign(doctor.toJSON(), process.env.SECRET_KEY, {
          expiresIn: "500000",
        }),
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
