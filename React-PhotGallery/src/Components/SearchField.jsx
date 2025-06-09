


// Components/SearchField.jsx
import { useContext, useState } from "react";
import { ImageContext } from "../App";

export default function SearchField() {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleSearch = () => {
    const query = `search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_REACT_APP_ACCESS_KEY}`;
    fetchData(query);
    setSearchImage(searchValue);
    setSearchValue("");
  };

  const handleEnterSearch = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleEnterSearch}
      />
      <button
        onClick={handleSearch}
        disabled={!searchValue}
        className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
}
