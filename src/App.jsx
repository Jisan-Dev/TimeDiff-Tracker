import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

function App() {
  useClock(new Date());
  return (
    <>
      <LocalClock />
      <ClockList />
    </>
  );
}

export default App;
