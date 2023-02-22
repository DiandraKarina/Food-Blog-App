import { Commentt } from "./comment";

export interface BlogPost{
    blogPostId?:number;
    blogId:number;
    image:string;
    postName:string;
    description:string;
    comments?: Commentt[];
}