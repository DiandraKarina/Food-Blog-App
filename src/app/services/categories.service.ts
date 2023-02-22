import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Category } from '../model/category';
import { BlogPost } from '../model/blogpost';

@Injectable({ providedIn: 'root' })
export class CategoryService {
    readonly endpoint = 'https://localhost:7281';
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category> {
    return this.http.get<Category>(this.endpoint+'api/Categories');
  }
  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(this.endpoint+'/api/Categories/' + id);
  }
  createCategory(category:Category
  ): Observable<Category> {
    return this.http.post<Category>(this.endpoint+'/api/Categories/create-category', category);
  }

  addCategoryToBlogPost(categoryId:number,blogPostId:number,blogpost:BlogPost):Observable<BlogPost>
  {
    return this.http.post<BlogPost>(`${this.endpoint}/api/BlogPost/${blogPostId}/comments/${categoryId}`,blogpost);
  }

  removeCategoryFromBlogPost(categoryId:number,blogPostId:number):Observable<BlogPost>
  {
    return this.http.delete<BlogPost>(`${this.endpoint}/api/BlogPost/${blogPostId}/comments/${categoryId}`);
  }

  updateCategory(
    id: string,
    name: string,
    blogPostId: string
  ):Observable<Category> {
    return this.http.put<Category>(this.endpoint+'/api/Categories/edit/' + id, {
      Id: id,
      newName: name,
      BlogPostId: blogPostId,
    });
  }
  deletePost(id: number):Observable<Category> {
    return this.http.delete<Category>(this.endpoint+'/api/Categories' + id);
  }
}