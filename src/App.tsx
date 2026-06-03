import "./App.css";
import FilterDropdown from "./FilterDropdown";
import Notes from "./Notes";
import Search from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <div className="wrapper">
      <h1>TODO LIST</h1>
      <div className="filter-bar">
        <Search />
        <FilterDropdown />
        <ThemeSwitcher />
      </div>
      <Notes />
    </div>
  );
}

export default App;
