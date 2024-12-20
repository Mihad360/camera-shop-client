import { FaCross } from "react-icons/fa";

const Filter = ({setCategory, setBrand, handleReset}) => {
    return (
      <div className="my-4 flex gap-4 items-center">
        {/* Filter by Category */}
        <select
        onChange={(e)=>setCategory(e.target.value)}
        defaultValue=''
          className="w-80 px-4 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="" disabled>Filter by Category</option>
          <option value="DSLR">DSLR</option>
          <option value="Mirrorless">Mirrorless</option>
          <option value="Compact">Compact</option>
          <option value="Bridge Cameras">Bridge Cameras</option>
        </select>
  
        {/* Filter by Brand */}
        <select
        onChange={(e)=>setBrand(e.target.value)}
        defaultValue=''
          className="w-80 px-4 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="" disabled>Filter by Brand</option>
          <option value="Canon">Canon</option>
          <option value="Nikon">Nikon</option>
          <option value="Sony">Sony</option>
          <option value="Samsung">Samsung</option>
        </select>
        <div>
          <button onClick={handleReset} className="px-6 py-1 flex items-center gap-3 bg-fuchsia-600 text-gray-100 font-semibold text-lg hover:bg-fuchsia-500 duration-150 hover:transition-all hover:scale-105 rounded-lg focus:ring-2">Reset</button>
        </div>
      </div>
    );
  };
  
  export default Filter;
  