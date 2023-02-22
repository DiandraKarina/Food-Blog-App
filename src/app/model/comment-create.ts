export interface Comment_Create{
    id?: number;
    userId:number;
    blogPostId: number;
    message: string;
}