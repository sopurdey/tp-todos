import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/modules/shared/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  @Input()
  user!: User;

  constructor() { }

  submitUserForm(e: NgForm) {
    console.log(e.value);
    this.user = e.value;
    console.log(this.user);
  }

  ngOnInit(): void {}

}
