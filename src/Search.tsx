function Search({
  search,
  onSearchChange,
}: {
  search: string;
  onSearchChange: (newVal: string) => void;
}) {
  return (
    <div className="search">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search note..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button>
        <img src="/icons/search.svg" alt="" />
      </button>
    </div>
  );
}

export default Search;
