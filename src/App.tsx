import { useState } from "react";
import "./App.css";
import FilterDropdown from "./FilterDropdown";
import Notes from "./Notes";
import Search from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";

export type FiltersType = "all" | "done" | "todo";

export interface NoteType {
  name: string;
  done: boolean;
  id: number;
}

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FiltersType>("all");

  function onSearchChangeHandler(newVal: string) {
    setSearch(newVal);
  }

  function onFilterChangeHandler(newVal: FiltersType) {
    setFilter(newVal);
  }

  return (
    <div className="wrapper">
      <h1>TODO LIST</h1>
      <div className="filter-bar">
        <Search search={search} onSearchChange={onSearchChangeHandler} />
        <FilterDropdown
          filter={filter}
          onFilterChange={onFilterChangeHandler}
        />
        <ThemeSwitcher />
      </div>
      <Notes search={search} filter={filter} />
    </div>
  );
}

export default App;
