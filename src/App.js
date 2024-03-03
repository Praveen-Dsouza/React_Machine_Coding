import "./App.css";
// import { useState } from "react";
// import { fileData } from "./utils/Constants";
// import Folder from "./components/Folder";
import StarRating from "./components/StarRating";
// import CountdownTimer from "./components/CountdownTimer";
// import FilterSearchResults from "./components/FilterSearchResults";
// import ProgressBar from "./components/ProgressBar";
// import Debouncing from './components/Debouncing';
// import Pagination from './components/Pagination';

function App() {
  // const [explorerData, setExplorerData] = useState(fileData);

  return (
    <div>
      <div className="items-center">
        {/* <Debouncing/> */}
        {/* <Pagination/> */}
        {/* <CountdownTimer /> */}
        {/* <FilterSearchResults/> */}
        {/* <ProgressBar /> */}
        {/* <Folder explorer={explorerData} /> */}
        <StarRating/>
      </div>
    </div>
  );
}

export default App;
