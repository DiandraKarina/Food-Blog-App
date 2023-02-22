import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BlogPost } from "../model/blogpost";

@Injectable({ providedIn: 'root' })
export class CommentService {
  readonly endpoint = 'https://localhost:7281';
  constructor(private http: HttpClient) {}

  
  getComments(id:string): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.endpoint + 'api/BlogPost/'+id+'/comments');
  }

  addCommentToBlogPost(blogPostId:number,comment: string):Observable<BlogPost>
  {
    return this.http.post<BlogPost>(`${this.endpoint}/api/BlogPost/${blogPostId}/comments`,comment);
  }

  removeCommentFromBlogPost(commentId:number,blogPostId:number):Observable<BlogPost>
  {
    return this.http.delete<BlogPost>(`${this.endpoint}/api/BlogPost/${blogPostId}/comments/${commentId}`);
  }
}
