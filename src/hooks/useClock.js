import { useEffect } from 'react';
import { useState } from 'react';
import { addMinutes } from 'date-fns';

const init = {
  id: '',
  title: '',
  timezone: {
    type: '',
    offset: '',
  },
  date_utc0: null,
  date: null,
};

const useClock = (date, timezone, type) => {
  const [state, setState] = useState({ ...init });

  useEffect(() => {
    let utc = new Date(date);
    if (timezone) {
    } else {
      const offset = utc.getTimezoneOffset();
      utc = addMinutes(utc, offset);
    }
    console.log(utc.toLocaleString());
  }, []);

  return {
    clock: state,
  };
};

export default useClock;
