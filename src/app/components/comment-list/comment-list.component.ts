import { Component, Input, OnInit } from '@angular/core';
import { Commentt } from 'src/app/model/comment';
import { CommentService } from 'src/app/services/comments.service';
import { PostService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  
  comments: Commentt[];
  @Input() blogpostId:number;
  constructor(private blogpService: PostService){}
  ngOnInit(): void {
    this.blogpService.getBlogPost(this.blogpostId).subscribe(
      res=>{
        this.comments=res.comments;
      }
    )
  }
}
