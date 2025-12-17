export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}
 
// export interface IUpdatePostPayload extends IPostFormData {
//     userId: number;
// }
 
export type PostQueryParams = Partial<Pick<IPost, 'userId'>>;