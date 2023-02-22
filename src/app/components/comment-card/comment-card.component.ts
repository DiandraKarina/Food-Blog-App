import { Component,EventEmitter,Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/model/blogpost';
import { CommentService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit{
  //@Input() comment: Comment;
  //@Output() commentSaved = new EventEmitter<Comment>();

  @ViewChild('commentForm') commentForm: NgForm;
 comment: string;
 blogpost: BlogPost;
 @Input() blogPostId: number;
  constructor(
    private addCommentService: CommentService
  ) { }

  ngOnInit(): void {
this.AddComment();
  }



  AddComment(){
    this.addCommentService.addCommentToBlogPost(this.blogPostId,this.comment).subscribe(

    );
  }
  
}
