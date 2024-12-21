import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiospublic from "./useAxiospublic";

const useUsers = () => {
  const axiosPublic = useAxiospublic();
  const { user } = useAuth();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      if (!user) return [];
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res.data;
    },
    enabled: !!user,
  });

  return [users, refetch];
};

export default useUsers;
