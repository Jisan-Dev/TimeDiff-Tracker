import { useEffect } from 'react';
import { useState } from 'react';
import { addMinutes } from 'date-fns';

const TIMEZONE_OFFSET = {
  PST: -8 * 60,
  EDT: -4 * 60,
  EST: -5 * 60,
  MST: -7 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [localDate, setLocalDate] = useState(null);
  const [localTimezone, setLocalTimezone] = useState('');
  const [localOffset, setLocalOffset] = useState(0);
  const [utc, setUtc] = useState(null); //local state

  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
    d = addMinutes(d, lo);
    setUtc(d);
    setLocalOffset(lo);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;
        const UTCconverted = addMinutes(utc, offset);
        setLocalDate(UTCconverted);
      } else {
        const UTCconverted = addMinutes(utc, -localOffset);
        const dateStrArray = UTCconverted.toUTCString().split(' ');
        setLocalDate(UTCconverted);
        setLocalTimezone(dateStrArray.pop());
        // TODO: find timezone
      }
    }
  }, [utc]);

  return {
    date: localDate,
    dateUTC: utc,
    timezone,
    localTimezone,
    offset,
    localOffset,
  };
};

export default useClock;
