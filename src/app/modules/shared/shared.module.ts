import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from '../pages/users/users.module';
import { TodosModule } from '../pages/todos/todos.module';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, HttpClientModule, UsersModule, TodosModule],
})
export class SharedModule {}
