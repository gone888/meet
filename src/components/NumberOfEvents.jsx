import React from "react";
import { useState } from "react";

const NumberOfEvents = ({
  currentNumberOfEvents,
  setCurrentNumberOfEvents,
}) => {
  const [number, setNumber] = useState(currentNumberOfEvents);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
    setCurrentNumberOfEvents(value);
  };

  return (
    <div id="number-of-events">
      <label>
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
