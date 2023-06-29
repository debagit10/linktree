import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import LinkPage from "./Pages/LinkPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/link" Component={LinkPage} />
      </Routes>
    </div>
  );
}

export default App;
