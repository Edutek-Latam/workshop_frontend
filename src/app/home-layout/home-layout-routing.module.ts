import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { TodoComponent } from '../todo/todo.component';

const routes: Routes = [
  {path:'', component: HomeLayoutComponent, children:[
    {path:'', component: TodoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRoutingModule { }
