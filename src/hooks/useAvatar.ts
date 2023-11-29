import { useQuery } from "@tanstack/react-query"
import api from "../libs/Api"

export const useFetchAvatar = () => {
    const { data: avatars , isLoading, refetch, isError} = useQuery({
        queryFn: async () => {
            const dataAvatar = await api.get("/avatar");
            return dataAvatar;
        },
        queryKey: ["avatars"],
    });
    return {
        avatars,
        isLoading,
        refetch,
        isError,
    }
}