import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "./useAxiossecure";

const useAllusers = () => {
    const axiosSecure = useAxiossecure()
    const {refetch, data: allUsers = []} = useQuery({
        queryKey: ['allusers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allusers')
            return res.data
        }
    })
    return [allUsers, refetch]
};

export default useAllusers;