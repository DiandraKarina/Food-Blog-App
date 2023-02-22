import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/model/blogpost';
import { PostService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  starRating = 0;
  blogpost:BlogPost;

  constructor(private route: ActivatedRoute,private postService:PostService){}

  ngOnInit(): void {
      //this.receiveParams();
      this.getSingleBlogPost(parseInt(this.route.snapshot.paramMap.get('id')));
  }
  receiveParams(){
    this.route.queryParams.subscribe(params=>{
      this.getSingleBlogPost(params['id']);
    })
  }

  getSingleBlogPost(id:number){
    this.postService.getBlogPost(id).subscribe(res=>{
      this.blogpost=res;
    })
  }
}
