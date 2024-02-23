import ClockList from './components/clock-list';
import LocalClock from './components/local-clock';
import useClock from './hooks/useClock';

function App() {
  const { clock: local } = useClock();
  const { clock: edt } = useClock('EDT');
  const { clock: est } = useClock('EST');
  const { clock: pst } = useClock('PST');
  const { clock: mst } = useClock('MST');
  const { clock: pakistan } = useClock('UTC', 5 * 60);

  console.log('local UTC', local.date);
  console.log('EDT', edt.date);
  console.log('EST', est.date);
  console.log('PST', pst.date);
  console.log('MST', mst.date);
  console.log('Pakistan', pakistan.date);
  return (
    <>
      <LocalClock />
      <ClockList />
    </>
  );
}

export default App;
