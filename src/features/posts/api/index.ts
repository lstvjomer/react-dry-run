import { api } from "@/config/axios-instance";
import type { IPost, PostQueryParams } from "../types";
import type { PostFormData } from "../schemas";
import type { IUser } from "@/features/users/types";

const postApi = {
    lists: () => api.get<IPost[]>('/posts'),
    list: (params?: PostQueryParams) => api.get<IPost[]>('/posts', { params }),
    details: (id?: number) => api.get<IPost[]>('/posts', { params: { id } }),
    add: (payload: PostFormData) => api.post<IUser>('/posts', payload),
    update: (id: number, payload: PostFormData) => api.put<IPost>(`/posts/${id}`, payload),
}

export default postApi