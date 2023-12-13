import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeLayoutRoutingModule } from './home-layout-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TodoComponent } from '../todo/todo.component';
import { NavbarComponent } from '../component/navbar/navbar.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    TodoComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeLayoutRoutingModule
  ]
})
export class HomeLayoutModule { }
