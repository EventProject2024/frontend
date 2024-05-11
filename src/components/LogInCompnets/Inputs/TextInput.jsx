import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export default function TextInput({ label, type, value, onChange, isValid }) {
  const [inputFocused, setInputFocused] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    // Update the selected option when the value prop changes
    setSelectedOption(value);
  }, [value]);

  const handleFocus = () => {
    setInputFocused(true);
  };

  const handleBlur = () => {
    setInputFocused(false);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <p>
      <input
        type={type}
        className={isValid ? undefined : styles.invalid}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={!inputFocused ? label : ""}
      />
    </p>
  );
}
