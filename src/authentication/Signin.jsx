import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Googlelogin from "./Googlelogin";
import { Bounce, toast } from "react-toastify";

const Signin = () => {
  const { createSignIn, user } = useAuth();
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createSignIn(data.email, data.password).then((res) => {
      console.log(res);
      toast("✔️ You are Signed In", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate('/')
      window.location.reload()
    });
  };

  return (
    <div>
      <div className="bg-gray-900 h-screen flex items-center justify-center text-white">
        <div className="container mx-auto flex items-center justify-center px-6">
          <div className="w-full md:w-3/4 lg:w-3/5 bg-gray-800 rounded-lg shadow-lg border-2 border-gray-700">
            <div className="flex flex-col items-center md:flex-row-reverse">
              {/* Image Section */}
              <div className="hidden md:block">
                <img
                  src="https://i.ibb.co.com/ypRTByS/SL-100820-36440-29-removebg-preview.png"
                  alt="Signup Illustration"
                  className="w-[700px]"
                />
              </div>

              {/* Form Section */}
              <div className="w-full p-6">
                <h2 className="text-2xl font-bold text-blue-500 mb-4 text-center">
                  Sign In
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  {/* Photo URL */}
                  <div className="">
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
                    </div>

                    <div>
                      {/* Password */}
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                          Password
                        </label>
                        <input
                          type="password"
                          {...register("password", { required: true })}
                          placeholder="Password"
                          className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors?.password && (
                          <p className="text-red-500 text-sm mt-1">
                            password is required
                          </p>
                        )}
                        {errors?.password?.message && (
                          <p>Password is invalid</p>
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
                      Sign In
                    </button>
                  </div>
                </form>

                <div>
                  <Googlelogin></Googlelogin>
                </div>

                {/* Sign In Link */}
                <div className="mt-4 text-center">
                  <p className="text-sm">
                    Do not have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-blue-400 hover:underline"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
