import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";

const Googlelogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleGoogle = async () => {
    await googleLogin();
    navigate("/");
  };

  return (
    <div className="text-center pt-5">
      <button
        onClick={handleGoogle}
        className="text-3xl px-4 py-2 rounded-xl text-white hover:bg-gray-600 bg-gray-700 transition duration-200"
      >
        <FcGoogle />
      </button>
    </div>
  );
};

export default Googlelogin;
