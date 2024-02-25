import React from 'react';
import { format } from 'date-fns';

const ClockDisplay = ({ date, title, timezone, offset }) => {
  const offsetHour = offset / 60;
  return (
    <div>
      <h1>Title: {title}</h1>
      {/* <h1>{format(date, 'yyyy-MM-dd hh:mm:ss aa OOOO')}</h1> */} {/* OOOO = timezone */}
      <h1>{format(date, 'yyyy-MM-dd hh:mm:ss aa')}</h1>
      <p>
        {timezone}
        {offsetHour < 0 ? `+${Math.abs(offsetHour)}` : `-${Math.abs(offsetHour)}`}
      </p>
    </div>
  );
};

export default ClockDisplay;
