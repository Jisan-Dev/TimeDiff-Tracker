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
  PST: -7 * 60,
  EST: -4 * 60,
};

const useClock = (label, timezone, offset = 0) => {
  const [state, setState] = useState({ ...init });

  useEffect(() => {
    let utc = new Date();
    const localOffset = utc.getTimezoneOffset();
    utc = addMinutes(utc, localOffset);

    if (timezone) {
      if (timezone === 'PST' || timezone === 'EST') {
        offset = TIMEZONE_OFFSET[timezone];
      }
      utc = addMinutes(utc, offset);
      console.log(label, utc.toLocaleString());
      return;
    }
    console.log(label, utc.toLocaleString());
  }, []);

  return {
    clock: state,
  };
};

export default useClock;
