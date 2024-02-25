import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import ClockDisplay from './components/shared/clock-display';
import useClock from './hooks/useClock';

function App() {
  const { date: localClock, localOffset, localTimezone } = useClock();
  return (
    <>
      {localClock && <LocalClock date={localClock} offset={localOffset} timezone={localTimezone} />}
      <ClockList />
    </>
  );
}

export default App;
