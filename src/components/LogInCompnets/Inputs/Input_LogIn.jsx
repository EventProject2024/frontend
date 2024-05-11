import { useState } from "react";
import "./Input.css";
import TextInput from "./TextInput";

export default function Input_LogIn() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [inputNotValid, setInputNotValid] = useState(false);

  const handleInputChange = (identifier, value) => {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  };

  const handleLogin = () => {
    const isValid =
      !enteredEmail.includes("@") || enteredPassword.trim().length < 6;
    setInputNotValid(isValid);
    if (!isValid) {
      console.log("Logged in successfully");
    }
  };

  return (
    <>
      <div className="controls">
        <TextInput
          label="Email"
          type="email"
          value={enteredEmail}
          onChange={(value) => handleInputChange("email", value)}
          isValid={!inputNotValid}
        />
        <TextInput
          label="Password"
          type="password"
          value={enteredPassword}
          onChange={(value) => handleInputChange("password", value)}
          isValid={!inputNotValid}
        />
      </div>
      {inputNotValid && <p>Password or email not valid.</p>}
      <div className="actions">
        <button className="button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </>
  );
}
