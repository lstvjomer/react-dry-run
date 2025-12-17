import { useQuery } from "@tanstack/react-query"
import postApi from "../../api"

export const useGetPostListQuery = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const { data } = await postApi.list();
            return data;
        },
    });
};
 
export const useGetPostDetailsQuery = (id?: number) => {
    return useQuery({
        queryKey: ['posts', id],
        queryFn: async () => {
            const { data } = await postApi.details(id);
            return data[0];
        },
        enabled: !!id,
    });
};