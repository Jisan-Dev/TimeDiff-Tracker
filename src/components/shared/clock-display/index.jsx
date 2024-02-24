import React from 'react';

const ClockDisplay = ({ date, title, timezone, offset }) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>{date.toString()}</h1>
      <p>
        {' '}
        {timezone} | {offset / 60}{' '}
      </p>
    </div>
  );
};

export default ClockDisplay;
