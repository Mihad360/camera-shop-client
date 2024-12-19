import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiossecure from "../hooks/useAxiossecure";
import { useNavigate } from "react-router-dom";
import useAxiospublic from "../hooks/useAxiospublic";
import useWishlist from "../hooks/useWishlist";

const ProductCard = ({ item }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiossecure();
  const axiosPublic = useAxiospublic();
  const navigate = useNavigate();
  const [wishlist, refetch] = useWishlist()
  const { title, image, description, price, category, brand } = item;

  const addtoCart = () => {
    if (user && user?.email) {
      const cartItem = {
        buyerEmail: user?.email,
        title,
        image,
        price,
        description,
        category,
        brand,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} added to the cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in!!",
        text: "Please Sign In to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sign In",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin", { from: location });
        }
      });
    }
  };

  const addtoWishlist = () => {
    const wishlistItem = {
      buyerEmail: user?.email,
      title,
      image,
      price,
      description,
      category,
      brand,
    };
    axiosPublic.post("/wishlist", wishlistItem).then((res) => {
      if(res?.data.insertedId){
        console.log(res);
        refetch()
      }
    });
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 bg-gray-800">
      {/* Product Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black opacity-50"></div>
      </div>

      <div className="p-4">
        {/* Product Title */}
        <h3 className="text-2xl font-bold text-white leading-tight hover:text-yellow-400 transition-all">
          {title}
        </h3>

        {/* Product Description */}
        <p className="text-sm text-gray-300 mt-2">{description}</p>

        {/* Product Category and Brand */}
        <div className="mt-2 flex items-center space-x-3 justify-between">
          <p>
            <span className="text-xs font-medium bg-gray-700 text-gray-200 px-2 py-1 mr-2 rounded-full">
              {category}
            </span>
            <span className="text-xs font-medium text-gray-400">{brand}</span>
          </p>
          <p className="text-lg font-bold text-yellow-400">{`BDT ${price}`}</p>
        </div>

        {/* Product Price */}
        <div className="flex items-center justify-end mt-4">
          <div className="flex space-x-3">
            {/* Add to Cart Button */}
            <button
              onClick={addtoCart}
              className="bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Add to Cart
            </button>

            {/* Add to Wishlist Button */}
            <button
              onClick={addtoWishlist}
              className="bg-gray-600 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
