import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/model/blog';
import { BlogPost } from 'src/app/model/blogpost';
import { User } from 'src/app/model/user/user';
import { User_Create } from 'src/app/model/user/user-create';
import { BlogService } from 'src/app/services/blog.service';
import { PostService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.css'],
})
export class PostBoxComponent implements OnInit {
  // posts: any[];
  listing: User_Create[];
  starRating = 0;
  blogposts: BlogPost[];
  blogpost: BlogPost;
  blog: Blog;
  constructor(
    private usersService: UsersService,
    private router: Router,
    private postsService: PostService,
    private blogService: BlogService,
    private route: ActivatedRoute
  ) {}

  //users: User[]=[];
  ngOnInit(): void {
    this.getUsersListing();
    //this.usersService.getAllUsers().subscribe(
    //  response=>{this.users=response;}
    // )
    this.getAllPosts();
    this.DeleteBlogPost(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  getAllPosts() {
    this.postsService.getBlogPosts().subscribe((res) => {
      this.blogposts = res;
      // console.log(res);
    });
  }

  getUsersListing() {
    this.usersService.getUsers().subscribe((res) => {
      this.listing = res;
    });
  }

  viewBlogPost(id: number) {
    // console.log(id)
    this.router.navigate([`/blog/${id}`]);
  }

  DeleteBlogPost(id: number) {
    console.log(id);
    this.postsService.deletePost(id).subscribe((res) => {
      this.blogpost = res;
    });
  }

  DeleteBlog(id:number){
this.blogService.deleteBlog(id).subscribe(res=>{this.blog=res});
  }
}
