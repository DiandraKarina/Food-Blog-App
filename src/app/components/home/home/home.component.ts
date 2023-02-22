import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/model/blogpost';
import { User } from 'src/app/model/user/user';
import { PostService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLoggedIn:boolean=false;
  posts: BlogPost[];
  searchText:string | null;
  constructor(private postsService: PostService,private usersService:UsersService){}//,private azureService:AzureAdService) { }

  users: User[]=[];

  ngOnInit() {
    //this.postsService.getBlogPosts().subscribe(
    // response=>{this.posts=response;}
   //)

    //this.usersService.getAllUsers().subscribe(
    //  response=>{this.users=response;}
   // )

   // this.azureService.isUserLoggedIn.subscribe(
     // x=>{
    //    this.isUserLoggedIn=x;
    //  }
   // )

}

}
