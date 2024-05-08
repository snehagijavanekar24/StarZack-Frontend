import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './gamepage/header/header.component';
import { CategoryComponent } from './gamepage/category/category.component';
import { GameStreamingComponent } from './gamepage/game-streaming/game-streaming.component';
import { ChatsupportComponent } from './chatsupport/chatsupport.component';
import { NewsComponent } from './news/news.component';
import { GameStreamingDetailsComponent } from './game-streaming/game-streaming-details/game-streaming-details.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/SignupComponent';
import { NgOptimizedImage } from '@angular/common';
import { Header1Component } from './header1/header1.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoute: Routes =[
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'category', component:CategoryComponent},
  {path:'abcd',component:NewsComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    GameStreamingComponent,
    ChatsupportComponent,
    NewsComponent,
    GameStreamingDetailsComponent,
    AdminComponent,
    HomeComponent,
    SignupComponent,
    Header1Component,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]

})
export class AppModule {

 }
