import { useState } from "react";
import "./App.css";
import FilterDropdown from "./FilterDropdown";
import Notes from "./Notes";
import Search from "./Search";
import ThemeSwitcher from "./ThemeSwitcher";

export type FiltersType = "all" | "done" | "todo";

export type ThemesType = "light" | "dark";

export interface NoteType {
  name: string;
  done: boolean;
  id: string;
}

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FiltersType>("all");
  const [theme, setTheme] = useState<ThemesType>("light");

  function onSearchChangeHandler(newVal: string) {
    setSearch(newVal);
  }

  function onFilterChangeHandler(newVal: FiltersType) {
    setFilter(newVal);
  }

  function themeChangeHandler() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`wrapper ${theme}`}>
      <h1>TODO LIST</h1>
      <div className="filter-bar">
        <Search search={search} onSearchChange={onSearchChangeHandler} />
        <FilterDropdown
          filter={filter}
          onFilterChange={onFilterChangeHandler}
        />
        <ThemeSwitcher theme={theme} onThemeChange={themeChangeHandler} />
      </div>
      <Notes search={search} filter={filter} />
    </div>
  );
}

export default App;
