import { Component, OnInit} from '@angular/core';
import {BlogPost} from 'src/app/model/blogpost';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/posts.service';
import { CategoryService } from 'src/app/services/categories.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  addBlogForm: FormGroup;
  category:Category;
  blogposts: BlogPost[];
  blogpost: BlogPost;
  
  
  userSubmitted: boolean;
  file: any;
  fileExtension: any;
  filepostedOn= new Date().toString().split("+")[0].split(':').join('_');
  //filepostedOn= new Date().toString().split(':').join('_');
  imageUrl: string | ArrayBuffer = "https://www.adc-awards.archi/images/joomlart/demo/default.jpg"

  constructor(private fb: FormBuilder,
              private router: Router,
              private http:HttpClient,
              private newBlogpost:PostService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.CreateAddBlogForm();
    this.onSubmit();
    this.CreateCategory(this.category);
  }

  CreateCategory(category){
    this.categoryService.createCategory(category).subscribe(res=>{this.category=res});
  }
  CreateAddBlogForm() {
    this.addBlogForm = this.fb.group({
      Category:[null,Validators.required],
      Title: [null, Validators.required],
      Description: [null, Validators.required],
      Banner_Image: [null, Validators.required]
    })
  }

  onSubmit(){
  this.newBlogpost.createBlogPost(this.blogpost).subscribe(res=>this.blogpost=res);
  //this.categoryService.createCategory(this.category).subscribe(res=>this.category=res);
  }
  get Category(){
    return this.addBlogForm.get('Category') as FormControl;
  }
  get Title(){
    return this.addBlogForm.get('Title') as FormControl;
  }

  get Description(){
    return this.addBlogForm.get('Description') as FormControl;
  }

  get Image(){
    return this.addBlogForm.get('Image') as FormControl;
  }

  //blogData(): BlogPost {
   // return this.blogpost = {
      //Id: this.newBlogService.newpostID(),
     // category:this.Category.value,
     // image: this.file.name+this.filepostedOn+this.fileExtension,
    // // postName: this.Title.value,
      //description: this.Description.value,
      //createdDate:this.Crea
   // }
  //}

  onFileSelect(event) {
    this.file = event.target.files[0];
    this.fileExtension = (".").concat(this.file.name.split('.').pop());

    const reader = new FileReader();
    reader.readAsDataURL(this.file);

    reader.onload = event => {
      this.imageUrl = reader.result;
    };
  }
}
