import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../model/blog';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BlogService {
  readonly endpoint = 'https://localhost:7281';
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog> {
    return this.http.get<Blog>(this.endpoint+'api/Blog');
  }
  getBlog(id: string): Observable<Blog> {
    return this.http.get<Blog>(this.endpoint+'/api/Blog/' + id);
  }
  createBlog(blog:Blog
  ): Observable<Blog> {
    return this.http.post<Blog>(this.endpoint+'/api/Blog/create-blog', blog);
  }


  addBlogPostToBlog(blogId:number,blogPostId:number,blog:Blog):Observable<Blog>{
    return this.http.post<Blog>(`${this.endpoint}/api/Blog/${blogId}/blogposts/${blogPostId}`,blog);
  }

  removeBlogPostFromBlog(blogId:number,blogPostId:number):Observable<Blog>{
    return this.http.delete<Blog>(`${this.endpoint}/api/Blog/${blogId}/blogposts/${blogPostId}`);
  }

  updateBlog(
    id: string,
    image: string,
    postName: string,
    description: string
  ):Observable<Blog> {
    return this.http.put<Blog>(this.endpoint+'/api/Blog/edit/' + id, {
      Id: id,
      newImage: image,
      newPostName: postName,
      newDescription: description,
    });
  }
  deleteBlog(id: number):Observable<Blog> {
    return this.http.delete<Blog>(this.endpoint+'/api/Blog/' + id);
  }
}