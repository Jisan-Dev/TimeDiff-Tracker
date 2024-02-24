import React from 'react';

const ClockDisplay = ({ date, title, timezone, offset }) => {
  const offsetHour = offset / 60;
  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>{date.toString()}</h1>
      <p>
        {timezone}
        {offsetHour < 0 ? `+${Math.abs(offsetHour)}` : `-${Math.abs(offsetHour)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
