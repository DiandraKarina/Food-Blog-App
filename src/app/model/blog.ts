import { BlogPost } from "./blogpost";

export interface Blog{
    id?:number;
    userId?:number;
    profilePhoto:string;
    name:string;
    posts: BlogPost[];
}