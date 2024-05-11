import { useState } from "react";
import TextInput from "./TextInput";
import styles from "./styles.module.css";

export default function Input_Register({ joinAsGuest, planSelect }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [inputValidities, setInputValidities] = useState({
    username: true,
    email: true,
    password: true,
    confirmPassword: true,
  });

  const handleInputChange = (identifier, value) => {
    switch (identifier) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let isFormValid = true;
    const newValidities = { ...inputValidities };

    if (!email.includes("@")) {
      newValidities.email = false;
      isFormValid = false;
    } else {
      newValidities.email = true;
    }

    if (password.trim().length < 6) {
      newValidities.password = false;
      isFormValid = false;
    } else {
      newValidities.password = true;
    }

    if (password !== confirmPassword || password.length === 0) {
      newValidities.password = false;
      newValidities.confirmPassword = false;
      isFormValid = false;
    } else {
      newValidities.password = true;
      newValidities.confirmPassword = true;
    }

    if (username.trim() === "") {
      newValidities.username = false;
      isFormValid = false;
    } else {
      newValidities.username = true;
    }

    setInputValidities(newValidities);
    return isFormValid;
  };

  const handleRegister = () => {
    if (true) {
      planSelect();
    }
  };

  return (
    <>
      <div className={styles.controls}>
        <TextInput
          label="Username"
          type="text"
          value={username}
          onChange={(value) => handleInputChange("username", value)}
          isValid={inputValidities.username}
        />
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(value) => handleInputChange("email", value)}
          isValid={inputValidities.email}
        />
        <TextInput
          label="Password"
          type="password"
          value={password}
          onChange={(value) => handleInputChange("password", value)}
          isValid={inputValidities.password}
        />
        <TextInput
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(value) => handleInputChange("confirmPassword", value)}
          isValid={inputValidities.confirmPassword}
        />
      </div>
      <div className={styles.actions}>
        <button onClick={joinAsGuest} className={styles.button}>
          Join as guest
        </button>
        <button className={styles.button} onClick={handleRegister}>
          Register
        </button>
      </div>
    </>
  );
}
