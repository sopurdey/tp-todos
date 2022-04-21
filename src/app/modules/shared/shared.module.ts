import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from '../pages/users/users.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, UsersModule],
})
export class SharedModule {}
