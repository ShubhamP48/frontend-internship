import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "grey",
  color: "white",
};

const contentStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const isEmailValid = (value: string) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(value);
  };

  const isPhoneValid = (value: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value);
  };

  const handleSubmit = () => {
    setPhoneError(null);
    setEmailError(null);

    if (name && isPhoneValid(phone) && isEmailValid(email)) {
      localStorage.setItem("name", name);
      localStorage.setItem("phone", phone);
      localStorage.setItem("email", email);
      navigate("/second-page");
    } else {
      if (!name) {
        alert("Name is required.");
      }
      if (!isPhoneValid(phone)) {
        setPhoneError("Invalid phone number.");
      }
      if (!isEmailValid(email)) {
        setEmailError("Invalid email address.");
      }
    }
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1>First Page</h1>
        <form>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "10px" }}
            autoComplete="off"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ marginBottom: "10px" }}
            autoComplete="off"
            error={!!phoneError}
            helperText={phoneError}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: "10px" }}
            autoComplete="off"
            error={!!emailError}
            helperText={emailError}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FirstPage;
