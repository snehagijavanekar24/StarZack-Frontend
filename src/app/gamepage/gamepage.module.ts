import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { GameStreamingComponent } from './game-streaming/game-streaming.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CategoryComponent,
    GameStreamingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GamepageModule { }
