const SortMethod = ({setSort}) => {
    return (
      <div className="my-4 flex justify-end">
        <select
        onChange={(e) => setSort(e.target.value)}

        defaultValue=''
          className="px-4 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-56"
        >
          <option value="" disabled>Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>
    );
  };
  
  export default SortMethod;
  