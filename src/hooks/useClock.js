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

const TIMEZONE_OFFSET = {
  PST: 7,
  EST: 4,
};

const useClock = (date, timezone, offset = 0) => {
  const [state, setState] = useState({ ...init });

  useEffect(() => {
    let utc = new Date(date);
    if (timezone) {
      if (timezone === 'PST' || timezone === 'EST') {
        offset = TIMEZONE_OFFSET[timezone];
      }
    } else {
      offset = utc.getTimezoneOffset();
    }
    utc = addMinutes(utc, offset);
    console.log(utc.toLocaleString());
  }, []);

  return {
    clock: state,
  };
};

export default useClock;
