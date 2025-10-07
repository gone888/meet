import React from "react";
import { useState } from "react";

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  const [number, setNumber] = useState(currentNOE);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNOE(value);
  };

  return (
    <div id="number-of-events">
      <label id="number-of-events-label">
        Number of Events:
        <input
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
