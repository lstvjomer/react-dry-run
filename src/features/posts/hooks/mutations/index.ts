import { useMutation } from "@tanstack/react-query"
import type { PostFormData } from "../../schemas"
import postApi from "../../api"
import { queryClient } from "@/config/react-query-client"

export const useCreatePostMutation = () => {
    return useMutation({
        mutationFn: (payload: PostFormData) => postApi.add(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts'],
                exact: false
            })
        } 
    })
}

export const useUpdatePostMutation = (id: number) => {
    return useMutation({
        mutationFn: (payload: PostFormData) => postApi.update(id, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['posts', id],
                exact: false
            })
        } 
    })
}