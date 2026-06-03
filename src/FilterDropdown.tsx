import type { FiltersType } from "./App";

export function FilterDropdown({
  filter,
  onFilterChange,
}: {
  filter: FiltersType;
  onFilterChange: (newVal: FiltersType) => void;
}) {
  return (
    <select
      name="filter"
      id="filter"
      value={filter}
      onChange={(e) => onFilterChange(e.target.value as FiltersType)}
    >
      <option value="all">ALL</option>
      <option value="done">DONE</option>
      <option value="todo">TODO</option>
    </select>
  );
}

export default FilterDropdown;
