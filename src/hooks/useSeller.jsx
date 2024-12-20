import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxiossecure";

const useSeller = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiossecure();

  const { data: isSeller, isPending: isSellerloading } = useQuery({
    queryKey: [user?.email, "seller"],
    // enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/seller/${user?.email}`);
      return res.data?.seller;
    },
  });
  return [isSeller, isSellerloading];
};

export default useSeller;
