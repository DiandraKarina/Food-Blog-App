import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/model/blogpost';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/posts.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Blog } from 'src/app/model/blog';
import { CommentService } from 'src/app/services/comments.service';
import { BlogService } from 'src/app/services/blog.service';
import { ToastrService } from 'ngx-toastr';
import { User_Create } from 'src/app/model/user/user-create';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

profile?:User_Create;
profilePic?: SafeResourceUrl;
blogposts: BlogPost[];
isUserLoggedIn:boolean=false;

  constructor(
    private postsService: PostService,
    private router: Router,
    private domSanitizer: DomSanitizer){}


  ngOnInit(): void{
   // this.azureService.isUserLoggedIn.subscribe(x=> {
     //   this.isUserLoggedIn=x;
   // })
    //this.getProfile();
   // this.getProfilePic();
    //this.postsService.getUserPosts(this.userName).subscribe(
    //  posts => {
    //    this.posts = posts;

      //}
   // );
  }

  /*getProfile(){
    this.azureService.getUserProfile().subscribe(userInfo=>{
      this.profile=userInfo;
    })
  }

  getProfilePic(){
    this.azureService.getProfilePic().subscribe(
      res=>{
        var urlCreator=window.URL || window.webkitURL
        this.profilePic=this.domSanitizer.bypassSecurityTrustResourceUrl(
          urlCreator.createObjectURL(res));
         } );
  }
*/
createBlog() {
  this.router.navigate(['/newpost']);
}

}
