import { useEffect } from 'react';
import useClock from '../../hooks/useClock';
import ClockActions from '../shared/clock-actions';
import ClockDisplay from '../shared/clock-display';

const LocalClock = ({ clock, updateClock }) => {
  const { date, offset, timezone } = useClock(clock.timezone, clock.offset);

  useEffect(() => {
    updateClock({
      date,
      offset,
      timezone,
    });
  }, [date]);

  return (
    <div>
      {date && <ClockDisplay date={date} title={clock.title} timezone={timezone} offset={offset} />}
      <ClockActions local={true} />
    </div>
  );
};

export default LocalClock;
