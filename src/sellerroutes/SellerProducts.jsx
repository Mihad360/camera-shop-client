import useProducts from "../hooks/useProducts";

const SellerProducts = () => {
  const [products] = useProducts();

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-semibold text-white mb-6">
        Your Products
      </h1>
      {products && products.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-gray-800 shadow-md rounded-lg">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-2 text-gray-300">#</th>
                <th className="py-2 text-gray-300">Image</th>
                <th className=" py-2 text-gray-300">Product Name</th>
                <th className=" py-2 text-gray-300">Category</th>
                <th className=" py-2 text-gray-300">Price</th>
                <th className=" py-2 text-gray-300">Category</th>
                <th className="py-2 text-gray-300">Stock</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr
                  key={product._id}
                  className={`border-b border-gray-700 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                  }`}
                >
                  <td className="px-4 py-2 text-center text-gray-400">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-blue-400 font-medium">
                    <img className="w-12 h-12 rounded-full object-cover" src={product.image} alt="" />
                  </td>
                  <td className="px-4 py-2 text-blue-400 font-medium">{product.title}</td>
                  <td className="px-4 py-2 text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-300">
                    ${product.price}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-300">
                    {product.stock}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-400 text-center mt-10">No products found.</p>
      )}
    </div>
  );
};

export default SellerProducts;
