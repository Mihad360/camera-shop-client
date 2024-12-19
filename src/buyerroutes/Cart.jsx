import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart?.reduce(
    (total, nextPrice) => total + nextPrice.price,
    0
  );

  return (
    <div className="container mx-auto py-10">
      {/* Page Title */}
      <h1 className="text-center text-4xl font-bold text-blue-400">
        Your Cart
      </h1>

      <div className="rounded-lg p-6 mt-8">
        {/* Cart Overview */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-white">
            Total Products: <span className="text-blue-400">{cart?.length}</span>
          </h2>
          <p className="text-2xl font-semibold text-white">
            Total Price:{" "}
            <span className="text-amber-400">{totalPrice}</span> TK
          </p>
          {/* {cart?.length ? (
            <Link to="/dashboard/payment">
              <button className="bg-blue-600 px-6 py-2 text-lg font-semibold text-white rounded-lg hover:bg-blue-500 transition">
                Proceed to Pay
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="bg-gray-600 px-6 py-2 text-lg font-semibold text-gray-400 rounded-lg cursor-not-allowed"
            >
              Pay
            </button>
          )} */}
        </div>

        {/* Cart Items Table */}
        <div className="mt-8">
          {cart?.length === 0 ? (
            <p className="text-center text-2xl font-semibold text-gray-400 py-10">
              Your cart is empty.
            </p>
          ) : (
            <table className="table-auto w-full text-gray-300">
              <thead className="text-gray-100">
                <tr className="text-lg">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Image</th>
                  <th className="py-3 px-4">Product Name</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart?.map((item, index) => (
                  <tr
                    key={item._id}
                    className="bg-gray-800 rounded-lg transition"
                  >
                    <td className="py-4 px-4 text-center">{index + 1}</td>
                    <td className="py-4 px-4">
                      <div className="flex justify-center">
                        <div className="avatar">
                          <div className="mask mask-squircle w-20 h-20">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-white">
                      {item.title}
                    </td>
                    <td className="py-4 px-4 font-bold text-blue-400">
                      {item.price} TK
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => handledelete(item._id)}
                        className="bg-red-600 px-4 py-2 text-white rounded-lg hover:bg-red-500 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;