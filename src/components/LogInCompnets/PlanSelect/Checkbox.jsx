import React, { useState } from "react";

export default function CheckboxWithDescription({ label, description }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox-input"
        />
        <span className="checkmark"></span>
        <span className="checkbox-text">{label}</span>
      </label>
      <p className="checkbox-description">{description}</p>
    </div>
  );
}
