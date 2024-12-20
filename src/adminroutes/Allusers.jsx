import Swal from "sweetalert2";
import useAllusers from "../hooks/useAllusers";
import useAxiossecure from "../hooks/useAxiossecure";

const Allusers = () => {
  const [allUsers, refetch] = useAllusers();
  const filteredUsers = allUsers?.filter((user) => user.role !== "admin");
  const axiosSecure = useAxiossecure();

  const makeSeller = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this buyer to Seller!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Seller",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/make-seller/${id}`).then((res) => {
          if (res?.data.modifiedCount > 0) {
            Swal.fire({
              title: "Done!",
              text: "This Buyer is now a Seller",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove user!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res?.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "This user has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="bg-gray-900 text-gray-300 flex items-center justify-center mt-12">
      <div className="w-full max-w-6xl p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          All Users
        </h2>
        {filteredUsers?.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="px-4 py-2 border border-gray-600">Name</th>
                <th className="px-4 py-2 border border-gray-600">Email</th>
                <th className="px-4 py-2 border border-gray-600">Role</th>
                <th className="px-4 py-2 border border-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers?.map((user, index) => (
                <tr key={index} className="text-gray-300 hover:bg-gray-700">
                  <td className="px-4 py-2 border border-gray-600">
                    {user.name}
                  </td>
                  <td className="px-4 py-2 border border-gray-600">
                    {user.email}
                  </td>
                  <td className="px-4 py-2 border text-amber-500 border-gray-600">
                    {user.role}
                  </td>
                  <td className="px-4 py-2 border border-gray-600 flex gap-2 justify-center">
                    <button
                      onClick={() => makeSeller(user._id)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-300 text-sm"
                    >
                      Change Role
                    </button>
                    <button
                      onClick={() => handledelete(user._id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300 text-sm"
                    >
                      Remove User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-400">
            No users available to display.
          </p>
        )}
      </div>
    </div>
  );
};

export default Allusers;
