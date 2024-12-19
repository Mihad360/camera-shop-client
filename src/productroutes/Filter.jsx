const Filter = () => {
    return (
      <div className="my-4 flex gap-4">
        {/* Filter by Category */}
        <select
          className="w-80 px-4 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
        >
          <option value="" disabled>Filter by Category</option>
          <option value="DSLR">DSLR</option>
          <option value="Mirrorless">Mirrorless</option>
          <option value="Compact">Compact</option>
          <option value="Accessories">Bridge Cameras</option>
        </select>
  
        {/* Filter by Brand */}
        <select
          className="w-80 px-4 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
        >
          <option value="" disabled>Filter by Brand</option>
          <option value="Canon">Canon</option>
          <option value="Nikon">Nikon</option>
          <option value="Sony">Sony</option>
          <option value="Fujifilm">Samsung</option>
        </select>
      </div>
    );
  };
  
  export default Filter;
  