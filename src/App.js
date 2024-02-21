import "./App.css";
import CountdownTimer from "./components/CountdownTimer";
// import Debouncing from './components/Debouncing';
// import Pagination from './components/Pagination';

function App() {
  return (
    <div>
      <div className="items-center">
        {/* <Debouncing/> */}
        {/* <Pagination/> */}
        <CountdownTimer />
      </div>
    </div>
  );
}

export default App;
