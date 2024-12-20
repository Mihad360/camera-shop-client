import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";

const Adminroute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminloading] = useAdmin();
  console.log(isAdmin);
  const location = useLocation();

  if (loading || isAdminloading) {
    return (
      <Loading></Loading>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default Adminroute;
