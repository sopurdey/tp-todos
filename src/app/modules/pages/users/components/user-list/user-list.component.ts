import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/shared/models/user';
import { UserService } from 'src/app/modules/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users!: User[];
  user!: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    })
  }

  addTodo(u: User) {
    console.log(u.todos);
  }

  clickEdit(id: number) {
    console.log(id);
  }

  clickUser(user: User) {
    console.log(user.todos);
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe((user: User) => {
      this.user = user;
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((user) => {
      console.log(user);
      this.getUsers();
    });
  }
}
