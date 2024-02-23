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
  date_utc: null,
  date: null,
};

const TIMEZONE_OFFSET = {
  PST: -8 * 60,
  EDT: -4 * 60,
  EST: -5 * 60,
  MST: -7 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [state, setState] = useState({ ...init });
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let d = new Date();
    const localOffset = d.getTimezoneOffset();
    d = addMinutes(d, localOffset);
    setUtc(d);
  }, []);

  useEffect(() => {
    if (utc !== null && timezone) {
      offset = TIMEZONE_OFFSET[timezone] ?? offset;
      const UTCconverted = addMinutes(utc, offset);
      setState({
        ...state,
        date_utc: utc,
        date: UTCconverted,
      });
    } else {
      setState({
        ...state,
        date_utc: utc,
        date: utc,
      });
    }
  }, [utc]);

  return {
    clock: state,
  };
};

export default useClock;
