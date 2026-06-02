export function FilterDropdown() {
  return (
    <select name="filter" id="filter">
      <option value="all">ALL</option>
      <option value="done">DONE</option>
      <option value="Todo">TODO</option>
    </select>
  );
}

export default FilterDropdown;
