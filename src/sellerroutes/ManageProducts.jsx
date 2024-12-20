import Swal from "sweetalert2";
import useProducts from "../hooks/useProducts";
import useAxiossecure from "../hooks/useAxiossecure";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, refetch] = useProducts();
  const axiosSecure = useAxiossecure();

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${id}`).then((res) => {
          console.log(res);
          if (res?.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Product has been deleted.",
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
      <h1 className="text-3xl font-semibold text-white mb-6">
        Manage Products
      </h1>
      {products && products.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-gray-800 shadow-md rounded-lg">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-gray-300">#</th>
                <th className="px-4 py-2 text-gray-300">Product Name</th>
                <th className="px-4 py-2 text-gray-300">Category</th>
                <th className="px-4 py-2 text-gray-300">Brand</th>
                <th className="px-4 py-2 text-gray-300">Stock</th>
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
                  <td className="px-4 py-2 text-blue-400 font-medium">
                    {product.title}
                  </td>
                  <td className="px-4 py-2 text-gray-300">
                    {product.category}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-300">
                    {product.brand}
                  </td>
                  <td className="px-4 py-2 text-center text-gray-300">
                    {product.stock}
                  </td>
                  <td className="px-4 py-2 text-center">
                    <Link to={`/dashboard/manage-products/edit-product/${product._id}`} className="bg-blue-600 text-white py-1 px-3 rounded-md shadow-md hover:bg-blue-700 transition-all">
                      Edit
                    </Link>
                    <button
                      onClick={() => handledelete(product._id)}
                      className="bg-red-600 text-white py-1 px-3 ml-2 rounded-md shadow-md hover:bg-red-700 transition-all"
                    >
                      Delete
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

export default ManageProducts;
