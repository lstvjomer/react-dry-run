import { useMutation } from "@tanstack/react-query"
import { queryClient } from "@/config/react-query-client"
import type { UserFormData } from "../../schemas"
import userApi from "../../api"

export const useCreateUserMutation = () => {
    return useMutation({
        mutationFn: (payload: UserFormData) => userApi.add(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['users'],
            })
        } 
    })
}

export const useUpdateUserMutation = (id: number) => {
    return useMutation({
        mutationFn: (payload: UserFormData) => userApi.update(id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['users', id],
                exact: false
            })
        } 
    })
}