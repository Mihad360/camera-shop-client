import useAllproducts from "../hooks/useAllproducts";
import useAxiossecure from "../hooks/useAxiossecure";
import Swal from "sweetalert2";

const AllProducts = () => {
  const [products, refetch] = useAllproducts();
  const axiosSecure = useAxiossecure();

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/admin-products/${id}`).then((res) => {
          console.log(res);
          if (res?.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "This product has been Removed.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-white">
          Seller Products
        </h1>
        <p className="text-2xl font-semibold text-white">
          Total {products.length} Products
        </p>
      </div>
      {products && products.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-gray-800 shadow-md rounded-lg">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-gray-300">#</th>
                <th className="px-4 py-2 text-gray-300">Image</th>
                <th className="px-4 py-2 text-gray-300">Product Name</th>
                <th className="px-4 py-2 text-gray-300">Category</th>
                <th className="px-4 py-2 text-gray-300">Brand</th>
                <th className="px-4 py-2 text-gray-300">Seller Email</th>
                <th className="px-4 py-2 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={product._id}
                  className={`border-b border-gray-700 ${
                    index % 2 === 0 ? "bg-gray-800" : "bg-gray-900"
                  }`}
                >
                  <td className="px-4 py-2 text-center text-gray-400">
                    {index + 1}
                  </td>
                  <td>
                    <img
                      className="w-14 h-14 object-cover"
                      src={product.image}
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-2 text-blue-400 font-medium">
                    {product.title}
                  </td>
                  <td className="px-4 py-2 text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-300">
                    {product.brand}
                  </td>
                  <td className="px-4 py-2 text-center text-amber-300">
                    {product.sellerEmail}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button
                      onClick={() => handledelete(product._id)}
                      className="bg-red-600 text-white py-1 px-3 ml-2 rounded-md shadow-md hover:bg-red-700 transition-all"
                    >
                      Remove Product
                    </button>
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

export default AllProducts;
