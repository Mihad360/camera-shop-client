import { BsCameraReelsFill } from "react-icons/bs";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import { MdFavorite } from "react-icons/md";
import useWishlist from "../hooks/useWishlist";
import useUsers from "../hooks/useUsers";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const [cart] = useCart();
  const [wishlist] = useWishlist();
  const [users] = useUsers();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="bg-gray-900 text-white py-3 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <BsCameraReelsFill className="text-blue-500 text-3xl" />
          <h1 className="text-2xl font-bold">Pixel Paradise</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-blue-400 transition duration-200"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Icons and User Dropdown */}
        <div className="flex items-center space-x-4 relative">
          <Link
            to="/wishlist"
            className={`relative group hover:text-blue-400 transition duration-200 ${
              location.pathname === "/wishlist" ? "text-blue-500" : ""
            }`}
          >
            <MdFavorite className="text-2xl md:text-3xl" />
            {/* Cart Item Count */}
            {wishlist?.length > 0 && (
              <span className="absolute top-3 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1 translate-y-1">
                {wishlist?.length}
              </span>
            )}
          </Link>

          <Link
            to="/carts"
            className={`relative group hover:text-blue-400 transition duration-200 ${
              location.pathname === "/carts" ? "text-blue-500" : ""
            }`}>
            <FaShoppingCart className="text-2xl md:text-3xl" />
            {cart?.length > 0 && (
              <span className="absolute top-4 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart?.length}
              </span>
            )}
          </Link>
          <div className="relative">
            {user ? (
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-400 transition duration-200 hover:scale-105 hover:bg-blue-500 p-1 rounded-full"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={user?.photoURL}
                  alt="User"
                />
              </button>
            ) : (
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-blue-400 transition duration-200"
              >
                <FaUserCircle className="text-4xl" />
              </button>
            )}

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded shadow-lg z-30">
                {users?.role === "buyer" && ""}
                {users?.role === "seller" && (
                  <Link
                    to="/dashboard/view-added-products"
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
                  >
                    Dashboard
                  </Link>
                )}
                {users?.role === "admin" && (
                  <Link
                    to="/dashboard/all-users"
                    className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
                  >
                    Dashboard
                  </Link>
                )}
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
                >
                  Sign Up
                </Link>
                <Link
                  to="/signin"
                  className="block px-4 py-2 text-white hover:bg-gray-700 transition duration-200"
                >
                  Sign In
                </Link>
                {user && (
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-white bg-gray-700 transition duration-200 hover:bg-gray-800 w-full"
                  >
                    Sign Out
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl hover:text-blue-400 transition duration-200"
          >
            ☰
          </button>
          {menuOpen && (
            <div className="absolute top-16 right-0 bg-gray-900 text-white w-full shadow-lg z-30">
              <NavLink
                to="/"
                className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-200"
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-200"
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-200"
              >
                Contact Us
              </NavLink>
              {users?.role === "seller" && (
                <NavLink
                  to="/dashboard/view-added-products"
                  className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-200"
                >
                  Dashboard
                </NavLink>
              )}
              {users?.role === "admin" && (
                <NavLink
                  to="/dashboard/all-users"
                  className="block px-4 py-2 text-white hover:bg-gray-800 transition duration-200"
                >
                  Dashboard
                </NavLink>
              )}
              {user && (
                <button
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 transition duration-200"
                >
                  Sign Out
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
