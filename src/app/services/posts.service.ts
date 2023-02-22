import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../model/blogpost';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class PostService {
  readonly endpoint = 'https://localhost:7281';
  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(this.endpoint+'/api/BlogPost');
  }
  getBlogPost(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(this.endpoint+'/api/BlogPost/' + id);
  }
  createBlogPost(model:BlogPost
  ): Observable<BlogPost> {
    return this.http.post<BlogPost>(this.endpoint+'/api/BlogPost/create-blogpost', model);
  }

  updateBlogPost(
    id: number,
    image: string,
    postName: string,
    description: string
  ):Observable<BlogPost> {
    return this.http.put<BlogPost>(this.endpoint+'/api/BlogPost/edit/' + id, {
      Id: id,
      newImage: image,
      newPostName: postName,
      newDescription: description,
    });
  }
  deletePost(id: number):Observable<BlogPost> {
    return this.http.delete<BlogPost>(this.endpoint+'/api/BlogPost/' + id);
  }
}
