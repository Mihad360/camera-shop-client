import { NavLink } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import { RiAdminFill, RiContactsBook3Fill } from "react-icons/ri";
import { BsCameraReelsFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

const Sidebar = () => {
  const [users] = useUsers();
  console.log(users);

  return (
    <div className="h-screen bg-gray-900 text-gray-100 flex flex-col shadow-lg">
      <h1 className="p-4 flex items-center gap-3 justify-center font-bold text-lg border-b border-gray-700">
        <BsCameraReelsFill className="text-blue-500 text-3xl" />
        Pixel Paradise
      </h1>
      <div className="p-4 font-bold text-lg border-b border-gray-700">
        Dashboard ➤
      </div>
      <div className="flex-1 overflow-y-auto">
        {users?.role === "seller" && (
          <div className="space-y-4 mt-4">
            <NavLink
              to="/dashboard/add-new-product"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 -lg transition ${
                  isActive ? "bg-gray-600 text-white" : "hover:bg-gray-800"
                }`
              }
            >
              <RiAdminFill className="text-lg" />
              <span className="text-sm font-medium">Add New Products</span>
            </NavLink>
            <NavLink
              to="/dashboard/all-products"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 -lg transition ${
                  isActive ? "bg-gray-600 text-white" : "hover:bg-gray-800"
                }`
              }
            >
              <RiAdminFill className="text-lg" />
              <span className="text-sm font-medium">View Added Products</span>
            </NavLink>
            <NavLink
              to="/dashboard/manage-products"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 -lg transition ${
                  isActive ? "bg-gray-600 text-white" : "hover:bg-gray-800"
                }`
              }
            >
              <RiAdminFill className="text-lg" />
              <span className="text-sm font-medium">Manage Products</span>
            </NavLink>
          </div>
        )}
        {users?.role === "admin" && (
          <div className="space-y-4 mt-4">
            <NavLink
              to="/dashboard/all-users"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 -lg transition ${
                  isActive ? "bg-gray-600 text-white" : "hover:bg-gray-800"
                }`
              }
            >
              <RiAdminFill className="text-lg" />
              <span className="text-sm font-medium">All Users</span>
            </NavLink>
            <NavLink
              to="/dashboard/users-products"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-2 -lg transition ${
                  isActive ? "bg-gray-600 text-white" : "hover:bg-gray-800"
                }`
              }
            >
              <RiAdminFill className="text-lg" />
              <span className="text-sm font-medium">Users' Products</span>
            </NavLink>
          </div>
        )}
        <div className="w-full">
          <div className="border-t border-neutral-500 my-4"></div>
        </div>
        <ul className="space-y-4">
          <li className="text-gray-300 hover:bg-gray-600 rounded-lg">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-bold"
                  : "hover:bg-gray-800"
              }
            >
              <span className="flex items-center gap-3 py-2 px-4">
                <FaHome className="text-xl" />
                <span>Home</span>
              </span>
            </NavLink>
          </li>

          <li className="text-gray-300 hover:bg-gray-600 rounded-lg">
            <NavLink
              to="/shop"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-bold"
                  : "text-gray-300"
              }
            >
              <span className="flex items-center gap-3 py-2 px-4">
                <FaShop className="text-xl" />
                <span>Shop</span>
              </span>
            </NavLink>
          </li>

          <li className="text-gray-300 hover:bg-gray-600 rounded-lg">
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white font-bold"
                  : "text-gray-300"
              }
            >
              <span className="flex items-center gap-3 py-2 px-4">
                <RiContactsBook3Fill className="text-xl" />
                <span>Contact Us</span>
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-4 border-t border-gray-700 text-center text-xs">
        © 2024 Camera Shop
      </div>
    </div>
  );
};

export default Sidebar;
