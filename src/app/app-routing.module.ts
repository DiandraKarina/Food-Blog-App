import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './components/home/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile-page/profile/profile.component';
import {RegisterComponent} from './components/register/register.component';
import { StatusComponent } from './components/status/status.component';
import { NewPostComponent } from './components/profile-page/new-post/new-post.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { BlogComponent } from './components/blog/blog.component';
import { SingleCategoryPageComponent } from './components/single-category-page/single-category-page.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { PostBoxComponent } from './components/post-box/post-box.component';
import { MsalGuard } from '@azure/msal-angular';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path:'about',component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path:'profile', component: ProfileComponent},//, canActivate:[MsalGuard]},
  {path:'newpost', component:NewPostComponent}, //,canActivate:[MsalGuard]},
  {path:'welcome', component: WelcomeComponent},
  {path:'blog/:id', component:BlogComponent},
  {path:'single-cat', component:SingleCategoryPageComponent},
  { path: '',   redirectTo: '/welcome', pathMatch: 'full' },
  {path:'**', component: StatusComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
