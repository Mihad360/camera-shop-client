import { FaCross } from "react-icons/fa";

const Filter = ({
  setCategory,
  setBrand,
  handleReset,
  uniqueBrand,
  uniqueCategory,
}) => {
  return (
    <div className="my-4 flex flex-wrap gap-4 items-center justify-center">
      {/* Filter by Category */}
      <select
        onChange={(e) => setCategory(e.target.value)}
        defaultValue=""
        aria-label="Filter by Category"
        className="w-80 px-4 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 hover:ring-blue-500"
      >
        <option value="">Select Category</option>
        {uniqueCategory.length > 0 ? (
          uniqueCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No categories available
          </option>
        )}
      </select>

      {/* Filter by Brand */}
      <select
        onChange={(e) => setBrand(e.target.value)}
        defaultValue=""
        aria-label="Filter by Brand"
        className="w-80 px-4 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 hover:ring-blue-500"
      >
        <option value="">Select Brand</option>
        {uniqueBrand.length > 0 ? (
          uniqueBrand.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No brands available
          </option>
        )}
      </select>

      {/* Reset Button */}
      <button
        onClick={handleReset}
        aria-label="Reset Filters"
        className="px-6 py-2 flex items-center gap-2 bg-fuchsia-600 text-gray-100 font-semibold text-lg hover:bg-fuchsia-500 duration-150 hover:scale-105 rounded-lg focus:ring-2 focus:ring-fuchsia-400"
      >
        Reset
      </button>
    </div>
  );
};

export default Filter;
