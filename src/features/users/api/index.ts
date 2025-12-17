import { api } from "@/config/axios-instance";
import type { IUser } from "../types";
import type { UserFormData } from "../schemas";

const userApi = {
    list: () => api.get<IUser[]>('/users'),
    // list: (params?: UserQueryParams) => api.get<IUser[]>('/users', { params }),
    details: (id?: number) => api.get<IUser[]>('/users', { params: { id } }),
    add: (payload: UserFormData) => api.post<IUser>('/users', payload),
    update: (id: number, payload: UserFormData) => api.put<IUser>(`/users/${id}`, payload),
}

export default userApi