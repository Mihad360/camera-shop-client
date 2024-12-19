import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiospublic from "./useAxiospublic";

const useWishlist = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiospublic();
  const { refetch, data: wishlist = [] } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/wishlist?email=${user?.email}`);
      return res.data;
    },
  });
  return [wishlist, refetch];
};

export default useWishlist;
