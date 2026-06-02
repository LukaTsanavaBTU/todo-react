function Search() {
  return (
    <div className="search">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search note..."
      />
      <button>
        <img src="/icons/search.svg" alt="" />
      </button>
    </div>
  );
}

export default Search;
