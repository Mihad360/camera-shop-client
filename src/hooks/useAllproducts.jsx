import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";


const useAllproducts = () => {
    const axiosSecure = useAxiossecure()
    const {refetch, data: products = []} = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosSecure.get('/products/seller-products')
            return res.data
        }
    })
    return [products, refetch]
};

export default useAllproducts;