import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './modules/pages/home/components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './modules/pages/users/components/user-list/user-list.component';
import { TodoItemComponent } from './modules/pages/todos/components/todo-item/todo-item.component';

const ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
