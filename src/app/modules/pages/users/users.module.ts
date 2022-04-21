import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { TodosModule } from '../todos/todos.module';

@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [CommonModule, FormsModule, TodosModule],
})
export class UsersModule {}
