import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  const [number, setNumber] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);

    let infoText;
    if (isNaN(value)) {
      infoText = "Invalid, please enter a number";
    } else if (value < 0) {
      infoText = "Invalid, please enter a positive number";
    } else {
      infoText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(infoText);
  };

  return (
    <div id="number-of-events">
      <label id="number-of-events-label">
        Number of Events:
        <input
          id="number-of-events-input"
          type="text"
          value={number}
          onChange={handleInputChanged}
          data-testid="numberOfEventsInput"
        />
      </label>
    </div>
  );
};

export default NumberOfEvents;
