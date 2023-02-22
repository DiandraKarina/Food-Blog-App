import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
import { SocialComponent } from './components/social/social.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './components/profile-page/profile/profile.component';
import { StatusComponent } from './components/status/status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { NewPostComponent } from './components/profile-page/new-post/new-post.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { ScrollTopComponent } from './components/scroll-top/scroll-top.component';
import { PostBoxComponent } from './components/post-box/post-box.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { LogoComponent } from './components/logo/logo.component';
import { AboutComponent } from './components/about/about.component';
import { SingleCategoryPageComponent } from './components/single-category-page/single-category-page.component';
import { CommentCardComponent } from './components/comment-card/comment-card.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import {MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent} from '@azure/msal-angular';
import { PublicClientApplication, InteractionType } from '@azure/msal-browser';
import { NavbarCatComponent } from './components/navbar-cat/navbar-cat.component';
import { SearchComponent } from './components/search/search.component';
import { Register2Component } from './components/register2/register2.component';


@NgModule({
  declarations: [
    AppComponent,
    SocialComponent,
    LoginComponent,
    HomeComponent,
    BlogComponent,
    ProfileComponent,
    StatusComponent,
    ButtonComponent,
    FooterComponent,
    RegisterComponent,
    NewPostComponent,
    WelcomeComponent,
    Navbar1Component,
    ScrollTopComponent,
    PostBoxComponent,
    Navbar2Component,
    LogoComponent,
    AboutComponent,
    SingleCategoryPageComponent,
    CommentCardComponent,
    CommentListComponent,
    NavbarCatComponent,
    SearchComponent,
    Register2Component

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
        FormsModule,
        NgbModule,
        MatDatepickerModule,
        MatListModule,
        MatRadioModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatIconModule,
        MatCardModule,
        AppRoutingModule,
        HttpClientModule,
        MatExpansionModule,
       /* MsalModule.forRoot(new PublicClientApplication
          (
            {
              auth:{
                clientId:'24cb88b3-d952-4e14-a485-5daebffecc1a',
                authority:'https://login.microsoftonline.com/544f8ac3-ce4c-47d1-9b72-284ac54b8d1c',
                redirectUri:'http://localhost:4200'
              },
              cache:
              {
                cacheLocation: 'localStorage',
                storeAuthStateInCookie: false
              }
            }
          ),
          /*
          {
            interactionType:InteractionType.Redirect,
            authRequest:{
              scopes: ['api://765afa68-78ab-4642-82f7-56fcd9842176/api.scope']
            }
          },
          {
            interactionType:InteractionType.Redirect,
            protectedResourceMap:new Map(
              [
                //['https://graph.microsoft.com/v1.0/me',['user.read']]
                ['https://localhost:7281/',['api://765afa68-78ab-4642-82f7-56fcd9842176/api.scope']]
              ]
            ),
            
          }),
          

          {
            interactionType:InteractionType.Redirect,
            authRequest:{
              scopes: ['user.read']
              ['api://765afa68-78ab-4642-82f7-56fcd9842176/api.scope']
            }
          },
          {
            interactionType:InteractionType.Redirect,
            protectedResourceMap:new Map(
              [
        
                ['https://graph.microsoft.com/v1.0/me',['user.read']],
                ['https://localhost:7281/',['api://765afa68-78ab-4642-82f7-56fcd9842176/api.scope']]
              ]
            ),
            
          }), 
*/
  ],

 /* providers: [{provide:HTTP_INTERCEPTORS,
  useClass:MsalInterceptor,
  multi:true
},/*MsalGuard,AzureAdService],
*/

bootstrap: [AppComponent,MsalRedirectComponent]
})
export class AppModule { }
