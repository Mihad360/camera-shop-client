import { BsCameraReelsFill } from "react-icons/bs";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { MdFavorite } from "react-icons/md";
import useWishlist from "../hooks/useWishlist";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const [cart] = useCart();
  const [wishlist] = useWishlist()

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-900 text-white py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <BsCameraReelsFill className="text-blue-500 text-3xl" />
          <h1 className="text-2xl font-bold">Pixel Paradise</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-blue-500"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-blue-500"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-blue-500"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-blue-500"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Contact us
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          <div>
            <Link to="/wishlist" className="relative group hover:text-blue-400 transition duration-200">
              <MdFavorite className="text-3xl" />
              {/* Cart Item Count */}
              {wishlist?.length > 0 && (
                <span className="absolute top-3 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 translate-y-1">
                  {wishlist?.length}
                </span>
              )}
            </Link>
          </div>
          <div>
            <Link to="/carts" className="relative group hover:text-blue-400 transition duration-200">
              <FaShoppingCart className="text-3xl" />

              {/* Cart Item Count */}
              {cart?.length > 0 && (
                <span className="absolute top-3 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 translate-y-1">
                  {cart?.length}
                </span>
              )}
            </Link>
          </div>
          <div className="relative">
            {user ? (
              <button
                className="hover:text-blue-400 transition duration-200 hover:scale-105 hover:bg-blue-500 p-1 rounded-full"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </button>
            ) : (
              <button
                className="hover:text-blue-400 transition duration-200"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <FaUserCircle className="text-4xl" />
              </button>
            )}

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-30">
                <button
                  className="absolute top- right-2 text-gray-400 hover:text-white text-lg "
                  onClick={() => setDropdownOpen(false)}
                >
                  ✕
                </button>
                <div className="pt-7">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
                  >
                    Signup
                  </Link>
                  <Link
                    to="/signin"
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
                  >
                    Signin
                  </Link>
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-white bg-gray-700 transition duration-200 hover:bg-gray-800 w-full"
                    >
                      Sign Out
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-2xl hover:text-blue-400 transition duration-200">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
