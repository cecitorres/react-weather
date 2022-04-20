const Search = () => {
  return (<div className="weather-search">
    <form className="weather-search-form">
      <div className="my-4">
        <input type="text" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " placeholder="Search for your city" />
      </div>
      <div className="weather-search-body-button">
        <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
      </div>
    </form>
  </div>);
}

export default Search;