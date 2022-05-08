import AddPassport from "./addPassport.js";
import { DisplayPassport } from "./displayPassport";
import React, { useState, useEffect } from "react";
import { Alerts } from "../../assets/snackbar";
import axios from "axios";
import "./passport.css";

const Passport = () => {
  const [open, setOpen] = useState(false);
  const [displayState, setDisplayState] = useState([]);
  const [passport, setPassport] = useState({
    passportNumber: "",
    firstName: "",
    lastName: "",
    nationality: "",
    country: "",
    dob: "",
    gender: "",
    placeOfBirth: "",
    dateOfIssue: "",
    dateOfExpiry: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setPassport({
      ...passport,
      [e.target.name]: value,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [alertOpen, setAlertOpen] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const [alertType, setAlertType] = useState("success");

  const alertPosition = {
    vertical: "top",
    horizontal: "center",
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const {
      passportNumber,
      firstName,
      lastName,
      nationality,
      country,
      dob,
      gender,
      placeOfBirth,
      dateOfIssue,
      dateOfExpiry,
    } = passport;

    const newPassport = {
      passportNumber,
      firstName,
      lastName,
      nationality,
      country,
      dob,
      gender,
      placeOfBirth,
      dateOfIssue,
      dateOfExpiry,
    };

    await axios
      .post("http://localhost:8000/dashboard/passport/", newPassport)
      .then((res) => {
        setPassport({
          passportNumber: "",
          firstName: "",
          lastName: "",
          nationality: "",
          country: "",
          dob: "",
          gender: "",
          placeOfBirth: "",
          dateOfIssue: "",
          dateOfExpiry: "",
        });
        handleClose();
        setDisplayState([...displayState, res.data.passport]);
        handleAlert(res.data.msg, res.data.type);
      });
  };

  const handleAlert = (msg, type) => {
    setAlertOpen(true);
    setAlertMessage(msg);
    setAlertType(type);
  };

  useEffect(() => {
    axios.get("http://localhost:8000/dashboard/passport").then((res) => {
      setDisplayState(res.data.passport);
    });
  }, []);

  const passportRender = [];
  displayState.sort(
    (pass1, pass2) =>
      new Date(pass2.dateOfExpiry) - new Date(pass1.dateOfExpiry)
  );
  displayState.forEach((pass) => {
    passportRender.push(<DisplayPassport passport={pass} />);
  });

  if (displayState.length) {
    return (
      <div id="Passport">
        
        <AddPassport
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          handleChange={handleChange}
          passport={passport}
          onSubmit={onSubmit}
        />
        <div id="pass-render">{passportRender}</div>
        <Alerts
          message={alertMessage}
          open={alertOpen}
          handleClose={handleAlertClose}
          alertPosition={alertPosition}
          alertType={alertType}
        />
      </div>
    );
  } else {
    return (
      <div>
      <h1 className="pass-h1">Passport</h1>
      <AddPassport
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleChange={handleChange}
        passport={passport}
        onSubmit={onSubmit}
      />
     <i>You don't have your passports saved just yet. Add it now!</i>
    </div>
    );
  }
};

export default Passport;
