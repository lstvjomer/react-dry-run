import { useQuery } from "@tanstack/react-query"
import userApi from "../../api";

export const useGetUserListQuery = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await userApi.list();
            return data;
        },
    });
};
 
export const useGetUserDetailsQuery = (id?: number) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: async () => {
            const { data } = await userApi.details(id);
            return data[0];
        },
        enabled: !!id,
    });
};