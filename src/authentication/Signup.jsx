import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Googlelogin from "./Googlelogin";
import useAxiospublic from "../hooks/useAxiospublic";
import { updateProfile } from "firebase/auth";

const image_hosting_key = import.meta.env.VITE_image_host_key;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {
  const { createUser, loading, user } = useAuth();
  const axiosPublic = useAxiospublic();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const hostImage = await axiosPublic.post(image_hosting_url, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photo = hostImage?.data.data.display_url;
    await createUser(data.email, data.password).then((res) => {
      updateProfile(res.user, {
        displayName: data.name,
        photoURL: photo,
      });
    });
    const userInfo = {
      name: data.name,
      email: data.email,
      role: data.role,
      status: data.role === 'buyer' ? 'approved' : 'pending'
    }
    const response = await axiosPublic.post('/users', userInfo)
    if(response.data.insertedId){
      console.log(response);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center text-white">
      <div className="container mx-auto flex items-center justify-center px-6">
        <div className="w-full md:w-3/4 lg:w-3/4 bg-gray-800 rounded-lg shadow-lg border-2 border-gray-700">
          <div className="flex flex-col items-center md:flex-row-reverse">
            {/* Image Section */}
            <div className="hidden md:block">
              <img
                src="https://i.ibb.co.com/CWJGM9v/SL-100820-36440-34-removebg-preview.png"
                alt="Signup Illustration"
                className="rounded-r-lg"
              />
            </div>

            {/* Form Section */}
            <div className="w-full p-6">
              <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">
                Sign Up
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Photo URL */}
                <div className="grid grid-cols-2 gap-5 items-center">
                  <div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Photo URL
                      </label>
                      <input
                        type="file"
                        {...register("image")}
                        className="w-full px-4 py-1 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Name */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        {...register("name")}
                        placeholder="Your Name"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    {/* Role */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Role
                      </label>
                      <select
                        {...register("role", { required: true })}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                      </select>
                      {errors.role && (
                        <p className="text-red-500 text-sm mt-1">
                          You must select a role.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    {/* Email */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        {...register("email")}
                        placeholder="Email"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    {/* Password */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Password
                      </label>
                      <input
                        type="password"
                        {...register("password", {
                          pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        })}
                        placeholder="Password"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      {errors.password?.type === "pattern" && (
                        <p className="text-red-500 text-sm mt-1">
                          Password must be 8+ characters, including uppercase,
                          lowercase, number, and special character.
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword", {
                          required: true,
                          validate: (value) =>
                            watch("password") === value ||
                            "Passwords do not match",
                        })}
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.confirmPassword.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Sign Up
                  </button>
                </div>
              </form>

              <div>
                <Googlelogin></Googlelogin>
              </div>

              {/* Sign In Link */}
              <div className="mt-4 text-center">
                <p className="text-sm">
                  Already have an account?{" "}
                  <Link to="/signin" className="text-blue-400 hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
