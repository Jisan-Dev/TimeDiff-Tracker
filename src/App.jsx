import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import ClockDisplay from './components/shared/clock-display';
import useClock from './hooks/useClock';

function App() {
  const { date: localClock, localOffset, localTimezone } = useClock();
  const { date: india, offset, timezone } = useClock('GMT', -5.5 * 60);
  const { date: pakistan, offset: offset2, timezone: timezone2 } = useClock('GMT', -5 * 60);
  return (
    <>
      {localClock && <LocalClock date={localClock} offset={localOffset} timezone={localTimezone} />}
      <ClockList />
      {india && <ClockDisplay date={india} title={'India'} offset={offset} timezone={timezone} />}
      {pakistan && (
        <ClockDisplay date={pakistan} title={'Pakistan'} offset={offset2} timezone={timezone2} />
      )}
    </>
  );
}

export default App;
