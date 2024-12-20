import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useSeller from "../hooks/useSeller";
import Loading from "../components/Loading";

const Sellerroute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const [isSeller, isSellerloading] = useSeller();
  console.log(isSeller);

  if (loading || isSellerloading) {
    return <Loading></Loading>;
  }

  if (user && isSeller) {
    return children;
  }
  return <Navigate to="/signin" state={{ from: location }} replace></Navigate>;
};

export default Sellerroute;
