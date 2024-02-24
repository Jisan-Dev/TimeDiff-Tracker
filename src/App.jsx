import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

function App() {
  const { date: localClock, localOffset, localTimezone } = useClock();
  localClock && console.log(localClock);
  return (
    <>
      {localClock && <LocalClock date={localClock} offset={localOffset} timezone={localTimezone} />}
      <ClockList />
    </>
  );
}

export default App;
