import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ChatsupportComponent } from './chatsupport/chatsupport.component';
import { GameStreamingComponent } from './game-streaming/game-streaming.component';
import { NewsComponent } from './news/news.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRoute:Routes=[
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'home',component:HomeComponent},
  {path:'category',component:CategoryComponent},
  {path:'gamestreaming',component:GameStreamingComponent},
  {path:'chatsupport',component:ChatsupportComponent},
  {path:'News',component:NewsComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:PagenotfoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    HomeComponent,
    AdminComponent,
    ChatsupportComponent,
    GameStreamingComponent,
    NewsComponent,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
