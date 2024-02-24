import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

function App() {
  const { date: localClock, offset, timezone } = useClock();
  localClock && console.log(localClock);
  return (
    <>
      {localClock && <LocalClock date={localClock} offset={offset} timezone={timezone} />}
      <ClockList />
    </>
  );
}

export default App;
