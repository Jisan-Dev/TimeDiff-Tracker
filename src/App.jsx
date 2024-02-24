import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

function App() {
  const { date: localClock } = useClock();
  localClock && console.log(localClock);
  return (
    <>
      <LocalClock />
      <ClockList />
    </>
  );
}

export default App;
