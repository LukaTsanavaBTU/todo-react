import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="wrapper">
      <h1>TODO LIST</h1>
      <div className="filter-bar">
        <Search />
      </div>
    </div>
  );
}

export default App;
