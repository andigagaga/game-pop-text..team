import { useQuery } from "@tanstack/react-query";
import api from "../libs/Api";
import { AvatarData } from "../components/StartGame";

export const useFetchAvatar = () => {
  const {
    data: avatars,
    isLoading,
    refetch,
    isError,
  } = useQuery({
    queryKey: ["avatars"],
    queryFn: async () => {
      try {
        const { data } = await api.get("/avatar");
        return data;
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    },
  });
  return {
    avatars,
    isLoading,
    refetch,
    isError,
  };
};
