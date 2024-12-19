import { IoSearch } from "react-icons/io5";

const SearchInput = () => {
  return (
    <div className="py-4 flex gap-2 justify-center">
      <input
        type="text"
        placeholder="Search products..."
        className="w-1/2 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        className="px-6 py-2 flex items-center gap-3 bg-blue-600 text-gray-100 font-semibold text-lg hover:bg-blue-500 duration-150 hover:transition-all hover:scale-105 rounded-lg focus:ring-2 focus:ring-blue-400"
        type="submit"
      >
        Search <IoSearch />
      </button>
    </div>
  );
};

export default SearchInput;
