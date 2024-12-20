import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiossecure from "./useAxiossecure";

const useProducts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiossecure();
  const { refetch, data: products = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/seller-products?email=${user?.email}`);
      return res.data;
    },
  });
  return [products, refetch];
};

export default useProducts;
